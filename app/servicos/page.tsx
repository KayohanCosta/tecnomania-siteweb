"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Smartphone,
  Monitor,
  Laptop,
  Battery,
  Wrench,
  Zap,
  Shield,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
} from "lucide-react"
import Link from "next/link"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function ServicosPage() {
  const servicos = [
    {
      title: "Conserto de Tela",
      description: "Troca de tela para celulares, tablets e notebooks com peças de qualidade e garantia.",
      detalhes: [
        "Telas originais e paralelas",
        "Instalação profissional",
        "Teste completo após troca",
        "Garantia de 3 a 6 meses",
      ],
      icon: Smartphone,
      color: "slate",
      duracao: "1-2 horas",
      preco: "A partir de R$ 80",
    },
    {
      title: "Troca de Bateria",
      description: "Substituição de baterias para maior autonomia e desempenho do seu dispositivo.",
      detalhes: [
        "Baterias de alta qualidade",
        "Teste de carga completo",
        "Calibração do sistema",
        "Garantia estendida",
      ],
      icon: Battery,
      color: "blue",
      duracao: "30-60 min",
      preco: "A partir de R$ 60",
    },
    {
      title: "Reparo de Placa",
      description: "Conserto de placas-mãe e circuitos com equipamentos especializados.",
      detalhes: ["Diagnóstico preciso", "Micro soldagem", "Reballing de chips", "Testes rigorosos"],
      icon: Wrench,
      color: "slate",
      duracao: "2-5 dias",
      preco: "Consulte-nos",
    },
    {
      title: "Reparo de Conector de Carga",
      description: "Troca e reparo de conectores de carga para todos os modelos.",
      detalhes: ["Conectores originais", "Limpeza de contatos", "Teste de carregamento", "Garantia do serviço"],
      icon: Zap,
      color: "blue",
      duracao: "1-2 horas",
      preco: "A partir de R$ 50",
    },
    {
      title: "Formatação",
      description: "Formatação completa e reinstalação de sistema operacional.",
      detalhes: ["Backup de dados", "Instalação de drivers", "Programas essenciais", "Otimização do sistema"],
      icon: Monitor,
      color: "slate",
      duracao: "2-4 horas",
      preco: "A partir de R$ 80",
    },
    {
      title: "Limpeza Interna",
      description: "Limpeza profunda para melhor desempenho e refrigeração.",
      detalhes: ["Remoção de poeira", "Troca de pasta térmica", "Limpeza de coolers", "Teste de temperatura"],
      icon: Shield,
      color: "blue",
      duracao: "1-2 horas",
      preco: "A partir de R$ 60",
    },
    {
      title: "Remoção de Vírus",
      description: "Limpeza completa de vírus, malware e programas indesejados.",
      detalhes: [
        "Scan completo do sistema",
        "Remoção de ameaças",
        "Instalação de antivírus",
        "Orientações de segurança",
      ],
      icon: Shield,
      color: "slate",
      duracao: "1-3 horas",
      preco: "A partir de R$ 70",
    },
    {
      title: "Atendimento em Domicílio",
      description: "Suporte técnico para computadores e notebooks na sua casa ou empresa.",
      detalhes: ["Agendamento flexível", "Diagnóstico no local", "Reparo quando possível", "Sem taxa de deslocamento"],
      icon: Laptop,
      color: "blue",
      duracao: "Variável",
      preco: "Consulte-nos",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-slate-800 text-white">Nossos Serviços</Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">
            Serviços Especializados
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A Tecno Mania oferece uma gama completa de serviços técnicos com equipamentos profissionais e técnicos
            especializados para cuidar dos seus dispositivos.
          </p>
        </div>
      </section>

      {/* Serviços Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicos.map((servico, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-2xl bg-gradient-to-r ${
                        servico.color === "slate" ? "from-slate-100 to-slate-200" : "from-blue-100 to-blue-200"
                      } group-hover:scale-110 transition-transform duration-300`}
                    >
                      <servico.icon
                        className={`h-6 w-6 ${servico.color === "slate" ? "text-slate-800" : "text-blue-900"}`}
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-slate-800 transition-colors mb-2">
                        {servico.title}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {servico.duracao}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {servico.preco}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {servico.description}
                  </CardDescription>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">O que inclui:</h4>
                    <ul className="space-y-2">
                      {servico.detalhes.map((detalhe, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{detalhe}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <WhatsAppButton
                    phoneNumber="85998213158"
                    message={`Olá! Gostaria de solicitar o serviço de ${servico.title}. Podem me ajudar?`}
                    className="w-full bg-gradient-to-r from-slate-800 to-blue-900 hover:from-slate-900 hover:to-blue-950 text-white"
                    size="sm"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Solicitar Orçamento
                  </WhatsAppButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Garantias */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Garantia e <span className="text-slate-800">Qualidade</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trabalhamos com as melhores peças e oferecemos garantia estendida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-slate-100 to-slate-200 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-slate-800" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Garantia Estendida</h3>
                <p className="text-gray-600 text-sm">De 3 a 6 meses de garantia em todos os serviços realizados</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-blue-900" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Peças de Qualidade</h3>
                <p className="text-gray-600 text-sm">Peças originais e paralelas de primeira linha com garantia</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-slate-100 to-blue-200 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-slate-800" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Orçamento Gratuito</h3>
                <p className="text-gray-600 text-sm">Avaliação sem compromisso para todos os serviços</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Consertar seu Dispositivo?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Solicite um orçamento gratuito e descubra como podemos ajudar
          </p>
          <Link href="/contato">
            <Button size="lg" className="bg-white text-slate-800 hover:bg-gray-100 text-lg px-8 py-3">
              <Calendar className="h-5 w-5 mr-2" />
              Solicitar Orçamento Gratuito
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
