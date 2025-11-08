import { type NextRequest, NextResponse } from "next/server"

// Simulação de banco de dados em memória
const contacts: Array<{
  id: string
  name: string
  email: string
  phone: string
  message: string
  createdAt: string
}> = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Nome, email e mensagem são obrigatórios" }, { status: 400 })
    }

    // Criar novo contato
    const newContact = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || "",
      message,
      createdAt: new Date().toISOString(),
    }

    // Adicionar à lista de contatos
    contacts.push(newContact)

    return NextResponse.json({ message: "Contato enviado com sucesso!" }, { status: 200 })
  } catch (error) {
    console.error("Erro ao processar contato:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    // Verificar autenticação básica
    const authHeader = request.headers.get("authorization")

    if (!authHeader || !authHeader.startsWith("Basic ")) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
    }

    const credentials = authHeader.slice(6)
    const decoded = atob(credentials)
    const [username, password] = decoded.split(":")

    // Verificar credenciais (em produção, use um sistema mais seguro)
    if (username !== "admin" || password !== "dentus2024") {
      return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 })
    }

    // Retornar contatos ordenados por data (mais recente primeiro)
    const sortedContacts = contacts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

    return NextResponse.json({ contacts: sortedContacts }, { status: 200 })
  } catch (error) {
    console.error("Erro ao buscar contatos:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
