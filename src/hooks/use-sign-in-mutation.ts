import { useMutation } from '@tanstack/react-query'

import { signIn } from '@/api/sign-in'

export const useSignInMutation = () => {
  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  return { authenticate }
}
