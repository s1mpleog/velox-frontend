import { IRootContent } from "@/types"

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL as string

export async function getRootContentsApi() {
  const response = await fetch(`${BACKEND_URL}/folders/root`, {
    method: "GET",
    credentials: "include",
  })

  if (!response.ok) {
    throw new Error("failed to fetch root content")
  }

  return (await response.json()) as IRootContent
}
