# 📸 Como Adicionar as Imagens da Loja

## Estrutura Criada

✅ **Logo Redonda com Efeito** - Logo abaixo do header com informações da empresa
✅ **Carrossel de Imagens** - 3 slides para mostrar a loja

## Onde Colocar as Imagens

Coloque suas imagens na pasta `/public/` com os seguintes nomes:

### 1. Logo (se quiser atualizar)
```
/public/logo-tecnomania.png
```

### 2. Imagens do Carrossel
```
/public/loja-fachada.jpg      - Foto da fachada/entrada da loja
/public/loja-interior.jpg     - Foto da área de atendimento
/public/loja-oficina.jpg      - Foto da oficina/área técnica
```

## Como Ativar as Imagens Reais

Quando você adicionar as imagens na pasta `/public/`, edite o arquivo:
**`app/page.tsx`**

### Procure por estas linhas (linha ~140):

```tsx
<div className="aspect-video bg-gradient-to-br from-blue-100 to-gray-100 flex items-center justify-center">
  <div className="text-center p-8">
    <Smartphone className="h-24 w-24 text-blue-900 mx-auto mb-4" />
    <h3 className="text-2xl font-bold text-gray-800 mb-2">Fachada da Loja</h3>
    ...
  </div>
</div>
```

### Substitua por:

```tsx
<div className="aspect-video overflow-hidden">
  <img 
    src="/loja-fachada.jpg" 
    alt="Fachada da Tecno Mania" 
    className="w-full h-full object-cover"
  />
</div>
```

## Exemplo Completo de um Slide com Imagem

```tsx
<CarouselItem>
  <div className="p-4">
    <Card className="border-0 shadow-2xl overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img 
          src="/loja-fachada.jpg" 
          alt="Fachada da Tecno Mania" 
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Fachada da Loja</h3>
        <p className="text-gray-600">Nossa localização no coração da cidade</p>
      </CardContent>
    </Card>
  </div>
</CarouselItem>
```

## Recursos Implementados

### Logo Redondo com Efeito
- ✨ Efeito de brilho animado ao passar o mouse
- 🎨 Gradiente azul pulsante
- 📍 Informações da empresa ao lado (CNPJ, nome, badge)
- 📱 Responsivo para mobile e desktop

### Carrossel de Imagens
- ⬅️➡️ Navegação com setas
- 📱 Responsivo e touch-friendly
- 🎯 3 slides preparados para suas fotos
- 📊 Estatísticas abaixo do carrossel

## Dicas para as Fotos

1. **Formato**: JPG ou PNG
2. **Tamanho recomendado**: 1920x1080px (Full HD)
3. **Proporção**: 16:9 (formato widescreen)
4. **Qualidade**: Boa iluminação e foco nítido
5. **Conteúdo sugerido**:
   - Fachada: Entrada da loja, placa, vitrine
   - Interior: Balcão de atendimento, produtos expostos
   - Oficina: Bancada técnica, ferramentas, equipamentos

## Resultado Visual

A página agora tem:
1. **Header** (topo fixo)
2. **Logo + Info Empresa** (nova seção com logo redondo e CNPJ)
3. **Hero Section** (título e botões de ação)
4. **Carrossel de Imagens** (substituiu a seção "Sobre")
5. **Estatísticas** (500+, 98%, 10+, 6 meses)
6. **Serviços** (grade de serviços)
7. **CTA Final** (call to action)
8. **Footer**

---

💡 **Dica**: Quando adicionar as imagens, limpe o cache do navegador (Ctrl+Shift+R) para ver as mudanças!
