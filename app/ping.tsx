import PingComponent from "@/components/ping-component"
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query"

interface IPingBackend {
  statusCode: number
  msg: string
}

export async function pingBackend(): Promise<IPingBackend> {
  const response = await fetch("http://localhost:8080/ping")
  return response.json()
}

export default async function Ping() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ["ping"],
    queryFn: pingBackend,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PingComponent />
    </HydrationBoundary>
  )
}
