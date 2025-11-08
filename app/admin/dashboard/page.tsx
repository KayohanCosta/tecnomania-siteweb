"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Mail, Phone, Calendar, MessageSquare, Eye } from "lucide-react"
import { AdminHeader } from "@/components/admin-header"

interface Contact {
  id: string
  name: string
  email: string
  phone: string
  message: string
  createdAt: string
}

export default function AdminDashboard() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const router = useRouter()

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (!auth) {
      router.push("/admin/login")
      return
    }

    fetchContacts(auth)
  }, [router])

  const fetchContacts = async (auth: string) => {
    try {
      const response = await fetch("/api/contact", {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        setContacts(data.contacts || [])
      } else {
        router.push("/admin/login")
      }
    } catch (error) {
      console.error("Erro ao buscar contatos:", error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("pt-BR")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
        <AdminHeader />
        <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Carregando...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <AdminHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Contatos</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{contacts.length}</div>
              <p className="text-xs text-muted-foreground">Todos os contatos recebidos</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hoje</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {contacts.filter((c) => new Date(c.createdAt).toDateString() === new Date().toDateString()).length}
              </div>
              <p className="text-xs text-muted-foreground">Contatos recebidos hoje</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Esta Semana</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">
                {
                  contacts.filter((c) => {
                    const contactDate = new Date(c.createdAt)
                    const weekAgo = new Date()
                    weekAgo.setDate(weekAgo.getDate() - 7)
                    return contactDate >= weekAgo
                  }).length
                }
              </div>
              <p className="text-xs text-muted-foreground">Contatos dos últimos 7 dias</p>
            </CardContent>
          </Card>
        </div>

        {/* Contacts List */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              Contatos Recebidos
            </CardTitle>
            <CardDescription>Lista de todos os contatos enviados através do formulário do site</CardDescription>
          </CardHeader>
          <CardContent>
            {contacts.length === 0 ? (
              <div className="text-center py-12">
                <MessageSquare className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum contato recebido</h3>
                <p className="text-gray-600">Os contatos enviados através do formulário aparecerão aqui</p>
              </div>
            ) : (
              <div className="space-y-4">
                {contacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="border rounded-lg p-4 hover:bg-gray-50 transition-colors hover:shadow-md"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-lg">{contact.name}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600 mt-2">
                          <div className="flex items-center gap-1">
                            <Mail className="h-4 w-4 text-blue-500" />
                            <span className="break-all">{contact.email}</span>
                          </div>
                          {contact.phone && (
                            <div className="flex items-center gap-1">
                              <Phone className="h-4 w-4 text-green-500" />
                              <span>{contact.phone}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <Badge variant="secondary" className="text-xs whitespace-nowrap">
                          {formatDate(contact.createdAt)}
                        </Badge>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setSelectedContact(contact)}
                          className="hover:bg-blue-50"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm line-clamp-2 bg-gray-50 p-3 rounded-md">{contact.message}</p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Modal para visualizar contato completo */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">Detalhes do Contato</CardTitle>
                  <CardDescription>Recebido em {formatDate(selectedContact.createdAt)}</CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedContact(null)}
                  className="hover:bg-gray-100"
                >
                  ✕
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">Nome Completo</Label>
                  <p className="text-gray-900 font-medium">{selectedContact.name}</p>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">Email</Label>
                  <p className="text-gray-900 break-all">{selectedContact.email}</p>
                </div>
              </div>

              {selectedContact.phone && (
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">Telefone</Label>
                  <p className="text-gray-900">{selectedContact.phone}</p>
                </div>
              )}

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Mensagem</Label>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-900 whitespace-pre-wrap leading-relaxed">{selectedContact.message}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                <Button
                  onClick={() => window.open(`mailto:${selectedContact.email}`)}
                  className="bg-blue-600 hover:bg-blue-700 flex-1"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Responder por Email
                </Button>
                {selectedContact.phone && (
                  <Button
                    variant="outline"
                    onClick={() => window.open(`tel:${selectedContact.phone}`)}
                    className="flex-1 hover:bg-green-50 hover:border-green-200"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Ligar
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return <label className={className}>{children}</label>
}
