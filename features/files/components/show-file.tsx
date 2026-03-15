import { IFile } from "@/types"
import { FileIcon, FileImageIcon } from "lucide-react"

interface IShowFile {
  file: IFile
}

export default function ShowFile({ file }: IShowFile) {
  const IMAGE_TYPES = [
    "image/png",
    "image/jpg",
    "image/webp",
    "image/jpeg",
    "image/avif",
  ]

  return (
    <div className="flex w-24 cursor-pointer flex-col items-center rounded-lg p-2 hover:bg-gray-100">
      {/*TODO: show image thumbnail if type is IMAGE_TYPES*/}
      {IMAGE_TYPES.includes(file.file_type) ? (
        <FileImageIcon size={50} className="text-gray-400" />
      ) : (
        <FileIcon size={50} className="text-gray-400" />
      )}
      <p className="mt-1 w-full truncate text-center text-sm">{file.name}</p>
    </div>
  )
}
