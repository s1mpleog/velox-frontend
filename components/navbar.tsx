import User from "@/features/user/components/user"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex h-20 w-full items-center justify-between px-5">
      <Link className="text-4xl font-bold text-blue-500" href="/">
        Velox
      </Link>
      <div className="end-full flex flex-row-reverse">
        <User />
      </div>
    </nav>
  )
}
