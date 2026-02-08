"use client"

import Link from "next/link"
import { Youtube } from "lucide-react"
import { useChannelStats } from "@/hooks/use-channel-stats"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()
  const channel = useChannelStats()

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={channel.profilePicture}
                alt={channel.channelName}
                className="h-10 w-10 rounded-full object-cover ring-2 ring-red-600/50"
              />
              <h3 className="text-lg font-display font-bold text-foreground">DutyEditz</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Premium gaming edits and community support for passionate gamers worldwide.
            </p>
            <div className="flex gap-3">
              <a
                href="https://youtube.com/@dutyeditz?si=A4T_oGPsxdTz9b6j"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-red-600/20 p-2 rounded-lg transition-colors group"
              >
                <Youtube className="h-5 w-5 text-muted-foreground group-hover:text-red-500 transition-colors" />
                <span className="sr-only">YouTube</span>
              </a>
              <a
                href="mailto:chamilakusumsiri936@gmail.com"
                className="bg-secondary hover:bg-red-600/20 p-2 rounded-lg transition-colors group"
              >
                <svg className="h-5 w-5 text-muted-foreground group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-red-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("videos")}
                  className="text-sm text-muted-foreground hover:text-red-500 transition-colors"
                >
                  Videos
                </button>
              </li>
              <li>
                <Link href="/games" className="text-sm text-muted-foreground hover:text-red-500 transition-colors">
                  Games
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("about")}
                  className="text-sm text-muted-foreground hover:text-red-500 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("contact")}
                  className="text-sm text-muted-foreground hover:text-red-500 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Content</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="https://youtube.com/@dutyeditz?si=A4T_oGPsxdTz9b6j"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-red-500 transition-colors"
                >
                  YouTube Channel
                </a>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("showcase")}
                  className="text-sm text-muted-foreground hover:text-red-500 transition-colors"
                >
                  Featured Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("videos")}
                  className="text-sm text-muted-foreground hover:text-red-500 transition-colors"
                >
                  Latest Videos
                </button>
              </li>
              <li>
                <Link
                  href="/subscriber-count"
                  className="text-sm text-muted-foreground hover:text-red-500 transition-colors"
                >
                  Live Stats
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Contact</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Support Email:</span>
                <br />
                <a
                  href="mailto:chamilakusumsiri936@gmail.com"
                  className="text-red-500 hover:text-red-400 transition-colors"
                >
                  chamilakusumsiri936@gmail.com
                </a>
              </li>
              <li className="mt-2">
                <span className="font-medium text-foreground">YouTube:</span>
                <br />
                <a
                  href="https://youtube.com/@dutyeditz?si=A4T_oGPsxdTz9b6j"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400 transition-colors"
                >
                  @DutyEditz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} DutyEditz. All rights reserved.
          </p>
          <a
            href="https://youtube.com/@dutyeditz?si=A4T_oGPsxdTz9b6j"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors text-sm font-medium"
          >
            <Youtube className="mr-2 h-4 w-4" />
            Subscribe to our YouTube channel
          </a>
        </div>
      </div>
    </footer>
  )
}
