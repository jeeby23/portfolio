// portfolio/app/layout.tsx
import type { Metadata } from "next"
import { Barlow } from "next/font/google"
import "./globals.css"

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My personal portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${barlow.className}
          antialiased
          min-h-screen
          bg-[var(--background)]
          text-[var(--foreground)]
          transition-colors duration-300
        `}
      >
        {children}
      </body>
    </html>
  )
}