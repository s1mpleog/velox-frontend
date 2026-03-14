import { LoginRequest } from "@/types"
import { useMutation, UseMutationOptions } from "@tanstack/react-query"
import { loginApi } from "../api"

export function useLogin(options?: UseMutationOptions<void, unknown, unknown>) {
  return useMutation({
    mutationFn: (data: LoginRequest) => loginApi(data),
    ...options,
  })
}
