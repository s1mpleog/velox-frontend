"use client"

import { Spinner } from "@/components/ui/spinner"
import { useAuthorize } from "../hooks/useAuthorize"
import { redirect } from "next/navigation"

interface IAuthorize {
  token: string
}

export default function Authorize({ token }: IAuthorize) {
  const { isError, isPending } = useAuthorize(token)

  if (isPending) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <Spinner className="h-15 w-15" />
        <h2 className="text-xl font-semibold">Verifying your magic link...</h2>
        <p className="text-sm text-muted-foreground">
          Hang tight! We&apos;re logging you in securely.
        </p>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <h2 className="text-xl font-semibold">Oops, something went wrong 😕</h2>
        <p className="text-sm text-muted-foreground">
          Your link may have expired or already been used. Please request a new
          one.
        </p>
        <a href="/auth" className="text-sm text-primary underline">
          Back to login
        </a>
      </div>
    )
  }

  return redirect("/")
}
