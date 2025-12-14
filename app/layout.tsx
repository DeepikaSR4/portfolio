import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import ClientLayout from "./clientlayout"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Deepika S R",
  description: "Deepika's Latest Portfolio.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 fontSize=%2290%22>❤️</text></svg>",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased dark`} suppressHydrationWarning>
      <body className="font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
