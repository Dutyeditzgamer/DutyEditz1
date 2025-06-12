import { SiteHeader } from "@/components/site-header"
import { ChannelStats } from "@/components/channel-stats"
import { LiveSubscriberBadge } from "@/components/live-subscriber-badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Youtube } from "lucide-react"

export default function SubscriberCountPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent z-10" />
          <img
            src="/images/dutyeditz-new-logo.jpeg"
            alt="DutyEditz background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center mb-8">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img
                src="/images/dutyeditz-new-logo.jpeg"
                alt="DutyEditz Logo"
                className="w-32 h-32 rounded-lg shadow-lg mx-auto mb-6"
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              DutyEditz Live Stats
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Track our YouTube channel growth in real-time. Join our growing community of gaming enthusiasts!
            </p>

            {/* Live Badge */}
            <div className="flex justify-center mb-8">
              <LiveSubscriberBadge />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <ChannelStats className="max-w-6xl mx-auto" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-800/80 to-gray-900/80 p-8 rounded-xl border border-purple-500/30">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Growing Community!</h2>
              <p className="text-gray-300 mb-6">
                Be part of the DutyEditz family and get access to exclusive gaming content, tutorials, and live streams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://youtube.com/@dutyeditz?si=A4T_oGPsxdTz9b6j" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
                    <Youtube className="mr-2 h-5 w-5" />
                    Subscribe Now
                  </Button>
                </a>
                <Link href="/">
                  <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-950/20">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
