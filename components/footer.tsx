"use client"

import { Zap, Phone, Mail, MapPin, Clock, Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4">
              <div className="bg-gradient-to-r from-slate-700 to-blue-800 p-1.5 sm:p-2 rounded-xl shrink-0">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-blanka">Tecno Mania</h3>
              </div>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm mb-4 leading-relaxed">
              Assistência técnica especializada em celulares, computadores, tablets e notebooks.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/tecno_maniaa_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Navegação</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/avaliacoes" className="hover:text-white transition-colors">
                  Avaliações
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Serviços</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>Conserto de Tela</li>
              <li>Troca de Bateria</li>
              <li>Reparo de Placa</li>
              <li>Reparo de Conector</li>
              <li>Formatação</li>
              <li>Limpeza Interna</li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contato</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-400">
              <li className="flex items-start space-x-2">
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 shrink-0" />
                <a href="tel:+5585998213158" className="hover:text-white transition-colors break-all">
                  (85) 99821-3158
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 shrink-0" />
                <a href="https://wa.me/5585998213158" className="hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 shrink-0" />
                <span
                  onClick={() => window.open("https://share.google/sxCGp4b1iIZeVvaPI", "_blank")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Av Central Oeste, 244
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 shrink-0" />
                <span className="text-gray-600">Cidade 2000, Papicu - Fortaleza</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 shrink-0" />
                <span className="text-gray-600 leading-relaxed">Seg-Sex: 10h às 18h | Sáb: 10h às 15h</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 shrink-0" />
                <a href="mailto:tecnomaniaa@gmail.com" className="hover:text-white transition-colors break-all">
                  tecnomaniaa@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
          <p>&copy; 2024 Tecno Mania Assistência & Variedades. Todos os direitos reservados.</p>
          <p className="mt-2">CNPJ: 39.622.128/0001-22</p>
          <p className="mt-2">
            Desenvolvido por <span className="text-blue-400 font-medium">Kayohan Costa</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
