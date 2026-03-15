import { useQuery } from "@tanstack/react-query"
import { getUserApi } from "../api"

export default function useUser() {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => getUserApi(),
  })
}
