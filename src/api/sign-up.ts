import { api } from '@/lib/axios'

export interface SignUpBody {
  email: string
  restaurantName: string
  managerName: string
  phone: string
}

export const signUp = async ({
  email,
  restaurantName,
  managerName,
  phone,
}: SignUpBody) => {
  await api.post('/restaurants', { email, restaurantName, managerName, phone })
}
