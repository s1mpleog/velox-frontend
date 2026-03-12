"use client"

import { pingBackend } from "@/app/ping"
import { useQuery } from "@tanstack/react-query"
import { Spinner } from "./ui/spinner"

export default function PingComponent() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["ping"],
    queryFn: () => pingBackend(),
  })

  return (
    <>
      {isError && <div>Failed to ping database</div>}
      {isLoading && <Spinner />}
      {data && <p>{data.msg}</p>}
    </>
  )
}
