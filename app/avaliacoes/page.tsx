"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, MapPin, MessageCircle, ExternalLink, ThumbsUp, Award } from "lucide-react"
import Link from "next/link"

export default function AvaliacoesPage() {
  const googleMapsUrl = "https://maps.app.goo.gl/FSihzufXoQCv3nEs6"
  const internalReviewUrl = "/avaliacoes/avaliar" // Página interna de avaliação

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-900">Avaliações</Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
            Sua Opinião é Importante!
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Ajude-nos a melhorar nossos serviços compartilhando sua experiência com a Tecno Mania.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Avaliação Interna */}
            <Card className="border-2 border-blue-100 hover:border-blue-200 transition-all hover:shadow-xl">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl w-fit">
                  <MessageCircle className="h-12 w-12 text-blue-900" />
                </div>
                <CardTitle className="text-2xl text-gray-800">Avalie no Site</CardTitle>
                <CardDescription className="text-base">
                  Deixe seu feedback diretamente em nosso site
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-left">
                  <div className="flex items-start space-x-2">
                    <ThumbsUp className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600">Processo rápido e simples</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Star className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600">Avalie nosso atendimento e serviço</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Award className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600">Ajude outros clientes na escolha</p>
                  </div>
                </div>
                <Link href={internalReviewUrl} className="block">
                  <Button className="w-full bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-lg py-6">
                    <Star className="h-5 w-5 mr-2" />
                    Avaliar Agora
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Avaliação no Google Maps */}
            <Card className="border-2 border-green-100 hover:border-green-200 transition-all hover:shadow-xl">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-green-100 to-green-200 rounded-2xl w-fit">
                  <MapPin className="h-12 w-12 text-green-700" />
                </div>
                <CardTitle className="text-2xl text-gray-800">Avalie no Google</CardTitle>
                <CardDescription className="text-base">
                  Compartilhe sua experiência no Google Maps
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-left">
                  <div className="flex items-start space-x-2">
                    <ThumbsUp className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600">Sua avaliação fica pública no Google</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Star className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600">Ajuda na visibilidade da empresa</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Award className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600">Contribui com a comunidade local</p>
                  </div>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-lg py-6"
                  onClick={() => window.open(googleMapsUrl, "_blank")}
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Avaliar no Google
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Informações Adicionais */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-3xl">
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-800">
                Por que sua avaliação é importante?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <ThumbsUp className="h-6 w-6 text-blue-900" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Melhoria Contínua</h3>
                  <p className="text-sm text-gray-600">
                    Seu feedback nos ajuda a melhorar nossos serviços constantemente
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-green-700" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Confiança</h3>
                  <p className="text-sm text-gray-600">
                    Avaliações reais ajudam outros clientes a confiarem em nosso trabalho
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-purple-700" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Reconhecimento</h3>
                  <p className="text-sm text-gray-600">
                    Seu reconhecimento motiva nossa equipe a dar sempre o melhor
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-center text-gray-700 leading-relaxed">
                  <strong>Agradecemos por escolher a Tecno Mania!</strong>
                  <br />
                  Sua satisfação é nossa prioridade e cada avaliação nos ajuda a continuar oferecendo o melhor
                  atendimento e serviço técnico de qualidade.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
