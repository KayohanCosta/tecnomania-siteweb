"use client"

import type React from "react"

import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EmailButtonProps {
  email: string
  subject?: string
  body?: string
  className?: string
  size?: "sm" | "default" | "lg"
  variant?: "default" | "outline" | "ghost"
  children?: React.ReactNode
}

export function EmailButton({
  email,
  subject = "Contato via Site",
  body = "Olá, gostaria de mais informações sobre os serviços da Dentus Clínica.",
  className = "",
  size = "default",
  variant = "default",
  children,
}: EmailButtonProps) {
  const handleEmail = () => {
    const encodedSubject = encodeURIComponent(subject)
    const encodedBody = encodeURIComponent(body)
    window.open(`mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`, "_self")
  }

  return (
    <Button onClick={handleEmail} className={className} size={size} variant={variant}>
      <Mail className="h-4 w-4 mr-2" />
      {children || "Enviar E-mail"}
    </Button>
  )
}
