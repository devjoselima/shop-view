import { zodResolver } from '@hookform/resolvers/zod'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { PhoneInput } from '@/components/inputs/phone-input'
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

import { SignUpFormSchema, signUpFormSchema } from './schema'

export const SignUp = () => {
  const form = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
    shouldUnregister: true,
  })

  const { isSubmitting } = form.formState

  const navigate = useNavigate()

  const handleSignUp = async (data: SignUpFormSchema) => {
    try {
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success('Estabelecimento cadastrado com sucesso!', {
        action: {
          label: 'Fazer login',
          onClick: () => navigate('/sign-in'),
        },
      })
    } catch (error) {
      toast.error('Erro ao cadastrar o estabelecimento!')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="ghost" className="absolute right-8 top-8" asChild>
          <Link to="/sign-in">Fazer login</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas!
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSignUp)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <Label htmlFor="email">Seu e-mail</Label>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder="Digite seu email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="restaurantName"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <Label htmlFor="restarauntName">
                      Nome do estabelecimento
                    </Label>
                    <FormControl>
                      <Input
                        id="restarauntName"
                        placeholder="Digite o nome do estabecimento"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="managerName"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <Label htmlFor="managerName">Seu nome </Label>
                    <FormControl>
                      <Input
                        id="managerName"
                        placeholder="Digite seu nome"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <Label htmlFor="phone">Número do estabelecimento</Label>
                    <FormControl>
                      <PhoneInput id="phone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                Finalizar cadastro
              </Button>

              <p className="px-6 text-center text-xs leading-relaxed text-muted-foreground">
                Ao continuar, você concorda com nossos Termos de serviço e
                políticas de privacidade
              </p>
            </form>
          </Form>
        </div>
      </div>
    </>
  )
}
