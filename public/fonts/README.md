# Fonte Blanka

## Instalação

Para usar a fonte Blanka neste projeto, você precisa:

1. Baixar a fonte do link: https://befonts.com/blanka-font.html
2. Extrair os arquivos da fonte
3. Converter os arquivos para formato `.woff2` (se necessário)
4. Copiar os arquivos para esta pasta com os seguintes nomes:
   - `Blanka-Regular.woff2`
   - `Blanka-Bold.woff2` (se disponível)

## Conversão para WOFF2

Se a fonte vier em formato `.ttf` ou `.otf`, você pode converter usando:
- Online: https://cloudconvert.com/ttf-to-woff2
- Ou use o FontSquirrel Webfont Generator: https://www.fontsquirrel.com/tools/webfont-generator

## Uso

A fonte já está configurada no projeto como `font-blanka` e pode ser usada adicionando a classe CSS:

```jsx
<h1 className="font-blanka">Tecno Mania</h1>
```

Ou via CSS:

```css
.meu-elemento {
  font-family: var(--font-blanka);
}
```
