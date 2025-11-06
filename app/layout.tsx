import type React from "react"
import type { Metadata } from "next"
import { Geist, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Gabriel E. Bonilla - Computer Science Engineer",
  description: "Computer Science Engineer specializing in backend development, cybersecurity, and AI systems.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${jetbrainsMono.variable}`}>
      <body className="font-mono antialiased">{children}</body>
    </html>
  )
}
