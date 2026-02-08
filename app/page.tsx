"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Youtube, Play, ArrowDown } from "lucide-react"
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
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <HelpButton />

      {/* Video Modal */}
      <VideoModal videoId="YPBx7fIItww" isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 z-10" />
          <img
            src="https://sjc.microlink.io/1tzXoIt90zI_DaJ8KBAdKGN6GRehkTlIZu5NfAy-HSeY2-okjUQiSKznO1KUS1iWUbcdhoxofcSTsgiLbDhMNQ.jpeg"
            alt="GTA 6 promotional artwork"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-4">
              <img
                src="/images/dutyeditz-profile.jpeg"
                alt="DutyEditz Profile"
                className="w-20 h-20 rounded-2xl shadow-2xl ring-2 ring-red-600/50"
              />
              <div className="flex flex-col">
                <span className="text-xs font-medium tracking-widest uppercase text-red-500">Gaming Creator</span>
                <span className="text-muted-foreground text-sm">1.05K+ Subscribers</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 text-foreground leading-tight text-balance">
              DutyEditz
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground leading-relaxed max-w-lg">
              Premium gaming edits, cinematic showcases, and community-driven content for the most iconic titles.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-red-600 text-white hover:bg-red-700 font-medium"
                onClick={() => {
                  document.getElementById("videos")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Watch Content <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-accent"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <Play className="mr-2 h-4 w-4" /> Watch Showcase
              </Button>
              <a href="https://youtube.com/@dutyeditz?si=A4T_oGPsxdTz9b6j" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-red-600/10 text-red-500 border border-red-600/30 hover:bg-red-600/20 w-full sm:w-auto"
                >
                  <Youtube className="mr-2 h-5 w-5" /> Subscribe
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <button
            onClick={() => document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" })}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </section>

      {/* Featured Showcase */}
      <section id="showcase">
        <FeaturedShowcase />
      </section>

      {/* Game Categories */}
      <GameCategories />

      {/* YouTube Videos Section */}
      <section id="videos">
        <LatestVideos />
      </section>
      <TrendingShorts />

      {/* Games Showcase */}
      <section id="games" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-medium tracking-widest uppercase text-red-500">Our Collection</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 mt-2 text-foreground">Featured Games</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our most popular games and editing showcases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              image="/images/fortnite-card.jpg"
              category="Battle Royale"
              rating={4.6}
            />
            <GameCard
              title="Apex Legends"
              image="/images/apex-legends-card.jpg"
              category="Battle Royale"
              rating={4.7}
            />
            <GameCard
              title="Valorant"
              image="/images/valorant-card.jpg"
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
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-accent">
                View All Games <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <img
                    src="/images/dutyeditz-profile.jpeg"
                    alt="DutyEditz Profile"
                    className="w-48 h-48 rounded-2xl shadow-2xl object-cover ring-2 ring-red-600/30"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
                    1.05K+ Subs
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <span className="text-xs font-medium tracking-widest uppercase text-red-500">Who We Are</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 mt-2 text-foreground">
                  About DutyEditz
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  DutyEditz is a passion-driven gaming content creation channel dedicated to producing premium-quality video edits, cinematic showcases, and gameplay highlights. With over 1,050 subscribers and 64+ videos, we specialize in bringing the best moments from Call of Duty, GTA, The Last of Us, and more.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our most popular edit -- the Evelyn Edit from The Last of Us Part II -- has reached over 74,000 views, proving that quality content resonates with gamers worldwide. We believe in community, creativity, and pushing the boundaries of gaming content.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-secondary px-4 py-2 rounded-lg">
                    <span className="text-red-500 font-bold text-lg">74K+</span>
                    <span className="text-muted-foreground text-sm ml-2">Top Video Views</span>
                  </div>
                  <div className="bg-secondary px-4 py-2 rounded-lg">
                    <span className="text-red-500 font-bold text-lg">64+</span>
                    <span className="text-muted-foreground text-sm ml-2">Videos</span>
                  </div>
                  <div className="bg-secondary px-4 py-2 rounded-lg">
                    <span className="text-red-500 font-bold text-lg">1.05K+</span>
                    <span className="text-muted-foreground text-sm ml-2">Subscribers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-medium tracking-widest uppercase text-red-500">Community</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 mt-2 text-foreground">What Gamers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our community of gamers and content creators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Alex Johnson"
              role="Professional Streamer"
              image="/images/avatar-alex.jpg"
              quote="DutyEditz has completely transformed my content. The editing quality is unmatched and the community is incredibly supportive."
              rating={5}
            />
            <TestimonialCard
              name="Sarah Williams"
              role="Competitive Gamer"
              image="/images/avatar-sarah.jpg"
              quote="The tutorials helped me improve my skills dramatically. I've won three tournaments since joining DutyEditz!"
              rating={5}
            />
            <TestimonialCard
              name="Mike Chen"
              role="Content Creator"
              image="/images/avatar-mike.jpg"
              quote="The editing services are top-notch. My channel has grown 300% since I started using DutyEditz for my gameplay videos."
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-medium tracking-widest uppercase text-red-500">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 mt-2 text-foreground">
                Need Help or Want to Collaborate?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our team is ready to assist you with any questions, custom editing requests, or collaboration ideas.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-4">Contact Information</h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
                      <div className="bg-red-600/10 p-2 rounded-md">
                        <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a
                          href="mailto:chamilakusumsiri936@gmail.com"
                          className="text-red-500 hover:text-red-400 transition-colors font-medium"
                        >
                          chamilakusumsiri936@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
                      <div className="bg-red-600/10 p-2 rounded-md">
                        <Youtube className="h-5 w-5 text-red-500" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">YouTube</p>
                        <a
                          href="https://youtube.com/@dutyeditz?si=A4T_oGPsxdTz9b6j"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-500 hover:text-red-400 transition-colors font-medium"
                        >
                          @DutyEditz
                        </a>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mt-2">
                      We typically respond to all inquiries within 24 hours. For urgent matters, please include
                      &quot;URGENT&quot; in the subject line.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-4">Quick Actions</h3>
                  <div className="flex flex-col gap-3">
                    <a href="mailto:chamilakusumsiri936@gmail.com">
                      <Button className="w-full bg-red-600 text-white hover:bg-red-700">
                        Send an Email
                      </Button>
                    </a>
                    <a
                      href="https://youtube.com/@dutyeditz?si=A4T_oGPsxdTz9b6j"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="w-full border-border text-foreground hover:bg-accent">
                        <Youtube className="mr-2 h-4 w-4" /> Visit YouTube Channel
                      </Button>
                    </a>
                    <Button
                      variant="outline"
                      className="w-full border-border text-foreground hover:bg-accent"
                      onClick={() => document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Subscribe to Newsletter
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-medium tracking-widest uppercase text-red-500">Stay Updated</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 mt-2 text-foreground">
              Join the Community
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest gaming news, new video drops, and exclusive offers
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
