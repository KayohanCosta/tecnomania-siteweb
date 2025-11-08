"use client"

import { Button } from "@/components/ui/button"
import { LogOut, Home } from "lucide-react"
import { useRouter } from "next/navigation"

export function AdminHeader() {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    router.push("/admin/login")
  }

  const goToSite = () => {
    router.push("/")
  }

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-08-21%20021216-6cGY0ENqpJ1kEjlMiZpwCp0QeSOFtX.png"
                alt="Dentus Clínica Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Painel Administrativo</h1>
              <p className="text-sm text-gray-600">Dentus Clínica</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={goToSite}
              variant="outline"
              size="sm"
              className="flex items-center gap-2 bg-transparent hover:bg-gray-50"
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Ver Site</span>
            </Button>

            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="flex items-center gap-2 bg-transparent hover:bg-red-50 hover:border-red-200 hover:text-red-600"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Sair</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
