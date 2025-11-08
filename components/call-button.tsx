"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CallButtonProps {
  phoneNumber: string
  displayNumber?: string
  className?: string
  size?: "sm" | "default" | "lg"
  variant?: "default" | "outline" | "ghost"
}

export function CallButton({
  phoneNumber,
  displayNumber,
  className = "",
  size = "default",
  variant = "default",
}: CallButtonProps) {
  const handleCall = () => {
    // Remover caracteres especiais do número
    const cleanNumber = phoneNumber.replace(/\D/g, "")
    window.open(`tel:+55${cleanNumber}`, "_self")
  }

  return (
    <Button onClick={handleCall} className={className} size={size} variant={variant}>
      <Phone className="h-4 w-4 mr-2" />
      {displayNumber || phoneNumber}
    </Button>
  )
}
