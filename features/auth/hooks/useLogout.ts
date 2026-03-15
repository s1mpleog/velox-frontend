import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query"
import { logoutApi } from "../api"

export default function useLogout(options?: UseMutationOptions) {
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: () => logoutApi(),
    ...options,
  })
}
