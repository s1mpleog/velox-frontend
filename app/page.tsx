"use client"
import ShowRootContents from "@/components/root-content"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import useLogout from "@/features/auth/hooks/useLogout"
import useRefresh from "@/features/auth/hooks/useRefresh"
import useRoot from "@/features/folder/hooks/useRoot"
import User from "@/features/user/components/user"
import { useQueryClient } from "@tanstack/react-query"

export default function Page() {
  const queryClient = useQueryClient()
  useRefresh()

  const { mutate } = useLogout({
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["users", "refresh", "authorize", "logout"],
      })
    },
  })

  const handleLogout = () => {
    mutate()
  }

  return (
    <main className="h-screen)-50px] m-5 flex flex-col">
      {/*<Button className="w-20" onClick={handleLogout}>
        Logout
      </Button>*/}
      <ShowRootContents />
    </main>
  )
}
