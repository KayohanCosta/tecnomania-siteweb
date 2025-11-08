"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Calendar, Send, Building2, Smartphone, Monitor, Wrench, MessageCircle, User } from "lucide-react"
import { useState } from "react"
import { NotificationToast } from "@/components/notification-toast"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    servico: "",
    mensagem: "",
  })

  const [notification, setNotification] = useState<{
    message: string
    type: "success" | "error"
    isVisible: boolean
  }>({
    message: "",
    type: "success",
    isVisible: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validação básica
    if (!formData.nome.trim() || !formData.telefone.trim() || !formData.email.trim()) {
      setNotification({
        message: "Por favor, preencha todos os campos obrigatórios.",
        type: "error",
        isVisible: true,
      })
      return
    }

    // Construir mensagem para WhatsApp no formato especificado
    const phone = "5585998213158"
    
    const message = `💬 Solicitação de Contato

👤 Nome: ${formData.nome}
📱 WhatsApp: ${formData.telefone}
📧 E-mail: ${formData.email}
${formData.servico ? `🛠️ Serviço: ${formData.servico}` : ""}
${formData.mensagem ? `\n📝 Mensagem:\n${formData.mensagem}` : ""}

📨 Aguardo o retorno, por favor! 🙏`

    const text = encodeURIComponent(message)
    const url = `https://wa.me/${phone}?text=${text}`
    
    // Abrir WhatsApp em nova aba
    window.open(url, "_blank")
    
    // Limpar formulário
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      servico: "",
      mensagem: "",
    })

    // Mostrar notificação de sucesso
    setNotification({
      message: "Redirecionando para o WhatsApp...",
      type: "success",
      isVisible: true,
    })
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-slate-800 text-white">Entre em Contato</Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">
            Fale Conosco
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atendê-lo! Entre em contato com a Tecno Mania e solicite seu orçamento ou tire suas
            dúvidas.
          </p>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                Informações da <span className="text-slate-800">Tecno Mania</span>
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-slate-100 to-slate-200 p-3 rounded-xl">
                    <Building2 className="h-6 w-6 text-slate-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Razão Social</h3>
                    <p className="text-gray-600">Tecno Mania Assistência & Variedades</p>
                    <p className="text-sm text-gray-500">CNPJ: 39.622.128/0001-22</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Telefone / WhatsApp</h3>
                    <p className="text-gray-600">(85) 99821-3158</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-slate-100 to-blue-200 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-slate-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">E-mail</h3>
                    <p className="text-gray-600">tecnomaniaa@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-100 to-slate-200 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Endereço</h3>
                    <p className="text-gray-600">Av Central Oeste, 244 - Cidade 2000</p>
                    <p className="text-gray-600">Papicu - Fortaleza - CE</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-slate-100 to-slate-200 p-3 rounded-xl">
                    <Clock className="h-6 w-6 text-slate-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Horário de Funcionamento</h3>
                    <p className="text-gray-600">Segunda a Sexta: 10h às 18h</p>
                    <p className="text-gray-600">Sábado: 10h às 15h</p>
                    <p className="text-gray-600">Domingo: Fechado</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5585998213158?text=Olá! Gostaria de solicitar um orçamento na Tecno Mania.",
                      "_blank",
                    )
                  }
                >
                  <Phone className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-200 text-slate-700 hover:bg-slate-50 bg-transparent"
                  onClick={() =>
                    window.open(
                      "mailto:tecnomaniaa@gmail.com?subject=Contato via Site&body=Olá, gostaria de mais informações sobre os serviços da Tecno Mania.",
                      "_self",
                    )
                  }
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Enviar E-mail
                </Button>
              </div>
            </div>

            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                  <Calendar className="h-6 w-6 mr-3 text-slate-800" />
                  Solicite seu Orçamento
                </CardTitle>
                <p className="text-gray-600">
                  Preencha o formulário abaixo e entraremos em contato para avaliar seu dispositivo
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nome" className="flex items-center gap-2">
                        <User className="h-4 w-4 text-slate-600" />
                        Nome Completo *
                      </Label>
                      <Input
                        id="nome"
                        type="text"
                        placeholder="Seu nome completo"
                        value={formData.nome}
                        onChange={(e) => handleChange("nome", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefone" className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-slate-600" />
                        Telefone *
                      </Label>
                      <Input
                        id="telefone"
                        type="tel"
                        placeholder="(85) 99821-3158"
                        value={formData.telefone}
                        onChange={(e) => handleChange("telefone", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-slate-600" />
                      E-mail *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="servico" className="flex items-center gap-2">
                      <Wrench className="h-4 w-4 text-slate-600" />
                      Serviço de Interesse
                    </Label>
                    <Select 
                      value={formData.servico} 
                      onValueChange={(value) => handleChange("servico", value)}
                    >
                      <SelectTrigger className="mt-1 w-full" id="servico">
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                      <SelectContent className="z-[200]">
                        <SelectItem value="Conserto de Tela">📱 Conserto de Tela</SelectItem>
                        <SelectItem value="Troca de Bateria">🔋 Troca de Bateria</SelectItem>
                        <SelectItem value="Reparo de Placa">🔧 Reparo de Placa</SelectItem>
                        <SelectItem value="Reparo de Conector de Carga">⚡ Reparo de Conector de Carga</SelectItem>
                        <SelectItem value="Formatação">💻 Formatação</SelectItem>
                        <SelectItem value="Limpeza Interna">🧹 Limpeza Interna</SelectItem>
                        <SelectItem value="Remoção de Vírus">🛡️ Remoção de Vírus</SelectItem>
                        <SelectItem value="Atendimento em Domicílio">🏠 Atendimento em Domicílio</SelectItem>
                        <SelectItem value="Outro">📋 Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="mensagem" className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-slate-600" />
                      Mensagem
                    </Label>
                    <Textarea
                      id="mensagem"
                      placeholder="Descreva o problema do seu dispositivo..."
                      value={formData.mensagem}
                      onChange={(e) => handleChange("mensagem", e.target.value)}
                      className="mt-1 min-h-[100px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-lg py-3 shadow-lg"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Enviar pelo WhatsApp
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    * Campos obrigatórios. Seus dados estão protegidos pela LGPD.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Orçamento por <span className="text-slate-800">Serviço</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Clique no serviço desejado para solicitar orçamento diretamente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Tela",
                icon: Smartphone,
                color: "slate",
                action: () =>
                  window.open(
                    "https://wa.me/5585998213158?text=Gostaria de solicitar orçamento para Conserto de Tela.",
                    "_blank",
                  ),
              },
              {
                name: "Bateria",
                icon: Wrench,
                color: "blue",
                action: () =>
                  window.open(
                    "https://wa.me/5585998213158?text=Gostaria de solicitar orçamento para Troca de Bateria.",
                    "_blank",
                  ),
              },
              {
                name: "Formatação",
                icon: Monitor,
                color: "slate",
                action: () =>
                  window.open(
                    "https://wa.me/5585998213158?text=Gostaria de solicitar orçamento para Formatação.",
                    "_blank",
                  ),
              },
              {
                name: "Emergência",
                icon: Phone,
                color: "red",
                action: () => window.open("tel:+5585998213158", "_self"),
              },
            ].map((specialty, index) => (
              <Card
                key={index}
                className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={specialty.action}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`mx-auto p-4 rounded-2xl w-16 h-16 mb-4 flex items-center justify-center bg-gradient-to-r ${
                      specialty.color === "slate"
                        ? "from-slate-100 to-slate-200"
                        : specialty.color === "blue"
                          ? "from-blue-100 to-blue-200"
                          : "from-red-100 to-red-200"
                    } group-hover:scale-110 transition-transform duration-300`}
                  >
                    <specialty.icon
                      className={`h-8 w-8 ${
                        specialty.color === "slate"
                          ? "text-slate-800"
                          : specialty.color === "blue"
                            ? "text-blue-900"
                            : "text-red-600"
                      }`}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-slate-800 transition-colors">
                    {specialty.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Nossa <span className="text-slate-800">Localização</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Estamos localizados no Papicu, Fortaleza, com fácil acesso
            </p>
          </div>

          <div className="bg-gradient-to-r from-slate-100 to-blue-100 rounded-3xl p-8">
            <div className="bg-white rounded-2xl p-8 text-center">
              <MapPin className="h-16 w-16 text-slate-800 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Tecno Mania Assistência & Variedades</h3>
              <p className="text-gray-600 mb-2">Av Central Oeste, 244 - Cidade 2000</p>
              <p className="text-gray-600 mb-2">Papicu - Fortaleza - CE</p>
              <p className="text-sm text-gray-500 mb-6">CNPJ: 39.622.128/0001-22</p>
              <Button
                className="bg-gradient-to-r from-slate-800 to-blue-900 hover:from-slate-900 hover:to-blue-950 text-white"
                onClick={() => window.open("https://share.google/sxCGp4b1iIZeVvaPI", "_blank")}
              >
                Ver no Google Maps
              </Button>
            </div>
          </div>
        </div>
      </section>
      <NotificationToast
        message={notification.message}
        type={notification.type}
        isVisible={notification.isVisible}
        onClose={() => setNotification((prev) => ({ ...prev, isVisible: false }))}
      />
    </div>
  )
}
