import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChannelStats } from "@/components/channel-stats"
import { LiveSubscriberBadge } from "@/components/live-subscriber-badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Youtube } from "lucide-react"

export default function SubscriberCountPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent z-10" />
          <img src="/images/dutyeditz-profile.jpeg" alt="DutyEditz background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center mb-8">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img
                src="/images/dutyeditz-profile.jpeg"
                alt="DutyEditz Logo"
                className="w-28 h-28 rounded-2xl shadow-2xl mx-auto mb-6 ring-2 ring-red-600/30"
              />
            </div>

            <span className="text-xs font-medium tracking-widest uppercase text-red-500">Real-time Data</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 mt-2 text-foreground">
              DutyEditz Live Stats
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Track our YouTube channel growth in real-time. Join our growing community of gaming enthusiasts!
            </p>

            <div className="flex justify-center mb-8">
              <LiveSubscriberBadge />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ChannelStats className="max-w-5xl mx-auto" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card p-8 rounded-2xl border border-border">
            <div className="text-center">
              <span className="text-xs font-medium tracking-widest uppercase text-red-500">Join Us</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 mt-2 text-foreground">
                Join Our Growing Community!
              </h2>
              <p className="text-muted-foreground mb-6">
                Be part of the DutyEditz family and get access to exclusive gaming content, tutorials, and live streams.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="https://youtube.com/@dutyeditz?si=A4T_oGPsxdTz9b6j" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-red-600 text-white hover:bg-red-700">
                    <Youtube className="mr-2 h-5 w-5" />
                    Subscribe Now
                  </Button>
                </a>
                <Link href="/">
                  <Button variant="outline" className="border-border text-foreground hover:bg-accent">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
