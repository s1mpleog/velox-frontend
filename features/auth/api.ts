import { LoginRequest } from "@/types"

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL as string

export const loginApi = async (loginRequest: LoginRequest) => {
  const response = await fetch(`${backendUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginRequest),
  })

  if (!response.ok) {
    throw new Error("failed to login user")
  }
}

export const authorizeApi = async (token: string) => {
  const response = await fetch(`${backendUrl}/auth/authorize?token=${token}`, {
    method: "GET",
    credentials: "include",
  })

  if (!response.ok) {
    throw new Error("failed to authorize user")
  }

  return response.status
}

export const refreshApi = async () => {
  const response = await fetch(`${backendUrl}/auth/refresh`, {
    method: "GET",
    credentials: "include",
  })

  if (!response.ok) {
    throw new Error("failed to refresh token")
  }

  return response.status
}

export const logoutApi = async () => {
  const response = await fetch(`${backendUrl}/auth/logout`, {
    method: "POST",
    credentials: "include",
  })

  if (!response.ok) {
    throw new Error("failed to logout user")
  }
}
