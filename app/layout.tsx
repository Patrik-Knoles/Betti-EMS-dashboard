import type React from "react"
import type { Metadata } from "next"
import { ClientLayout } from "./client-layout"
import "./globals.css"

export const metadata: Metadata = {
  title: "Betti Dashboard - Medical & Health Centre",
  description: "Real-time patient monitoring and incident response dashboard",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
