import { useQuery } from "@tanstack/react-query"
import { getRootContentsApi } from "../api"

export default function useRoot() {
  return useQuery({
    queryKey: ["rootContents"],
    queryFn: getRootContentsApi,
  })
}
