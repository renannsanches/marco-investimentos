import { useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import type { Session } from '@supabase/supabase-js'
import { supabase, type Assessor } from '@/lib/supabase'
import AssessorForm from '@/components/admin/AssessorForm'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { ChevronUp, ChevronDown, Pencil, Trash2, Plus, LogOut } from 'lucide-react'

interface Props {
  session: Session
}

export default function AssessoresManager({ session: _session }: Props) {
  const queryClient = useQueryClient()
  const [formOpen, setFormOpen] = useState(false)
  const [editingAssessor, setEditingAssessor] = useState<Assessor | null>(null)

  const { data: assessores = [], isLoading } = useQuery({
    queryKey: ['admin-assessores'],
    queryFn: async (): Promise<Assessor[]> => {
      const { data, error } = await supabase
        .from('assessores')
        .select('*')
        .order('order_index', { ascending: true })
      if (error) throw error
      return data
    },
  })

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  const openAdd = () => {
    setEditingAssessor(null)
    setFormOpen(true)
  }

  const openEdit = (a: Assessor) => {
    setEditingAssessor(a)
    setFormOpen(true)
  }

  const handleDelete = async (assessor: Assessor) => {
    const { error } = await supabase.from('assessores').delete().eq('id', assessor.id)
    if (error) {
      toast.error('Erro ao excluir')
      return
    }
    const filename = assessor.image_url.split('/').pop()
    if (filename) {
      await supabase.storage.from('assessores-images').remove([filename])
    }
    queryClient.invalidateQueries({ queryKey: ['admin-assessores'] })
    toast.success(`${assessor.name} excluído`)
  }

  const handleReorder = async (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1
    if (targetIndex < 0 || targetIndex >= assessores.length) return
    const current = assessores[index]
    const target = assessores[targetIndex]
    await Promise.all([
      supabase.from('assessores').update({ order_index: target.order_index }).eq('id', current.id),
      supabase.from('assessores').update({ order_index: current.order_index }).eq('id', target.id),
    ])
    queryClient.invalidateQueries({ queryKey: ['admin-assessores'] })
  }

  return (
    <div className="min-h-screen bg-black-deep">
      {/* Header */}
      <div className="bg-dark-grey border-b border-white-soft/10 px-4 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="font-heading text-white-soft text-xl font-semibold">
              Gerenciar Assessores
            </h1>
            <p className="font-body text-white-soft/50 text-sm mt-0.5">
              {assessores.length} assessores
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={openAdd}
              className="bg-gold text-dark-grey hover:brightness-90 font-body font-semibold text-sm gap-2"
            >
              <Plus size={16} />
              Novo Assessor
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-white-soft/50 hover:text-white-soft gap-2 font-body"
            >
              <LogOut size={15} />
              Sair
            </Button>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="max-w-5xl mx-auto p-4 space-y-2">
        {isLoading &&
          Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-dark-grey/50">
              <Skeleton className="w-10 h-14 rounded-lg bg-white-soft/10" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-40 bg-white-soft/10" />
                <Skeleton className="h-3 w-20 bg-white-soft/10" />
              </div>
            </div>
          ))}

        {!isLoading &&
          assessores.map((assessor, i) => (
            <div
              key={assessor.id}
              className="flex items-center gap-3 p-3 rounded-xl bg-dark-grey hover:bg-dark-grey/80 transition-colors"
            >
              {/* Order index */}
              <span className="font-body text-white-soft/30 text-xs w-6 text-right shrink-0">
                {i + 1}
              </span>

              {/* Thumbnail */}
              <div className="w-10 h-14 rounded-lg overflow-hidden shrink-0 bg-black-deep">
                {assessor.image_url && (
                  <img
                    src={assessor.image_url}
                    alt={assessor.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="font-body text-white-soft text-sm font-medium truncate">
                  {assessor.name}
                </p>
                {assessor.role && (
                  <Badge className="mt-1 bg-gold/20 text-gold border-gold/30 font-body text-[10px] px-1.5 py-0">
                    {assessor.role}
                  </Badge>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1 shrink-0">
                <Button
                  variant="ghost"
                  size="icon"
                  disabled={i === 0}
                  onClick={() => handleReorder(i, 'up')}
                  className="h-8 w-8 text-white-soft/40 hover:text-white-soft disabled:opacity-20"
                >
                  <ChevronUp size={16} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  disabled={i === assessores.length - 1}
                  onClick={() => handleReorder(i, 'down')}
                  className="h-8 w-8 text-white-soft/40 hover:text-white-soft disabled:opacity-20"
                >
                  <ChevronDown size={16} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => openEdit(assessor)}
                  className="h-8 w-8 text-white-soft/40 hover:text-white-soft"
                >
                  <Pencil size={14} />
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-white-soft/40 hover:text-red-400"
                    >
                      <Trash2 size={14} />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-dark-grey border-white-soft/10">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="font-heading text-white-soft">
                        Excluir assessor?
                      </AlertDialogTitle>
                      <AlertDialogDescription className="font-body text-white-soft/60">
                        <strong className="text-white-soft">{assessor.name}</strong> será removido
                        permanentemente. Esta ação não pode ser desfeita.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="bg-transparent border-white-soft/20 text-white-soft/70 hover:text-white-soft hover:bg-white-soft/5 font-body">
                        Cancelar
                      </AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleDelete(assessor)}
                        className="bg-red-600 hover:bg-red-700 text-white font-body"
                      >
                        Excluir
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          ))}

        {!isLoading && assessores.length === 0 && (
          <div className="text-center py-20">
            <p className="font-body text-white-soft/40 text-sm">
              Nenhum assessor cadastrado ainda.
            </p>
            <Button
              onClick={openAdd}
              className="mt-4 bg-gold text-dark-grey hover:brightness-90 font-body font-semibold text-sm gap-2"
            >
              <Plus size={16} />
              Adicionar primeiro assessor
            </Button>
          </div>
        )}
      </div>

      <AssessorForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
        assessor={editingAssessor}
      />
    </div>
  )
}
