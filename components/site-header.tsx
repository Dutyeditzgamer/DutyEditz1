"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, X, Youtube } from "lucide-react"
import { LiveSubscriberBadge } from "@/components/live-subscriber-badge"
import { useChannelStats } from "@/hooks/use-channel-stats"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#videos", label: "Videos" },
  { href: "/games", label: "Games" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const channel = useChannelStats()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setSearchOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.open(
        `https://www.youtube.com/@dutyeditz/search?query=${encodeURIComponent(searchQuery)}`,
        "_blank"
      )
      setSearchQuery("")
      setSearchOpen(false)
    }
  }

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "")
      if (pathname === "/") {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: "smooth" })
        }
      } else {
        window.location.href = href
      }
    }
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src={channel.profilePicture}
              alt={channel.channelName}
              className="h-9 w-9 rounded-full object-cover ring-2 ring-red-600/50"
            />
            <span className="font-display text-xl font-bold text-foreground tracking-tight">
              DutyEditz
            </span>
          </Link>

          {/* Center: Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href.replace("/#", "/"))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith("/#")) {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }
                  }}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-red-500 bg-red-500/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <LiveSubscriberBadge />
            </div>

            {/* Search Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              {searchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
              <span className="sr-only">Search</span>
            </Button>

            {/* Subscribe CTA */}
            <a
              href="https://youtube.com/@dutyeditz?si=A4T_oGPsxdTz9b6j"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex"
            >
              <Button className="bg-red-600 text-white hover:bg-red-700 font-medium">
                <Youtube className="mr-2 h-4 w-4" /> Subscribe
              </Button>
            </a>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Search Bar Dropdown */}
        {searchOpen && (
          <div className="border-t border-border bg-background/95 backdrop-blur-md">
            <div className="container py-3">
              <form onSubmit={handleSearch} className="flex gap-2">
                <Input
                  type="search"
                  placeholder="Search DutyEditz videos on YouTube..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-secondary border-border focus-visible:ring-red-500"
                  autoFocus
                />
                <Button type="submit" className="bg-red-600 text-white hover:bg-red-700">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </form>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-sm md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("/#")) {
                    e.preventDefault()
                    handleNavClick(link.href)
                  } else {
                    setMobileMenuOpen(false)
                  }
                }}
                className="text-2xl font-display font-bold text-foreground hover:text-red-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-6 flex flex-col items-center gap-4">
              <LiveSubscriberBadge />
              <a
                href="https://youtube.com/@dutyeditz?si=A4T_oGPsxdTz9b6j"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 font-medium">
                  <Youtube className="mr-2 h-5 w-5" /> Subscribe on YouTube
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
