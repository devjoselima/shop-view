import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { signOut } from '@/api/sign-out'

export const useSignOutMutation = () => {
  const navigate = useNavigate()
  const { mutateAsync: signOutMutation, isPending: isSigningOutMutation } =
    useMutation({
      mutationFn: signOut,
      onSuccess: () => {
        navigate('/sign-in', { replace: true })
      },
    })

  return { signOutMutation, isSigningOutMutation }
}
