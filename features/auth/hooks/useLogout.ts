import { useMutation, useQueryClient } from "@tanstack/react-query"
import { logoutApi } from "../api"

export default function useLogout() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: () => logoutApi(),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["users", "refresh", "authorize"],
      })
    },
  })
}
