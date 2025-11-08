"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Info } from "lucide-react"
 

type QuoteModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function QuoteModal({ open, onOpenChange }: QuoteModalProps) {
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    name: "",
    contact: "", // whatsapp ou telefone do cliente (opcional)
    deviceType: "",
    brand: "",
    model: "",
    issue: "",
  })

  const set = (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }))

  const requiredOk =
    form.name.trim() && form.deviceType.trim() && form.brand.trim() && form.model.trim() && form.issue.trim()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!requiredOk) return
    setSubmitting(true)
    const phone = "5585998213158" // destino (DDD com país sem sinais)

    // Mapear ícones de acordo com o tipo
    const deviceIcons: Record<string, string> = {
      celular: "📱",
      notebook: "💻",
      computador: "🖥️",
      tablet: "📱",
      desktop: "🖥️",
      pc: "🖥️",
    }
    
    const deviceType = form.deviceType.toLowerCase()
    const icon = deviceIcons[deviceType] || "💻"

    const message = `💬 Solicitação de Orçamento

👤 Nome: ${form.name}
${form.contact ? `📱 WhatsApp: ${form.contact}` : ""}
${icon} Tipo: ${form.deviceType}
🏷️ Marca: ${form.brand}
📘 Modelo: ${form.model}
⚙️ Problema: ${form.issue}

📨 Aguardo o retorno com o orçamento, por favor! 🙏`

    const text = encodeURIComponent(message)
    const url = `https://wa.me/${phone}?text=${text}`
    // abrir em nova aba para não perder a página
    window.open(url, "_blank")
    setSubmitting(false)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl">Solicitar Orçamento</DialogTitle>
          <DialogDescription className="text-sm">Preencha os dados do aparelho para enviarmos no WhatsApp.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-sm font-medium">Seu nome</Label>
            <Input 
              id="name" 
              value={form.name} 
              onChange={set("name")} 
              required 
              placeholder="Ex.: João Silva"
              className="text-base"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="contact" className="text-sm font-medium">Seu WhatsApp ou telefone <span className="text-muted-foreground font-normal">(opcional)</span></Label>
            <Input 
              id="contact" 
              value={form.contact} 
              onChange={set("contact")} 
              placeholder="Ex.: (85) 9 9999-9999"
              className="text-base"
              type="tel"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            <div className="grid gap-2">
              <Label htmlFor="deviceType" className="text-sm font-medium">Tipo</Label>
              <Input 
                id="deviceType" 
                value={form.deviceType} 
                onChange={set("deviceType")} 
                required 
                placeholder="Celular, Notebook..."
                className="text-base"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="brand" className="text-sm font-medium">Marca</Label>
              <Input 
                id="brand" 
                value={form.brand} 
                onChange={set("brand")} 
                required 
                placeholder="Ex.: Samsung"
                className="text-base"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center gap-1.5">
                <Label htmlFor="model">Modelo</Label>
                <Tooltip delayDuration={300}>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      aria-label="Como encontrar o modelo do aparelho"
                      className="inline-flex h-5 w-5 items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Info className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent 
                    side="top" 
                    className="max-w-[280px] text-xs leading-relaxed p-3 md:max-w-xs md:side-right"
                  >
                    <p className="font-semibold mb-1.5">Como encontrar o modelo:</p>
                    <p className="text-muted-foreground">Tampa traseira/etiqueta do aparelho, caixa ou nota fiscal.</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Input 
                id="model" 
                value={form.model} 
                onChange={set("model")} 
                required 
                placeholder="Ex.: A54"
                className="text-base"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="issue" className="text-sm font-medium">Descreva o problema</Label>
            <Textarea 
              id="issue" 
              value={form.issue} 
              onChange={set("issue")} 
              required 
              placeholder="Ex.: Tela quebrada, não liga, troca de bateria..."
              rows={4}
              className="text-base resize-none"
            />
          </div>

          <DialogFooter className="gap-2 sm:gap-0 flex-col-reverse sm:flex-row">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              className="w-full sm:w-auto"
            >
              Cancelar
            </Button>
            <Button 
              type="submit" 
              disabled={!requiredOk || submitting}
              className="w-full sm:w-auto"
            >
              Enviar pelo WhatsApp
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
