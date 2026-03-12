import { LoginRequest } from "@/types/types"

const backendUrl = "http://localhost:8080/auth"

export const loginApi = async (loginRequest: LoginRequest) => {
  const response = await fetch(`${backendUrl}/login`, {
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
