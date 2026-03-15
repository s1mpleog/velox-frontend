import { IFolder } from "@/types"
import { FolderOpenIcon } from "lucide-react"

interface IShowFolder {
  folder: IFolder
}

export default function ShowFolder({ folder }: IShowFolder) {
  return (
    <div className="flex w-24 cursor-pointer flex-col items-center rounded-lg p-2 hover:bg-gray-100">
      <FolderOpenIcon size={50} className="text-blue-400" />
      <p className="mt-1 w-full truncate text-center text-sm">{folder.name}</p>
    </div>
  )
}
