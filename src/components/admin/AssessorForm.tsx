import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { useQueryClient } from '@tanstack/react-query'
import { supabase, type Assessor } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ImagePlus } from 'lucide-react'

const assessorSchema = z.object({
  name: z.string().min(2, 'Nome deve ter ao menos 2 caracteres'),
  role: z.string().optional(),
})
type AssessorFormValues = z.infer<typeof assessorSchema>

interface Props {
  open: boolean
  onClose: () => void
  assessor: Assessor | null
}

export default function AssessorForm({ open, onClose, assessor }: Props) {
  const queryClient = useQueryClient()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AssessorFormValues>({
    resolver: zodResolver(assessorSchema),
  })

  useEffect(() => {
    if (open) {
      reset({ name: assessor?.name ?? '', role: assessor?.role ?? '' })
      setImageFile(null)
      setImagePreview(assessor?.image_url ?? null)
    }
  }, [open, assessor, reset])

  useEffect(() => {
    return () => {
      if (imagePreview && imagePreview.startsWith('blob:')) {
        URL.revokeObjectURL(imagePreview)
      }
    }
  }, [imagePreview])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
    const MAX_SIZE_MB = 5

    if (!ALLOWED_TYPES.includes(file.type)) {
      toast.error('Formato inválido. Use JPG, PNG, WebP ou GIF.')
      e.target.value = ''
      return
    }
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      toast.error(`Arquivo muito grande. Máximo ${MAX_SIZE_MB}MB.`)
      e.target.value = ''
      return
    }

    setImageFile(file)
    if (imagePreview?.startsWith('blob:')) URL.revokeObjectURL(imagePreview)
    setImagePreview(URL.createObjectURL(file))
  }

  const uploadImage = async (file: File): Promise<string> => {
    const ALLOWED_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'gif']
    const rawExt = file.name.split('.').pop()?.toLowerCase() ?? ''
    const ext = ALLOWED_EXTENSIONS.includes(rawExt) ? rawExt : 'webp'
    const filename = `${Date.now()}-${crypto.randomUUID()}.${ext}`
    const { error } = await supabase.storage
      .from('assessores-images')
      .upload(filename, file, { upsert: false })
    if (error) throw error
    const { data } = supabase.storage
      .from('assessores-images')
      .getPublicUrl(filename)
    return data.publicUrl
  }

  const deleteOldImage = async (url: string) => {
    const filename = url.split('/').pop()
    if (filename) {
      await supabase.storage.from('assessores-images').remove([filename])
    }
  }

  const onSubmit = async (values: AssessorFormValues) => {
    if (!assessor && !imageFile) {
      toast.error('Selecione uma foto')
      return
    }

    setIsSubmitting(true)
    try {
      let image_url = assessor?.image_url ?? ''

      if (imageFile) {
        image_url = await uploadImage(imageFile)
        if (assessor?.image_url) {
          await deleteOldImage(assessor.image_url)
        }
      }

      if (!assessor) {
        const { data: maxRow } = await supabase
          .from('assessores')
          .select('order_index')
          .order('order_index', { ascending: false })
          .limit(1)
          .maybeSingle()
        const order_index = (maxRow?.order_index ?? -1) + 1

        const { error } = await supabase.from('assessores').insert({
          name: values.name,
          role: values.role || null,
          image_url,
          order_index,
        })
        if (error) throw error
        toast.success(`${values.name} adicionado`)
      } else {
        const { error } = await supabase
          .from('assessores')
          .update({ name: values.name, role: values.role || null, image_url })
          .eq('id', assessor.id)
        if (error) throw error
        toast.success(`${values.name} atualizado`)
      }

      queryClient.invalidateQueries({ queryKey: ['admin-assessores'] })
      onClose()
    } catch {
      toast.error('Erro ao salvar. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="bg-dark-grey border-white-soft/10 text-white-soft max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-white-soft">
            {assessor ? 'Editar Assessor' : 'Novo Assessor'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Image upload */}
          <div className="flex flex-col items-center gap-3">
            <div
              onClick={() => fileInputRef.current?.click()}
              className="w-24 h-32 rounded-xl overflow-hidden border-2 border-dashed border-white-soft/20 hover:border-gold/60 cursor-pointer transition-colors flex items-center justify-center bg-black-deep/50"
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="flex flex-col items-center gap-1 text-white-soft/40">
                  <ImagePlus size={24} />
                  <span className="text-xs font-body">Foto</span>
                </div>
              )}
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
              className="border-white-soft/20 text-white-soft/70 hover:text-white-soft hover:border-white-soft/40 font-body text-xs"
            >
              {imagePreview ? 'Trocar foto' : 'Selecionar foto'}
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          {/* Name */}
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-white-soft/70 font-body text-sm">
              Nome
            </Label>
            <Input
              id="name"
              className="bg-black-deep border-white-soft/20 text-white-soft focus-visible:ring-gold"
              {...register('name')}
            />
            {errors.name && (
              <p className="text-red-400 text-xs font-body">{errors.name.message}</p>
            )}
          </div>

          {/* Role */}
          <div className="space-y-1.5">
            <Label htmlFor="role" className="text-white-soft/70 font-body text-sm">
              Cargo <span className="text-white-soft/40">(opcional)</span>
            </Label>
            <Input
              id="role"
              placeholder="ex: CEO"
              className="bg-black-deep border-white-soft/20 text-white-soft placeholder:text-white-soft/30 focus-visible:ring-gold"
              {...register('role')}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-1">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-white-soft/20 bg-transparent text-white-soft hover:text-white-soft hover:border-white-soft/40 hover:bg-white-soft/5 font-body"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gold text-dark-grey hover:brightness-90 font-body font-semibold"
            >
              {isSubmitting ? 'Salvando...' : 'Salvar'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
