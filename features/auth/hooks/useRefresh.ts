import { useQuery } from "@tanstack/react-query"
import { refreshApi } from "../api"

export default function useRefresh() {
  useQuery({
    queryKey: ["refresh"],
    queryFn: () => refreshApi(),
    retry: false,
    refetchInterval: 14 * 60 * 1000,
    refetchIntervalInBackground: true, // keeps ticking even if tab is backgrounded
    staleTime: 14 * 60 * 1000,
  })
}
