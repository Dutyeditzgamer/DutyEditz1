"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Download, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import GameCard from "@/components/game-card"
import TestimonialCard from "@/components/testimonial-card"
import NewsletterForm from "@/components/newsletter-form"
import GameCategories from "./game-categories"
import { SiteHeader } from "@/components/site-header"
import { HelpButton } from "@/components/help-button"
import { VideoModal } from "@/components/video-modal"
import { FeaturedShowcase } from "@/components/featured-showcase"
import LatestVideos from "./latest-videos"
import TrendingShorts from "./trending-shorts"

export default function HomePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      <HelpButton />

      {/* Video Modal */}
      <VideoModal videoId="YPBx7fIItww" isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <img
            src="https://sjc.microlink.io/1tzXoIt90zI_DaJ8KBAdKGN6GRehkTlIZu5NfAy-HSeY2-okjUQiSKznO1KUS1iWUbcdhoxofcSTsgiLbDhMNQ.jpeg"
            alt="GTA 6 promotional artwork"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl">
            <div className="mb-6">
              <img
                src="/images/dutyeditz-profile.jpeg"
                alt="DutyEditz Profile"
                className="w-32 h-32 rounded-lg shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              DutyEditz
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Elevate your gaming experience with premium edits, tutorials, and community support
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Get Started <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-500 hover:bg-purple-950/20"
                onClick={() => setIsVideoModalOpen(true)}
              >
                Watch Showcase
              </Button>
              <a href="https://youtube.com/@dutyeditz?si=A4T_oGPsxdTz9b6j" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                >
                  <Youtube className="mr-2 h-5 w-5" /> Subscribe
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Showcase */}
      <FeaturedShowcase />

      {/* Game Categories */}
      <GameCategories />

      {/* YouTube Videos Section */}
      <LatestVideos />
      <TrendingShorts />

      {/* Games Showcase */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Games</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Check out our most popular games and editing services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GameCard
              title="Call of Duty: Modern Warfare"
              image="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mw-wz/WZ-Season-Three-Announce-TOUT.jpg"
              category="FPS"
              rating={4.8}
            />
            <GameCard
              title="Grand Theft Auto VI"
              image="https://sjc.microlink.io/1tzXoIt90zI_DaJ8KBAdKGN6GRehkTlIZu5NfAy-HSeY2-okjUQiSKznO1KUS1iWUbcdhoxofcSTsgiLbDhMNQ.jpeg"
              category="Open World"
              rating={5.0}
            />
            <GameCard
              title="Fortnite"
              image="/placeholder.svg?height=400&width=600"
              category="Battle Royale"
              rating={4.6}
            />
            <GameCard
              title="Apex Legends"
              image="/placeholder.svg?height=400&width=600"
              category="Battle Royale"
              rating={4.7}
            />
            <GameCard
              title="Valorant"
              image="/placeholder.svg?height=400&width=600"
              category="Tactical FPS"
              rating={4.5}
            />
            <GameCard
              title="The Last of Us Part II"
              image="https://i.ytimg.com/vi/YPBx7fIItww/maxresdefault.jpg"
              category="Action Adventure"
              rating={4.9}
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/games">
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-950/20">
                View All Games
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-800/80 to-gray-900/80 p-8 rounded-xl border border-purple-500/30">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help or Support?</h2>
                <p className="text-gray-300 mb-6">
                  Our dedicated support team is ready to assist you with any questions or issues you might have.
                </p>
                <div className="flex items-center p-3 bg-gray-700/50 rounded-lg mb-4">
                  <span className="text-gray-400 mr-2">Email:</span>
                  <a
                    href="mailto:chamilakusumsiri936@gmail.com"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    chamilakusumsiri936@gmail.com
                  </a>
                </div>
                <p className="text-gray-400 text-sm">
                  We typically respond to all inquiries within 24 hours. For urgent matters, please include "URGENT" in
                  the subject line.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <img
                  src="/images/dutyeditz-profile.jpeg"
                  alt="DutyEditz Profile"
                  className="w-32 h-32 rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
          <img
            src="https://sjc.microlink.io/1tzXoIt90zI_DaJ8KBAdKGN6GRehkTlIZu5NfAy-HSeY2-okjUQiSKznO1KUS1iWUbcdhoxofcSTsgiLbDhMNQ.jpeg"
            alt="GTA 6 background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 p-8 md:p-12 rounded-2xl border border-purple-500/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Download Our App</h2>
                <p className="text-gray-300 mb-6">
                  Get access to exclusive content, tutorials, and community features with our mobile app.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    <Download className="mr-2 h-5 w-5" /> App Store
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-500 text-purple-500 hover:bg-purple-950/20"
                  >
                    <Download className="mr-2 h-5 w-5" /> Google Play
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3">
                <img
                  src="/placeholder.svg?height=600&width=300"
                  alt="Mobile app"
                  className="w-full max-w-[250px] mx-auto rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Gamers Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Hear from our community of gamers and content creators</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Alex Johnson"
              role="Professional Streamer"
              image="/placeholder.svg?height=100&width=100"
              quote="DutyEditz has completely transformed my content. The editing quality is unmatched and the community is incredibly supportive."
              rating={5}
            />
            <TestimonialCard
              name="Sarah Williams"
              role="Competitive Gamer"
              image="/placeholder.svg?height=100&width=100"
              quote="The tutorials helped me improve my skills dramatically. I've won three tournaments since joining DutyEditz!"
              rating={5}
            />
            <TestimonialCard
              name="Mike Chen"
              role="Content Creator"
              image="/placeholder.svg?height=100&width=100"
              quote="The editing services are top-notch. My channel has grown 300% since I started using DutyEditz for my gameplay videos."
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-400 mb-8">
              Subscribe to our newsletter for the latest gaming news, tutorials, and exclusive offers
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">DutyEditz</h3>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/images/dutyeditz-profile.jpeg"
                  alt="DutyEditz Logo"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <p className="text-gray-400">
                  Elevating your gaming experience with premium edits and community support.
                </p>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@dutyeditz?si=A4T_oGPsxdTz9b6j"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-purple-500 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/videos" className="text-gray-400 hover:text-purple-500 transition-colors">
                    Videos
                  </Link>
                </li>
                <li>
                  <Link href="/games" className="text-gray-400 hover:text-purple-500 transition-colors">
                    Games
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                    Video Editing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                    Coaching
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                    Tournaments
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <span className="font-medium">Support Email:</span>
                  <br />
                  <a
                    href="mailto:chamilakusumsiri936@gmail.com"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    chamilakusumsiri936@gmail.com
                  </a>
                </li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Gaming Street, Digital City, DC 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} DutyEditz. All rights reserved.</p>
            <div className="mt-4">
              <a
                href="https://youtube.com/@dutyeditz?si=A4T_oGPsxdTz9b6j"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors"
              >
                <Youtube className="mr-2 h-5 w-5" />
                Subscribe to our YouTube channel
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
