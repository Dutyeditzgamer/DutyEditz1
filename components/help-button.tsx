"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { HelpCircle, X, Mail, Youtube } from "lucide-react"

export function HelpButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-card rounded-xl p-5 mb-4 shadow-2xl w-80 border border-border animate-in fade-in slide-in-from-bottom-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-display font-bold text-foreground">Need Help?</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-7 w-7 text-muted-foreground hover:text-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Close help menu</span>
            </Button>
          </div>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            Have questions or need assistance? Reach out through any of the options below.
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:chamilakusumsiri936@gmail.com"
              className="flex items-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white py-2.5 px-4 rounded-lg transition-colors text-sm font-medium"
            >
              <Mail className="h-4 w-4" />
              Send Email
            </a>
            <a
              href="https://youtube.com/@dutyeditz?si=A4T_oGPsxdTz9b6j"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 w-full bg-secondary hover:bg-accent text-foreground py-2.5 px-4 rounded-lg transition-colors text-sm font-medium border border-border"
            >
              <Youtube className="h-4 w-4 text-red-500" />
              Visit YouTube
            </a>
          </div>
        </div>
      )}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full h-12 w-12 bg-red-600 hover:bg-red-700 text-white shadow-lg"
        aria-label="Open help menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <HelpCircle className="h-5 w-5" />}
      </Button>
    </div>
  )
}
