import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "DutyEditz - Gaming Edits and Tutorials"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#000000",
        position: "relative",
      }}
    >
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/high%20qq.jpg-yl76BKNzrv5f9LsNXDfDvdhwSmP8Dn.jpeg"
        alt="DutyEditz Logo"
        style={{
          width: "300px",
          height: "300px",
          marginBottom: "40px",
          borderRadius: "8px",
        }}
      />
      <h1
        style={{
          fontSize: 80,
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          marginBottom: 20,
          background: "linear-gradient(to right, #a855f7, #ec4899)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        DutyEditz
      </h1>
      <p
        style={{
          fontSize: 40,
          color: "white",
          textAlign: "center",
          maxWidth: "80%",
        }}
      >
        Elevate your gaming experience with premium edits and tutorials
      </p>
    </div>,
    {
      ...size,
    },
  )
}
