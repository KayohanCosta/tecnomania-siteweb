"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Star, Send, CheckCircle } from "lucide-react"

export default function AvaliarPage() {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    servico: "",
    comentario: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.nome.trim() || !rating) {
      alert("Por favor, preencha seu nome e selecione uma avaliação.")
      return
    }

    // Construir mensagem para WhatsApp
    const phone = "5585998213158"
    
    const stars = "⭐".repeat(rating)
    const message = `🌟 Nova Avaliação Recebida!

👤 Nome: ${formData.nome}
${formData.email ? `📧 E-mail: ${formData.email}` : ""}
${formData.telefone ? `📱 Telefone: ${formData.telefone}` : ""}
${formData.servico ? `🛠️ Serviço: ${formData.servico}` : ""}

⭐ Avaliação: ${stars} (${rating}/5)

💬 Comentário:
${formData.comentario || "Nenhum comentário adicional."}

✨ Obrigado pela avaliação!`

    const text = encodeURIComponent(message)
    const url = `https://wa.me/${phone}?text=${text}`
    
    // Abrir WhatsApp
    window.open(url, "_blank")
    
    // Mostrar mensagem de sucesso
    setSubmitted(true)
    
    // Resetar formulário após 3 segundos
    setTimeout(() => {
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        servico: "",
        comentario: "",
      })
      setRating(0)
      setSubmitted(false)
    }, 3000)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 flex items-center justify-center px-4">
        <Card className="max-w-md w-full border-green-200 shadow-xl">
          <CardContent className="pt-12 pb-12 text-center">
            <div className="mx-auto mb-6 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Obrigado!</h2>
            <p className="text-lg text-gray-600 mb-2">
              Sua avaliação foi enviada com sucesso!
            </p>
            <p className="text-sm text-gray-500">
              Redirecionando para o WhatsApp...
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-blue-100 text-blue-900">Avaliação de Serviço</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
            Como foi sua experiência?
          </h1>
          <p className="text-lg text-gray-600">
            Sua opinião nos ajuda a melhorar continuamente nossos serviços
          </p>
        </div>

        <Card className="border-2 border-blue-100 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-800">Deixe sua Avaliação</CardTitle>
            <CardDescription>
              Avalie nosso atendimento e serviço técnico
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Sistema de Estrelas */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">
                  Qual sua nota para nosso serviço? <span className="text-red-500">*</span>
                </Label>
                <div className="flex justify-center gap-2 py-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="transition-transform hover:scale-110"
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      onClick={() => setRating(star)}
                    >
                      <Star
                        className={`h-12 w-12 ${
                          star <= (hoveredRating || rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        } transition-colors`}
                      />
                    </button>
                  ))}
                </div>
                {rating > 0 && (
                  <p className="text-center text-sm text-gray-600">
                    Você selecionou: <strong>{rating} estrela{rating > 1 ? "s" : ""}</strong>
                  </p>
                )}
              </div>

              {/* Nome */}
              <div className="space-y-2">
                <Label htmlFor="nome">
                  Seu Nome <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="nome"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  placeholder="Digite seu nome completo"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  E-mail <span className="text-gray-400 text-sm">(opcional)</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seuemail@exemplo.com"
                />
              </div>

              {/* Telefone */}
              <div className="space-y-2">
                <Label htmlFor="telefone">
                  Telefone/WhatsApp <span className="text-gray-400 text-sm">(opcional)</span>
                </Label>
                <Input
                  id="telefone"
                  type="tel"
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  placeholder="(85) 9 9999-9999"
                />
              </div>

              {/* Serviço */}
              <div className="space-y-2">
                <Label htmlFor="servico">
                  Qual serviço você utilizou? <span className="text-gray-400 text-sm">(opcional)</span>
                </Label>
                <Input
                  id="servico"
                  value={formData.servico}
                  onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                  placeholder="Ex: Troca de tela, Reparo de placa, etc."
                />
              </div>

              {/* Comentário */}
              <div className="space-y-2">
                <Label htmlFor="comentario">
                  Comentário <span className="text-gray-400 text-sm">(opcional)</span>
                </Label>
                <Textarea
                  id="comentario"
                  value={formData.comentario}
                  onChange={(e) => setFormData({ ...formData, comentario: e.target.value })}
                  placeholder="Conte-nos mais sobre sua experiência..."
                  rows={5}
                  className="resize-none"
                />
              </div>

              {/* Botão de Envio */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-lg py-6"
                disabled={!rating || !formData.nome.trim()}
              >
                <Send className="h-5 w-5 mr-2" />
                Enviar Avaliação
              </Button>

              <p className="text-xs text-center text-gray-500">
                Ao enviar, você será redirecionado para o WhatsApp com sua avaliação preenchida
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
