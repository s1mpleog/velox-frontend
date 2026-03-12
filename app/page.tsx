import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Ping from "./ping"

export default function Page() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
            Project ready!
          </h1>
          <Separator className="my-4" />
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            You may now add components and start building.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We&apos;ve already added the button component for you.
          </p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
      <Ping />
    </div>
  )
}
