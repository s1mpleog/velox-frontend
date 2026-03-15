export type LoginRequest = {
  email: string
}

export type AuthorizeRequest = {
  token: string
}

export interface IUserResponse {
  id: string
  email: string
  avatar?: string
  created_at: Date
}
