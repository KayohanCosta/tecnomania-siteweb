"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Calendar, Shield, Award, Smartphone, CheckCircle, Wrench, Zap, Star, ShoppingBag, Heart, MessageCircle, Bookmark, MoreHorizontal, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { QuoteModal } from "@/components/quote-modal"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

export default function HomePage() {
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) {
      return
    }

    const intervalId = setInterval(() => {
      api.scrollNext()
    }, 8000) // Transição a cada 8 segundos

    return () => clearInterval(intervalId)
  }, [api])

  return (
  <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-gray-50">
      <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} />
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            {/* Logo da Tecno Mania */}
            <div className="mb-8 flex justify-center">
              <div className="rounded-5xl shadow-xl transition-transform duration-300 hover:scale-105">
                <img
                  src="/logo-tecnomania.png"
                  alt="Tecno Mania Logo"
                  className="rounded-2xl h-44 w-auto object-contain"
                />
              </div>
            </div>
            
            <Badge className="mb-6 bg-blue-100 text-blue-900 hover:bg-blue-200">
              Tecno Mania - CNPJ: 39.622.128/0001-22
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-blue-900 via-blue-700 to-blue-900 bg-clip-text text-transparent leading-tight">
              Especialistas em
              <br />
              <span className="relative bg-linear-to-r from-blue-900 via-blue-700 to-blue-900 bg-clip-text text-transparent">
                Tecnologia
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-blue-700 to-blue-900 rounded-full"></div>
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              A Tecno Mania oferece assistência técnica especializada em celulares, computadores, tablets e notebooks.
              Consertos rápidos, peças de qualidade e garantia de até 6 meses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-linear-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-lg px-8 py-3"
                onClick={() => setQuoteOpen(true)}
              >
                <Calendar className="h-5 w-5 mr-2" />
                Solicitar Orçamento Gratuito
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-900/20 text-blue-900 hover:bg-blue-50 text-lg px-8 py-3 bg-transparent"
                onClick={() => window.open("tel:+5585998213158", "_self")}
              >
                <Phone className="h-5 w-5 mr-2" />
                (85) 99821-3158
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-100">
                <Shield className="h-8 w-8 text-blue-900 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Garantia de até 6 Meses</h3>
                <p className="text-sm text-gray-600">Todos os serviços com garantia</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-100">
                <Award className="h-8 w-8 text-blue-900 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Técnicos Especializados</h3>
                <p className="text-sm text-gray-600">Profissionais experientes e qualificados</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-100">
                <Zap className="h-8 w-8 text-blue-900 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Atendimento Rápido</h3>
                <p className="text-sm text-gray-600">Diagnóstico e orçamento no mesmo dia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Preview */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center mx-auto max-w-2xl">
              <Badge className="mb-4 bg-blue-100 text-blue-900">Tecno Mania Assistência & Variedades</Badge>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Experiência e Qualidade em
                <span className="text-blue-900"> Assistência Técnica</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A Tecno Mania é especializada em consertos de dispositivos eletrônicos, oferecendo soluções rápidas e
                eficientes para celulares, computadores, tablets e notebooks com peças de qualidade e garantia.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Aparelhos Consertados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">98%</div>
                  <div className="text-sm text-gray-600">Satisfação</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">10+</div>
                  <div className="text-sm text-gray-600">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">6</div>
                  <div className="text-sm text-gray-600">Meses de Garantia</div>
                </div>
              </div>

              <Link href="/sobre">
                <Button className="bg-linear-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600">
                  Conheça Nossa História
                </Button>
              </Link>
            </div>

            <div className="relative">
              {/* Preview Instagram */}
              <div className="max-w-md mx-auto border-2 border-blue-200 rounded-3xl p-4 bg-white/30 backdrop-blur-sm">
                <Carousel 
                  setApi={setApi}
                  className="w-full" 
                  opts={{ 
                    align: "start", 
                    loop: true 
                  }}
                >
                <CarouselContent className="-ml-2">
                  <CarouselItem className="pl-2 basis-full">
                    <a 
                      href="https://instagram.com/tecno_maniaa_" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                        {/* Header Instagram compacto */}
                        <div className="flex items-center justify-between p-2 border-b border-gray-100">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-linear-to-br from-purple-500 via-pink-500 to-yellow-500 p-0.5">
                              <div className="w-full h-full rounded-full bg-white overflow-hidden relative">
                                <Image 
                                  src="/logo-tecnomania.png"
                                  alt="TecnoMania"
                                  fill
                                  className="object-cover scale-110"
                                />
                              </div>
                            </div>
                            <div>
                              <p className="font-semibold text-xs text-gray-900">tecno_maniaa_</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Imagem */}
                        <div className="aspect-square relative overflow-hidden bg-gray-900">
                          <Image 
                            src="/font20w.png"
                            alt="Fonte 20W Tipo C em Oferta"
                            fill
                            className="object-cover"
                          />
                        </div>
                        
                        {/* Footer compacto */}
                        <div className="p-2">
                          <div className="flex items-center gap-3 mb-1">
                            <Heart className="h-5 w-5 text-gray-700" />
                            <MessageCircle className="h-5 w-5 text-gray-700" />
                          </div>
                          <p className="font-semibold text-xs text-gray-900">523 curtidas</p>
                        </div>
                      </div>
                    </a>
                  </CarouselItem>
                    
                    <CarouselItem className="pl-2 basis-full">
                      <a 
                        href="https://instagram.com/tecno_maniaa_" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block group"
                      >
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                          <div className="flex items-center justify-between p-2 border-b border-gray-100">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-linear-to-br from-purple-500 via-pink-500 to-yellow-500 p-0.5">
                                <div className="w-full h-full rounded-full bg-white overflow-hidden relative">
                                  <Image 
                                    src="/logo-tecnomania.png"
                                    alt="TecnoMania"
                                    fill
                                    className="object-cover scale-110"
                                  />
                                </div>
                              </div>
                              <div>
                                <p className="font-semibold text-xs text-gray-900">tecno_maniaa_</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="aspect-square relative overflow-hidden bg-gray-900">
                            <Image 
                              src="/powerbank.png"
                              alt="Power Bank por Indução em Oferta"
                              fill
                              className="object-cover"
                            />
                          </div>
                          
                          <div className="p-2">
                            <div className="flex items-center gap-3 mb-1">
                              <Heart className="h-5 w-5 text-gray-700" />
                              <MessageCircle className="h-5 w-5 text-gray-700" />
                            </div>
                            <p className="font-semibold text-xs text-gray-900">412 curtidas</p>
                          </div>
                        </div>
                      </a>
                    </CarouselItem>
                    
                    <CarouselItem className="pl-2 basis-full">
                      <a 
                        href="https://instagram.com/tecno_maniaa_" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block group"
                      >
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                          <div className="flex items-center justify-between p-2 border-b border-gray-100">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-linear-to-br from-purple-500 via-pink-500 to-yellow-500 p-0.5">
                                <div className="w-full h-full rounded-full bg-white overflow-hidden relative">
                                  <Image 
                                    src="/logo-tecnomania.png"
                                    alt="TecnoMania"
                                    fill
                                    className="object-cover scale-110"
                                  />
                                </div>
                              </div>
                              <div>
                                <p className="font-semibold text-xs text-gray-900">tecno_maniaa_</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="aspect-square relative overflow-hidden bg-gray-900">
                            <Image 
                              src="/smartwatch.png"
                              alt="Smartwatch em Oferta"
                              fill
                              className="object-cover"
                            />
                          </div>
                          
                          <div className="p-2">
                            <div className="flex items-center gap-3 mb-1">
                              <Heart className="h-5 w-5 text-gray-700" />
                              <MessageCircle className="h-5 w-5 text-gray-700" />
                            </div>
                            <p className="font-semibold text-xs text-gray-900">689 curtidas</p>
                          </div>
                        </div>
                      </a>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>

                    {/* E-commerce Preview */}
                <section className="py-20 px-4 bg-linear-to-br from-blue-50 via-white to-slate-50">
                      <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
                          {/* Ícone grande à esquerda */}
                          <div className="lg:col-span-3 flex justify-center lg:justify-end">
                            <div className="bg-purple-100 rounded-3xl p-8 border-4 border-purple-200">
                              <ShoppingBag className="h-32 w-32 text-purple-700" />
                            </div>
                          </div>
                          
                          {/* Conteúdo à direita */}
                          <div className="lg:col-span-9 text-center lg:text-left">
                            <Badge className="mb-4 bg-purple-100 text-purple-800">E-commerce em Construção</Badge>
                            <h2 className="text-4xl font-bold mb-6 text-gray-800">
                              Em breve nossa <span className="text-blue-900">Loja Online</span>
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                              Estamos desenvolvendo nosso e-commerce para que você possa comprar acessórios, peças e produtos
                              de tecnologia diretamente aqui no site com praticidade, segurança e rapidez.
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-100">
                            <Shield className="h-8 w-8 text-purple-700 mx-auto mb-3" />
                            <h3 className="font-semibold text-gray-800 mb-2 text-center">Compra Segura</h3>
                            <p className="text-sm text-gray-600 text-center">Pagamento protegido e garantia nos produtos</p>
                          </div>
                          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-100">
                            <Award className="h-8 w-8 text-purple-700 mx-auto mb-3" />
                            <h3 className="font-semibold text-gray-800 mb-2 text-center">Seleção de Qualidade</h3>
                            <p className="text-sm text-gray-600 text-center">Acessórios e peças escolhidos pelos nossos técnicos</p>
                          </div>
                          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-100">
                            <Zap className="h-8 w-8 text-purple-700 mx-auto mb-3" />
                            <h3 className="font-semibold text-gray-800 mb-2 text-center">Experiência Ágil</h3>
                            <p className="text-sm text-gray-600 text-center">Processo simples e navegação otimizada</p>
                          </div>
                        </div>

                        {/* Barra de progresso simbólica */}
                        <div className="max-w-xl mx-auto mb-10">
                          <div className="text-sm font-medium text-gray-700 mb-2 flex items-center justify-between">
                            <span>Progresso do desenvolvimento</span>
                            <span className="text-purple-700 font-semibold">40%</span>
                          </div>
                          <div className="h-3 w-full bg-purple-100 rounded-full overflow-hidden">
                            <div className="h-full bg-linear-to-r from-purple-600 to-purple-400 w-[40%] rounded-full"></div>
                          </div>
                        </div>

                        <div className="text-center">
                          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                            Fique atento! Em breve você poderá adquirir tudo o que precisa diretamente conosco. Enquanto isso,
                            siga nosso Instagram para novidades.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                              className="bg-linear-to-r from-purple-700 to-purple-500 hover:from-purple-800 hover:to-purple-600 text-white px-8 py-3"
                              onClick={() => window.open("https://www.instagram.com/tecno_maniaa_/", "_blank")}
                            >
                              Seguir no Instagram
                            </Button>
                            <Button
                              variant="outline"
                              className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-3"
                              onClick={() => setQuoteOpen(true)}
                            >
                              Falar Conosco
                            </Button>
                          </div>
                        </div>
                      </div>
                    </section>
      {/* Serviços Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-900">Nossos Serviços</Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Serviços <span className="text-blue-900">Especializados</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços de assistência técnica com garantia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Conserto de Tela",
                description: "Troca de tela para celulares, tablets e notebooks",
                icon: Smartphone,
                color: "blue",
              },
              {
                title: "Troca de Bateria",
                description: "Baterias originais e paralelas de primeira linha",
                icon: Zap,
                color: "blue",
              },
              {
                title: "Reparo de Placa",
                description: "Conserto de placas-mãe e componentes eletrônicos",
                icon: Wrench,
                color: "blue",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto p-4 rounded-2xl bg-linear-to-r from-blue-100 to-blue-200 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-blue-900" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/servicos">
              <Button variant="outline" className="border-blue-900/20 text-blue-900 hover:bg-blue-50 bg-transparent">
                Ver Todos os Serviços
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Avaliações Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-900">Avaliações</Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              O que Nossos <span className="text-blue-900">Clientes Dizem</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sua opinião é muito importante para nós! Veja o que nossos clientes falam sobre nosso atendimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Card 1 - Depoimento Exemplo */}
            <Card className="border-2 border-blue-100 hover:border-blue-200 hover:shadow-xl transition-all bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Excelente atendimento! Meu celular foi consertado rapidamente e ficou perfeito. Recomendo!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-900 font-semibold">MS</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-800">Maria Silva</p>
                    <p className="text-sm text-gray-500">Cliente verificada</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 2 - Depoimento Exemplo */}
            <Card className="border-2 border-blue-100 hover:border-blue-200 hover:shadow-xl transition-all bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Profissionais muito competentes. Resolveram o problema do meu notebook que ninguém mais conseguiu!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-900 font-semibold">JS</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-800">João Santos</p>
                    <p className="text-sm text-gray-500">Cliente verificado</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 3 - Depoimento Exemplo */}
            <Card className="border-2 border-blue-100 hover:border-blue-200 hover:shadow-xl transition-all bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Preço justo, garantia de 6 meses e atendimento impecável. Voltarei sempre que precisar!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-900 font-semibold">AC</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-800">Ana Costa</p>
                    <p className="text-sm text-gray-500">Cliente verificada</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/avaliacoes">
              <Button className="bg-linear-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-lg px-8 py-3">
                <Star className="h-5 w-5 mr-2" />
                Deixe sua Avaliação
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
  <section className="py-20 px-4 bg-linear-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Precisa Consertar seu Aparelho?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Solicite um orçamento gratuito e descubra como podemos resolver seu problema
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-3"
              onClick={() => setQuoteOpen(true)}
            >
              <Calendar className="h-5 w-5 mr-2" />
              Solicitar Orçamento
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-3 bg-transparent"
              onClick={() => window.open("tel:+5585998213158", "_self")}
            >
              <Phone className="h-5 w-5 mr-2" />
              Ligar Agora
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Modal de orçamento
export function HomePageModals() {
  return null
}

