"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Calendar, Phone, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const closeMenu = () => setIsMenuOpen(false)

  const isActive = (path: string) => pathname === path

  // Hide header on admin pages
  if (pathname?.startsWith("/admin")) {
    return null
  }

  return (
    <header className="bg-white/98 backdrop-blur-lg border-b border-slate-200/80 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg overflow-hidden bg-slate-900 shadow-md ring-2 ring-slate-100">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-11-04%20221707-pKvo37yfppCCU4WtBJDtpzwVNxfWN6.png"
                alt="Tecno Mania"
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl lg:text-2xl font-bold text-slate-900 leading-tight font-blanka">
                Tecno Mania
              </h1>
              <p className="text-xs text-slate-500 leading-tight">Assistência & Variedades</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link 
              href="/" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive("/") 
                  ? "bg-slate-900 text-white" 
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              Início
            </Link>
            <Link 
              href="/sobre" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive("/sobre") 
                  ? "bg-slate-900 text-white" 
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              Sobre
            </Link>
            <Link 
              href="/servicos" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive("/servicos") 
                  ? "bg-slate-900 text-white" 
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              Serviços
            </Link>
            <Link 
              href="/avaliacoes" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive("/avaliacoes") 
                  ? "bg-slate-900 text-white" 
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              Avaliações
            </Link>
            <a 
              href="#ecommerce" 
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all text-slate-700 hover:bg-slate-100 hover:text-slate-900 flex items-center gap-2"
            >
              <ShoppingBag className="h-4 w-4" />
              Loja Online
            </a>
            <Link 
              href="/contato" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive("/contato") 
                  ? "bg-slate-900 text-white" 
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              Contato
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium"
              onClick={() => window.open("tel:+5585998213158", "_self")}
            >
              <Phone className="h-4 w-4 mr-2" />
              (85) 99821-3158
            </Button>
            <Link href="/contato">
              <Button 
                size="sm"
                className="bg-slate-900 hover:bg-slate-800 text-white shadow-sm font-medium"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Solicitar Orçamento
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                {isActive("/") && <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-800 rounded-r"></div>}
                <Link
                  href="/"
                  className={`block pl-4 text-gray-700 hover:text-slate-800 transition-colors ${
                    isActive("/") ? "text-slate-800 font-medium" : ""
                  }`}
                  onClick={closeMenu}
                >
                  Início
                </Link>
              </div>

              <div className="relative">
                {isActive("/sobre") && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-800 rounded-r"></div>
                )}
                <Link
                  href="/sobre"
                  className={`block pl-4 text-gray-700 hover:text-slate-800 transition-colors ${
                    isActive("/sobre") ? "text-slate-800 font-medium" : ""
                  }`}
                  onClick={closeMenu}
                >
                  Sobre
                </Link>
              </div>

              <div className="relative">
                {isActive("/servicos") && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-800 rounded-r"></div>
                )}
                <Link
                  href="/servicos"
                  className={`block pl-4 text-gray-700 hover:text-slate-800 transition-colors ${
                    isActive("/servicos") ? "text-slate-800 font-medium" : ""
                  }`}
                  onClick={closeMenu}
                >
                  Serviços
                </Link>
              </div>

              <div className="relative">
                {isActive("/avaliacoes") && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-800 rounded-r"></div>
                )}
                <Link
                  href="/avaliacoes"
                  className={`block pl-4 text-gray-700 hover:text-slate-800 transition-colors ${
                    isActive("/avaliacoes") ? "text-slate-800 font-medium" : ""
                  }`}
                  onClick={closeMenu}
                >
                  Avaliações
                </Link>
              </div>

              <div className="relative">
                <a
                  href="#ecommerce"
                  className="flex items-center gap-2 pl-4 text-gray-700 hover:text-slate-800 transition-colors"
                  onClick={closeMenu}
                >
                  <ShoppingBag className="h-5 w-5" />
                  Loja Online
                </a>
              </div>

              <div className="relative">
                {isActive("/contato") && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-800 rounded-r"></div>
                )}
                <Link
                  href="/contato"
                  className={`block pl-4 text-gray-700 hover:text-slate-800 transition-colors ${
                    isActive("/contato") ? "text-slate-800 font-medium" : ""
                  }`}
                  onClick={closeMenu}
                >
                  Contato
                </Link>
              </div>

              <div className="flex flex-col space-y-2 pt-4">
                <Link href="/contato" onClick={closeMenu}>
                  <Button className="w-full bg-linear-to-r from-slate-800 to-blue-900 hover:from-slate-900 hover:to-blue-950 text-white">
                    <Calendar className="h-4 w-4 mr-2" />
                    Solicitar Orçamento
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full border-slate-200 text-slate-700 hover:bg-slate-50 bg-transparent"
                  onClick={() => {
                    window.open("tel:+5585998213158", "_self")
                    closeMenu()
                  }}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Ligar Agora (85) 99821-3158
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
