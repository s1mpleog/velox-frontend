"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLogin } from "@/features/auth/hooks/useLogin"
import { LoginRequest } from "@/types/types"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

export default function LoginForm() {
  const [data, setData] = useState<LoginRequest>({
    email: "",
  })

  const router = useRouter()

  const { mutate, isPending } = useLogin({
    onSuccess: () => router.push("/auth/authorize"),
  })

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate(data)
  }

  return (
    <>
      <div className="m-auto flex h-screen min-h-full w-md min-w-md flex-col items-center justify-center space-y-4">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          Welcome to Velox enter your email to continue
        </h1>
        <form onSubmit={(e) => handleSubmit(e)} className="w-full space-y-4">
          <Input
            disabled={isPending}
            value={data.email}
            onChange={(e) => setData({ email: e.target.value })}
            type="email"
            placeholder="johndoe@gmail.com"
            required
          />
          <Button
            disabled={isPending}
            type="submit"
            className="w-full"
            size={"lg"}
          >
            {isPending ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </>
  )
}
