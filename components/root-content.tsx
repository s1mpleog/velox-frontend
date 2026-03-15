"use client"

import useRoot from "@/features/folder/hooks/useRoot"
import { Spinner } from "./ui/spinner"
import ShowFolder from "@/features/folder/components/show-folder"
import Link from "next/link"
import ShowFile from "@/features/files/components/show-file"

export default function ShowRootContents() {
  const { isLoading, isError, data } = useRoot()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Spinner className="h-15 w-15" />
      </div>
    )
  }

  if (isError) {
    return <div>Error: failed to fetch content</div>
  }

  return (
    <>
      {data && (
        <div className="flex">
          <div className="flex flex-row items-center">
            {data.folders.map((folder) => (
              <Link href={`/folders/${folder.id}`} key={folder.id}>
                <ShowFolder folder={folder} />
              </Link>
            ))}

            {data.files.map((file) => (
              <ShowFile key={file.id} file={file} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
