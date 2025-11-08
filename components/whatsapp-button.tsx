"use client"

import type React from "react"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
  className?: string
  size?: "sm" | "default" | "lg"
  variant?: "default" | "outline" | "ghost"
  children?: React.ReactNode
}

export function WhatsAppButton({
  phoneNumber,
  message = "Olá! Gostaria de agendar uma consulta na Dentus Clínica.",
  className = "",
  size = "default",
  variant = "default",
  children,
}: WhatsAppButtonProps) {
  const handleWhatsApp = () => {
    const cleanNumber = phoneNumber.replace(/\D/g, "")
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/55${cleanNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <Button onClick={handleWhatsApp} className={className} size={size} variant={variant}>
      <MessageCircle className="h-4 w-4 mr-2" />
      {children || "WhatsApp"}
    </Button>
  )
}
