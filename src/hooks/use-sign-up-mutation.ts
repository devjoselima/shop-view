import { useMutation } from '@tanstack/react-query'

import { signUp } from '@/api/sign-up'

export const useSignUpMutation = () => {
  const { mutateAsync: signUpMutation } = useMutation({
    mutationFn: signUp,
  })

  return { signUpMutation }
}
