"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { CheckCircle } from "lucide-react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Subscribed!",
        description: "You've been added to our newsletter. Check your inbox for a welcome email.",
      })
      setEmail("")
      setIsLoading(false)
      setIsSuccess(true)
      setTimeout(() => setIsSuccess(false), 3000)
    }, 1500)
  }

  if (isSuccess) {
    return (
      <div className="flex items-center justify-center gap-2 p-4 bg-card border border-border rounded-lg">
        <CheckCircle className="h-5 w-5 text-green-500" />
        <span className="text-foreground font-medium">You&apos;re subscribed! Welcome to the community.</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-card border-border focus-visible:ring-red-500 text-foreground"
        required
      />
      <Button
        type="submit"
        disabled={isLoading}
        className="bg-red-600 text-white hover:bg-red-700 font-medium whitespace-nowrap"
      >
        {isLoading ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  )
}
