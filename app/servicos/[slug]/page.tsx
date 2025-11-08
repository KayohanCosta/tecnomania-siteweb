"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Stethoscope,
  Smile,
  Star,
  Heart,
  Shield,
  Users,
  Zap,
  Eye,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  ArrowLeft,
  Phone,
} from "lucide-react"
import Link from "next/link"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { notFound } from "next/navigation"

const servicosData = {
  "implantes-dentarios": {
    title: "Implantes Dentários",
    description:
      "Reabilitação completa com implantes de titânio de última geração para substituição de dentes perdidos.",
    icon: Stethoscope,
    color: "blue",
    duracao: "1-6 meses",
    preco: "Consulte-nos",
    detalhes: [
      "Implantes unitários e múltiplos",
      "Próteses sobre implantes",
      "Carga imediata quando indicada",
      "Tecnologia 3D para planejamento",
    ],
    conteudoCompleto: {
      introducao:
        "Os implantes dentários representam a solução mais moderna e eficaz para substituir dentes perdidos. Na Dentus Clínica, utilizamos implantes de titânio de última geração que se integram perfeitamente ao osso, proporcionando uma base sólida e duradoura para seus novos dentes.",
      beneficios: [
        "Aparência natural e estética superior",
        "Função mastigatória restaurada completamente",
        "Preservação do osso alveolar",
        "Durabilidade de longa duração (mais de 20 anos)",
        "Não compromete dentes adjacentes",
        "Melhora na autoestima e confiança",
      ],
      processo: [
        {
          etapa: "Avaliação e Planejamento",
          descricao: "Exame clínico completo, radiografias e tomografia 3D para planejamento preciso do implante.",
        },
        {
          etapa: "Cirurgia de Implante",
          descricao: "Colocação do implante de titânio no osso com técnica minimamente invasiva.",
        },
        {
          etapa: "Osseointegração",
          descricao: "Período de 3-6 meses para integração completa do implante ao osso.",
        },
        {
          etapa: "Colocação da Prótese",
          descricao: "Instalação da coroa definitiva sobre o implante integrado.",
        },
      ],
      cuidados: [
        "Higiene oral rigorosa com escova e fio dental",
        "Uso de enxaguante bucal específico",
        "Consultas regulares para manutenção",
        "Evitar hábitos prejudiciais como roer unhas ou morder objetos duros",
      ],
    },
  },
  ortodontia: {
    title: "Ortodontia",
    description: "Correção do posicionamento dos dentes e mordida com aparelhos convencionais e estéticos.",
    icon: Smile,
    color: "cyan",
    duracao: "12-36 meses",
    preco: "A partir de R$ 200/mês",
    detalhes: [
      "Aparelhos fixos metálicos",
      "Aparelhos estéticos (cerâmica)",
      "Alinhadores invisíveis",
      "Ortodontia para adultos e crianças",
    ],
    conteudoCompleto: {
      introducao:
        "A ortodontia é a especialidade que corrige a posição dos dentes e a relação entre os maxilares. Na Dentus Clínica, oferecemos diversas opções de tratamento ortodôntico para todas as idades, desde aparelhos convencionais até alinhadores invisíveis.",
      beneficios: [
        "Sorriso mais harmonioso e atrativo",
        "Melhora na função mastigatória",
        "Facilita a higiene oral",
        "Reduz problemas na ATM",
        "Melhora na respiração",
        "Aumento da autoestima",
      ],
      processo: [
        {
          etapa: "Consulta Inicial",
          descricao: "Avaliação completa com exames radiográficos e moldagem para diagnóstico.",
        },
        {
          etapa: "Planejamento",
          descricao: "Elaboração do plano de tratamento personalizado com previsão de resultados.",
        },
        {
          etapa: "Instalação",
          descricao: "Colocação do aparelho ortodôntico escolhido pelo paciente.",
        },
        {
          etapa: "Acompanhamento",
          descricao: "Consultas mensais para ajustes e monitoramento do progresso.",
        },
      ],
      cuidados: [
        "Escovação após todas as refeições",
        "Uso de fio dental e escova interdental",
        "Evitar alimentos duros e pegajosos",
        "Comparecer às consultas de manutenção",
      ],
    },
  },
  "clareamento-dental": {
    title: "Clareamento Dental",
    description: "Técnicas avançadas para deixar seus dentes mais brancos e seu sorriso mais brilhante.",
    icon: Star,
    color: "blue",
    duracao: "1-4 sessões",
    preco: "A partir de R$ 400",
    detalhes: [
      "Clareamento a laser",
      "Clareamento caseiro supervisionado",
      "Clareamento misto",
      "Manutenção do clareamento",
    ],
    conteudoCompleto: {
      introducao:
        "O clareamento dental é um dos procedimentos estéticos mais procurados na odontologia. Na Dentus Clínica, utilizamos técnicas seguras e eficazes para deixar seus dentes mais brancos e seu sorriso mais radiante.",
      beneficios: [
        "Dentes até 8 tons mais brancos",
        "Procedimento seguro e controlado",
        "Resultados imediatos",
        "Melhora significativa na estética",
        "Aumento da autoconfiança",
        "Técnicas personalizadas",
      ],
      processo: [
        {
          etapa: "Avaliação",
          descricao: "Exame para determinar a causa do escurecimento e o melhor tipo de clareamento.",
        },
        {
          etapa: "Profilaxia",
          descricao: "Limpeza profissional para remoção de tártaro e manchas superficiais.",
        },
        {
          etapa: "Aplicação",
          descricao: "Aplicação do gel clareador com ou sem ativação por luz/laser.",
        },
        {
          etapa: "Acompanhamento",
          descricao: "Monitoramento dos resultados e orientações para manutenção.",
        },
      ],
      cuidados: [
        "Evitar alimentos e bebidas pigmentantes nas primeiras 48h",
        "Não fumar durante o tratamento",
        "Usar creme dental específico",
        "Manter boa higiene oral",
      ],
    },
  },
  periodontia: {
    title: "Periodontia",
    description: "Tratamento especializado das gengivas e estruturas de suporte dos dentes.",
    icon: Heart,
    color: "cyan",
    duracao: "Variável",
    preco: "Consulte-nos",
    detalhes: [
      "Tratamento de gengivite",
      "Tratamento de periodontite",
      "Cirurgias periodontais",
      "Manutenção periodontal",
    ],
    conteudoCompleto: {
      introducao:
        "A periodontia trata das doenças que afetam as gengivas e os tecidos de suporte dos dentes. Na Dentus Clínica, oferecemos tratamentos especializados para prevenir e tratar problemas periodontais, mantendo a saúde da sua gengiva.",
      beneficios: [
        "Prevenção da perda dentária",
        "Eliminação do mau hálito",
        "Redução da inflamação gengival",
        "Melhora na saúde geral",
        "Estética gengival aprimorada",
        "Conforto mastigatório",
      ],
      processo: [
        {
          etapa: "Diagnóstico",
          descricao: "Avaliação periodontal completa com sondagem e radiografias.",
        },
        {
          etapa: "Tratamento Básico",
          descricao: "Raspagem e alisamento radicular para remoção do tártaro subgengival.",
        },
        {
          etapa: "Reavaliação",
          descricao: "Análise da resposta ao tratamento inicial após 30-45 dias.",
        },
        {
          etapa: "Manutenção",
          descricao: "Programa de manutenção periodontal personalizado.",
        },
      ],
      cuidados: [
        "Escovação adequada 3 vezes ao dia",
        "Uso diário de fio dental",
        "Enxaguante bucal específico",
        "Consultas regulares de manutenção",
      ],
    },
  },
  endodontia: {
    title: "Endodontia",
    description: "Tratamento de canal com tecnologia microscópica para preservar dentes comprometidos.",
    icon: Shield,
    color: "blue",
    duracao: "1-3 sessões",
    preco: "A partir de R$ 300",
    detalhes: [
      "Tratamento de canal convencional",
      "Retratamento endodôntico",
      "Microscopia operatória",
      "Técnicas rotatórias",
    ],
    conteudoCompleto: {
      introducao:
        "A endodontia é a especialidade que trata do interior do dente, especificamente da polpa dentária. Na Dentus Clínica, realizamos tratamentos de canal com tecnologia microscópica para preservar dentes que seriam perdidos.",
      beneficios: [
        "Preservação do dente natural",
        "Eliminação da dor",
        "Prevenção de infecções",
        "Manutenção da função mastigatória",
        "Economia comparada ao implante",
        "Procedimento confortável",
      ],
      processo: [
        {
          etapa: "Diagnóstico",
          descricao: "Exame clínico e radiográfico para avaliar a necessidade do tratamento.",
        },
        {
          etapa: "Anestesia",
          descricao: "Aplicação de anestesia local para conforto total durante o procedimento.",
        },
        {
          etapa: "Limpeza",
          descricao: "Remoção da polpa infectada e limpeza dos canais radiculares.",
        },
        {
          etapa: "Obturação",
          descricao: "Preenchimento dos canais com material biocompatível e selamento.",
        },
      ],
      cuidados: [
        "Evitar mastigar do lado tratado nas primeiras horas",
        "Tomar medicação conforme prescrito",
        "Manter higiene oral adequada",
        "Retornar para restauração definitiva",
      ],
    },
  },
  odontopediatria: {
    title: "Odontopediatria",
    description: "Cuidado especializado e preventivo para crianças e adolescentes.",
    icon: Users,
    color: "cyan",
    duracao: "30-60 min",
    preco: "A partir de R$ 80",
    detalhes: [
      "Primeira consulta odontológica",
      "Prevenção e educação",
      "Tratamentos restauradores",
      "Aplicação de flúor e selantes",
    ],
    conteudoCompleto: {
      introducao:
        "A odontopediatria é a especialidade dedicada ao cuidado da saúde bucal de bebês, crianças e adolescentes. Na Dentus Clínica, criamos um ambiente acolhedor e divertido para que as crianças tenham uma experiência positiva.",
      beneficios: [
        "Prevenção precoce de problemas",
        "Educação em saúde bucal",
        "Ambiente lúdico e acolhedor",
        "Técnicas adaptadas para crianças",
        "Acompanhamento do desenvolvimento",
        "Criação de hábitos saudáveis",
      ],
      processo: [
        {
          etapa: "Primeira Consulta",
          descricao: "Consulta de adaptação com exame lúdico e orientações aos pais.",
        },
        {
          etapa: "Prevenção",
          descricao: "Aplicação de flúor, selantes e orientações de higiene.",
        },
        {
          etapa: "Tratamento",
          descricao: "Procedimentos restauradores quando necessários, sempre com técnicas adequadas.",
        },
        {
          etapa: "Acompanhamento",
          descricao: "Consultas regulares para monitoramento do desenvolvimento.",
        },
      ],
      cuidados: [
        "Escovação supervisionada pelos pais",
        "Uso de creme dental com flúor adequado à idade",
        "Alimentação saudável com redução de açúcar",
        "Consultas regulares a cada 6 meses",
      ],
    },
  },
  "proteses-dentarias": {
    title: "Próteses Dentárias",
    description: "Reabilitação oral com próteses fixas e removíveis de alta qualidade.",
    icon: Zap,
    color: "blue",
    duracao: "2-8 semanas",
    preco: "Consulte-nos",
    detalhes: [
      "Próteses totais (dentaduras)",
      "Próteses parciais removíveis",
      "Coroas e pontes fixas",
      "Próteses sobre implantes",
    ],
    conteudoCompleto: {
      introducao:
        "As próteses dentárias são dispositivos que substituem dentes perdidos, restaurando a função mastigatória e a estética do sorriso. Na Dentus Clínica, confeccionamos próteses personalizadas com materiais de alta qualidade.",
      beneficios: [
        "Restauração da função mastigatória",
        "Melhora na estética facial",
        "Recuperação da autoestima",
        "Facilita a fala",
        "Suporte para lábios e bochechas",
        "Opções fixas e removíveis",
      ],
      processo: [
        {
          etapa: "Planejamento",
          descricao: "Avaliação completa e planejamento do tipo de prótese mais adequado.",
        },
        {
          etapa: "Moldagem",
          descricao: "Moldagens precisas para confecção da prótese personalizada.",
        },
        {
          etapa: "Prova",
          descricao: "Testes de adaptação e ajustes para conforto e estética.",
        },
        {
          etapa: "Instalação",
          descricao: "Colocação da prótese definitiva com orientações de uso.",
        },
      ],
      cuidados: [
        "Higienização diária adequada",
        "Remoção noturna (próteses removíveis)",
        "Consultas regulares para ajustes",
        "Cuidado com alimentos muito duros",
      ],
    },
  },
  "cirurgia-oral": {
    title: "Cirurgia Oral",
    description: "Procedimentos cirúrgicos orais realizados com segurança e precisão.",
    icon: Eye,
    color: "cyan",
    duracao: "30-120 min",
    preco: "A partir de R$ 150",
    detalhes: [
      "Extração de dentes do siso",
      "Extração de dentes inclusos",
      "Biópsias orais",
      "Cirurgias pré-protéticas",
    ],
    conteudoCompleto: {
      introducao:
        "A cirurgia oral engloba diversos procedimentos cirúrgicos realizados na cavidade bucal. Na Dentus Clínica, realizamos cirurgias com técnicas minimamente invasivas, priorizando o conforto e a rápida recuperação do paciente.",
      beneficios: [
        "Técnicas minimamente invasivas",
        "Anestesia eficaz e confortável",
        "Recuperação mais rápida",
        "Redução de complicações",
        "Ambiente cirúrgico seguro",
        "Acompanhamento pós-operatório",
      ],
      processo: [
        {
          etapa: "Avaliação",
          descricao: "Exame clínico e radiográfico para planejamento cirúrgico.",
        },
        {
          etapa: "Preparação",
          descricao: "Orientações pré-operatórias e preparação do campo cirúrgico.",
        },
        {
          etapa: "Cirurgia",
          descricao: "Procedimento cirúrgico com técnicas avançadas e seguras.",
        },
        {
          etapa: "Pós-operatório",
          descricao: "Acompanhamento da cicatrização e orientações de cuidados.",
        },
      ],
      cuidados: [
        "Repouso nas primeiras 24-48 horas",
        "Aplicação de gelo para reduzir inchaço",
        "Medicação conforme prescrito",
        "Alimentação líquida/pastosa nos primeiros dias",
      ],
    },
  },
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function ServicoDetalhePage({ params }: PageProps) {
  const servico = servicosData[params.slug as keyof typeof servicosData]

  if (!servico) {
    notFound()
  }

  const IconComponent = servico.icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Breadcrumb */}
      <section className="py-8 px-4 bg-white/50">
        <div className="container mx-auto">
          <Link
            href="/servicos"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para Serviços
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700">{servico.title}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {servico.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{servico.conteudoCompleto.introducao}</p>

              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">{servico.duracao}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">{servico.preco}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton
                  phoneNumber="85994010417"
                  message={`Gostaria de agendar uma consulta para ${servico.title}. Podem me ajudar?`}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Agendar Consulta
                </WhatsAppButton>
                <Button
                  variant="outline"
                  className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
                  onClick={() => window.open("tel:+558532817348", "_self")}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Ligar Agora
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-12 text-center">
                  <div
                    className={`mx-auto p-6 rounded-3xl bg-gradient-to-r ${
                      servico.color === "blue" ? "from-blue-100 to-blue-200" : "from-cyan-100 to-cyan-200"
                    } w-24 h-24 mb-6 flex items-center justify-center`}
                  >
                    <IconComponent
                      className={`h-12 w-12 ${servico.color === "blue" ? "text-blue-600" : "text-cyan-600"}`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{servico.title}</h3>
                  <p className="text-gray-600">{servico.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Benefícios do <span className="text-blue-600">{servico.title}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servico.conteudoCompleto.beneficios.map((beneficio, index) => (
              <Card key={index} className="border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{beneficio}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Como Funciona o <span className="text-blue-600">Tratamento</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servico.conteudoCompleto.processo.map((etapa, index) => (
              <Card key={index} className="border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-800">{etapa.etapa}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{etapa.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cuidados */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Cuidados <span className="text-blue-600">Importantes</span>
          </h2>

          <Card className="border-0 bg-white/80 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {servico.conteudoCompleto.cuidados.map((cuidado, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{cuidado}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Começar seu Tratamento?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Agende sua consulta e descubra como o {servico.title.toLowerCase()} pode transformar seu sorriso
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              phoneNumber="85994010417"
              message={`Gostaria de agendar uma consulta para ${servico.title}. Podem me ajudar?`}
              className="bg-white text-blue-600 hover:bg-gray-100"
              size="lg"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Agendar Consulta
            </WhatsAppButton>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
              onClick={() => window.open("tel:+558532817348", "_self")}
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
