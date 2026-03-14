import Authorize from "@/features/auth/components/Authorize"

export default async function AuthorizePage({
  searchParams,
}: {
  searchParams?: unknown
}) {
  const { token } = await searchParams

  return (
    <main>
      <Authorize token={token} />
    </main>
  )
}
