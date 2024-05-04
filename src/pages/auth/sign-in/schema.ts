import { z } from 'zod'

export const signInFormSchema = z.object({
  email: z
    .string({ required_error: 'O e-mail é obrigatório' })
    .email({ message: 'Insira um e-mail válido' }),
})

export type SignInFormSchema = z.infer<typeof signInFormSchema>
