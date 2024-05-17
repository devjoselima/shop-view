import { useMutation } from '@tanstack/react-query'

import { updateProfile } from '@/api/update-profile'

import { useUpdateManagedRestaurantCache } from './use-update-managed-restaurant-cache'

export const useUpdateProfileMutation = () => {
  const { updateManagedRestaurantCache } = useUpdateManagedRestaurantCache()

  const { mutateAsync: updateProfileMutation } = useMutation({
    mutationFn: updateProfile,
    onMutate({ name, description }) {
      const { cached } = updateManagedRestaurantCache({ name, description })

      return { previousProfile: cached }
    },
    onError(_, __, context) {
      if (context?.previousProfile) {
        updateManagedRestaurantCache(context.previousProfile)
      }
    },
  })

  return { updateProfileMutation }
}
