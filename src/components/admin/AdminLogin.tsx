import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const loginSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(1, 'Senha obrigatória'),
})
type LoginForm = z.infer<typeof loginSchema>

export default function AdminLogin() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async ({ email, password }: LoginForm) => {
    setIsSubmitting(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      toast.error('Credenciais inválidas')
      setIsSubmitting(false)
    }
    // On success: onAuthStateChange in Admin.tsx updates session automatically
  }

  return (
    <div className="min-h-screen bg-black-deep flex items-center justify-center p-4">
      <Card className="w-full max-w-sm bg-dark-grey border-white-soft/10">
        <CardHeader className="text-center">
          <img
            src="/images/logo-marco.svg"
            alt="Marco"
            className="h-8 w-auto mx-auto mb-4"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none'
            }}
          />
          <CardTitle className="font-heading text-white-soft text-xl">
            Acesso Restrito
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-white-soft/70 font-body text-sm">
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                className="bg-black-deep border-white-soft/20 text-white-soft placeholder:text-white-soft/30 focus-visible:ring-gold"
                {...register('email')}
              />
              {errors.email && (
                <p className="text-red-400 text-xs font-body">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password" className="text-white-soft/70 font-body text-sm">
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                className="bg-black-deep border-white-soft/20 text-white-soft placeholder:text-white-soft/30 focus-visible:ring-gold"
                {...register('password')}
              />
              {errors.password && (
                <p className="text-red-400 text-xs font-body">{errors.password.message}</p>
              )}
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gold text-dark-grey hover:brightness-90 font-body font-semibold text-sm uppercase tracking-widest"
            >
              {isSubmitting ? 'Entrando...' : 'Entrar'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
