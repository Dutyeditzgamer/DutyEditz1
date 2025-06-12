"use client"

import { useEffect } from "react"
import { Loader2 } from "lucide-react"

export default function VideosPage() {
  useEffect(() => {
    // Redirect to YouTube channel
    window.location.href = "https://youtube.com/@dutyeditz?si=A4T_oGPsxdTz9b6j"
  }, [])

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <Loader2 className="h-12 w-12 text-purple-500 animate-spin mb-4" />
      <h1 className="text-2xl font-bold text-white">Redirecting to DutyEditz YouTube Channel...</h1>
      <p className="text-gray-400 mt-2">
        If you are not redirected automatically, please{" "}
        <a
          href="https://youtube.com/@dutyeditz?si=A4T_oGPsxdTz9b6j"
          className="text-purple-400 hover:text-purple-300 underline"
        >
          click here
        </a>
      </p>
    </div>
  )
}
