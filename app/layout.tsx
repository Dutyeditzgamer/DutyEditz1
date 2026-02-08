import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "DutyEditz | Premium Gaming Edits & Content",
  description:
    "Elevate your gaming experience with premium video edits, gameplay highlights, tutorials, and community support. Home of 74K+ viral gaming content.",
  keywords: [
    "gaming",
    "video editing",
    "Call of Duty",
    "GTA",
    "The Last of Us",
    "gaming edits",
    "YouTube gaming",
  ],
  authors: [{ name: "DutyEditz" }],
  openGraph: {
    title: "DutyEditz | Premium Gaming Edits & Content",
    description:
      "Elevate your gaming experience with premium video edits, gameplay highlights, and community support.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#DC2626",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta name="google-adsense-account" content="ca-pub-6961429816614194" />
      </head>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6961429816614194"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
