"use client"

import { Spinner } from "@/components/ui/spinner"
import useUser from "../hooks/useUser"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
} from "lucide-react"

export default function User() {
  const { data, isError, isLoading } = useUser()

  if (isError) return <div>Oops failed to fetch user</div>

  if (isLoading) return <Spinner />

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar>
            {data?.avatar ? (
              <>
                <AvatarImage src={data.avatar} alt="user avatar" />
                <AvatarFallback>LR</AvatarFallback>
              </>
            ) : (
              <>
                <AvatarImage src="dummy.png" alt="user avatar" />
                <AvatarFallback>LR</AvatarFallback>
              </>
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <BadgeCheckIcon />
            {data?.email}
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCardIcon />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BellIcon />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
