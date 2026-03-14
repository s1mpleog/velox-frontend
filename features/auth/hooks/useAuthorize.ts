import { useQuery } from "@tanstack/react-query"
import { authorizeApi } from "../api"

export function useAuthorize(token: string) {
  return useQuery({
    queryKey: ["authorize", token],
    queryFn: () => authorizeApi(token),
    retry: false,
    staleTime: Infinity,
  })
}
