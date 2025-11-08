import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Building2,
  Calendar,
  Users,
  Award,
  Shield,
  Heart,
  CheckCircle,
  Target,
  Eye,
  Lightbulb,
  Wrench,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-slate-800 text-white">Sobre a Tecno Mania</Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">
            Nossa História e Compromisso
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça a trajetória da Tecno Mania Assistência & Variedades, uma empresa dedicada à excelência em serviços
            técnicos e ao bem-estar tecnológico dos nossos clientes.
          </p>
        </div>
      </section>

      {/* Informações da Empresa */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Tecno Mania <span className="text-slate-800">Assistência & Variedades</span>
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Building2 className="h-5 w-5 text-slate-800" />
                  <span className="text-gray-700">
                    <strong>Razão Social:</strong> Tecno Mania Assistência & Variedades
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-slate-800" />
                  <span className="text-gray-700">
                    <strong>CNPJ:</strong> 39.622.128/0001-22
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Wrench className="h-5 w-5 text-slate-800" />
                  <span className="text-gray-700">
                    <strong>Especialidade:</strong> Assistência Técnica em Eletrônicos
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-slate-800" />
                  <span className="text-gray-700">
                    <strong>Atendimento:</strong> Celulares, Computadores, Tablets e Notebooks
                  </span>
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A Tecno Mania é uma empresa especializada em assistência técnica de dispositivos eletrônicos. Nossa
                missão é proporcionar soluções rápidas e eficientes para seus equipamentos, utilizando peças de
                qualidade e técnicos experientes.
              </p>

              <Link href="/contato">
                <Button className="bg-gradient-to-r from-slate-800 to-blue-900 hover:from-slate-900 hover:to-blue-950 text-white">
                  Entre em Contato
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-100 to-blue-100 rounded-3xl p-8">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-11-04%20221707-pKvo37yfppCCU4WtBJDtpzwVNxfWN6.png"
                  alt="Tecno Mania - Logo"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Nossos <span className="text-slate-800">Princípios</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-slate-100 to-slate-200 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Target className="h-8 w-8 text-slate-800" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Missão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Proporcionar serviços técnicos de excelência, resolvendo problemas tecnológicos com agilidade,
                  qualidade e atendimento personalizado.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Visão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ser reconhecida como referência em assistência técnica, oferecendo soluções inovadoras e confiáveis
                  para todos os tipos de dispositivos eletrônicos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-slate-100 to-blue-200 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-slate-800" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Valores</h3>
                <p className="text-gray-600 leading-relaxed">
                  Honestidade, qualidade, agilidade, transparência e compromisso com a satisfação dos nossos clientes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Nossos <span className="text-slate-800">Diferenciais</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              O que nos torna únicos no cuidado dos seus dispositivos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Garantia de 3 a 6 Meses",
                description: "Todos os serviços com garantia estendida para sua tranquilidade",
              },
              {
                icon: Award,
                title: "Técnicos Qualificados",
                description: "Equipe especializada com experiência em diversas marcas e modelos",
              },
              {
                icon: Heart,
                title: "Atendimento Personalizado",
                description: "Cuidado individualizado com foco na sua necessidade",
              },
              {
                icon: CheckCircle,
                title: "Peças de Qualidade",
                description: "Peças originais e paralelas de primeira linha com garantia",
              },
              {
                icon: Users,
                title: "Atendimento em Domicílio",
                description: "Suporte técnico para computadores e notebooks na sua casa",
              },
              {
                icon: Zap,
                title: "Orçamento Gratuito",
                description: "Avaliação sem compromisso para todos os serviços",
              },
            ].map((diferencial, index) => (
              <Card
                key={index}
                className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-slate-100 to-blue-100 p-3 rounded-xl w-12 h-12 mb-4 flex items-center justify-center">
                    <diferencial.icon className="h-6 w-6 text-slate-800" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">{diferencial.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{diferencial.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Números que <span className="text-slate-800">Comprovam</span> Nossa Excelência
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-800 mb-2">500+</div>
              <div className="text-gray-600">Dispositivos Reparados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-800 mb-2">98%</div>
              <div className="text-gray-600">Taxa de Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-800 mb-2">6</div>
              <div className="text-gray-600">Meses de Garantia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-800 mb-2">24h</div>
              <div className="text-gray-600">Tempo Médio de Reparo</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
