import { z } from 'zod'

export const signUpFormSchema = z.object({
  email: z
    .string({ required_error: 'O e-mail é obrigatório' })
    .email({ message: 'Insira um e-mail válido' }),
  restaurantName: z.string({
    required_error: 'O nome do estabelecimento é obrigatório',
  }),
  managerName: z.string({
    required_error: 'O nome é obrigatório',
  }),
  phone: z.number({
    required_error: 'O número é obrigatório',
  }),
})

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>
