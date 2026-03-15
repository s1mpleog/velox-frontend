import { Geist, Geist_Mono, Outfit } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import TanstackProvider from "./tanstack-provider"
import { Toaster } from "@/components/ui/sonner"
import Navbar from "@/components/navbar"
import { Separator } from "@/components/ui/separator"
import Footer from "@/components/footer"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        outfit.variable
      )}
    >
      <body>
        {/*<ThemeProvider>*/}
        <TanstackProvider>
          <div className="flex h-screen flex-col">
            <Navbar />
            <Separator />
            <main className="flex-1 overflow-auto">{children}</main>
            <Separator />
            <Footer />
          </div>
        </TanstackProvider>
        <Toaster />
        {/*</ThemeProvider>*/}
      </body>
    </html>
  )
}
