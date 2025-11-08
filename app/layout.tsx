import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Providers } from "@/components/providers"

const inter = Inter({ subsets: ["latin"] })

const blanka = localFont({
  src: "../public/fonts/Blanka-Regular.woff2",
  weight: "400 700",
  variable: "--font-blanka",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Tecno Mania Assistência & Variedades - Especialistas em Tecnologia",
  description:
    "Assistência técnica especializada em celulares, computadores, tablets e notebooks. Conserto de tela, troca de bateria, formatação e muito mais. Orçamento gratuito!",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} ${blanka.variable}`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </Providers>
      </body>
    </html>
  )
}
