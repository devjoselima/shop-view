import { useQueryClient } from '@tanstack/react-query'
import { z } from 'zod'

import { GetManagedRestaurantResponse } from '@/api/get-managed-restaurant'

export const useUpdateManagedRestaurantCache = () => {
  const queryClient = useQueryClient()

  const storeProfileSchema = z.object({
    name: z.string().min(1),
    description: z.string().nullable(),
  })

  type StoreProfileSchema = z.infer<typeof storeProfileSchema>

  const updateManagedRestaurantCache = ({
    name,
    description,
  }: StoreProfileSchema) => {
    const cached = queryClient.getQueryData<GetManagedRestaurantResponse>([
      'managed-restaurant',
    ])

    if (cached) {
      queryClient.setQueryData<GetManagedRestaurantResponse>(
        ['managed-restaurant'],
        {
          ...cached,
          name,
          description,
        },
      )
    }

    return { cached }
  }

  return { updateManagedRestaurantCache }
}
