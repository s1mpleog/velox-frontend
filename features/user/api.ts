import { IUserResponse } from "@/types"

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL as string

export const getUserApi = async (): Promise<IUserResponse> => {
  const response = await fetch(`${BACKEND_URL}/users/me`, {
    method: "GET",
    credentials: "include",
  })

  if (!response.ok) {
    throw new Error("failed to get user")
  }

  return (await response.json()) as IUserResponse
}
