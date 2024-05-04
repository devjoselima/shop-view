import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Label,
} from '@/components/ui/'

import { SignInFormSchema, signInFormSchema } from './schema'

export const SignIn = () => {
  const form = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
    shouldUnregister: true,
  })

  const { isSubmitting } = form.formState

  const handleSignIn = async (data: SignInFormSchema) => {
    try {
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success('Enviamos um link de autenticação para seu email.', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSignIn(data),
        },
      })
    } catch (error) {
      toast.error('Credenciais inválidas')
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant="ghost" className="absolute right-8 top-8" asChild>
          <Link to="/sign-up">Novo estabelecimento</Link>
        </Button>

        <div className="flex w-[470px] flex-col justify-center gap-7">
          <div className="flex flex-col gap-2 ">
            <h1 className="text-3xl font-semibold tracking-tight">
              Portal do Parceiro
            </h1>
            <p className="text-base text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSignIn)}
              className="space-y-5"
            >
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="email">Seu e-mail</Label>
                      <FormControl>
                        <Input
                          id="email"
                          placeholder="nome@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                className="w-full text-base"
                disabled={isSubmitting}
              >
                {isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Acessar painel
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  )
}
