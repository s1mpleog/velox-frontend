"use client"
import useRefresh from "@/features/auth/hooks/useRefresh"
import User from "@/features/user/components/user"

export default function Page() {
  useRefresh()
  return (
    <main className="flex h-full w-full flex-col">
      <nav className="flex h-20 w-full items-center justify-end bg-red-500 px-5">
        <div className="end-full flex flex-row-reverse">
          <User />
        </div>
      </nav>
      <div>welcome to velox</div>
      <div>this is a test text</div>
    </main>
  )
}
