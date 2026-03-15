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

export interface IFile {
  id: string
  name: string
  owner: string
  url: string
  file_type: string
  size: number
  folder_id?: string
  created_at: Date
}

export interface IFolder {
  id: string
  name: string
  userId: string
  parent_id?: string
  created_at: Date
}

export interface IRootContent {
  files: [IFile]
  folders: [IFolder]
}
