"use client"

import { CheckCircle, X } from "lucide-react"
import { useEffect } from "react"

interface NotificationToastProps {
  message: string
  type: "success" | "error"
  isVisible: boolean
  onClose: () => void
}

export function NotificationToast({ message, type, isVisible, onClose }: NotificationToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, 5000) // Auto close após 5 segundos

      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!isVisible) return null

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right duration-300">
      <div
        className={`flex items-center space-x-3 px-6 py-4 rounded-lg shadow-lg ${
          type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        <CheckCircle className="h-5 w-5" />
        <span className="font-medium">{message}</span>
        <button onClick={onClose} className="ml-4 hover:opacity-70">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
