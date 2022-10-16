# Desing-system
Este é um mini projeto de design-system construido em um curso oferecido pela Rocketseat, onde foi criado uma interface de uma tela de logig no figma e posteriormente criado os componentes no React, documentado utilizando o Storybook e por fim contruido a tela com os componentes desenvolvidos

## Tecnologias utilizadas:

## Vite
```bash
npm create vite@latest
## define o nome do projeto
cd [projeto]
npm i
```

## tailwindcss, postcss, autoprefix


```bash
#instalados como dependencia de desenvolvimento
npm install -D tailwindcss postcss autoprefixer vite

npx tailwindcss init -p
```

## Storybook

O objetivo é ter uma documentação isolada de todos os componentes utilizados nas telas, com suas variações

```bash
npx sb init --builder @storybook/builder-vite --use-npm
npm run storybook ## Inicia o storybook
```

## CLSX

Permite criar variações de classes usando o tailwind, permitindo aplicar variações de classes de uma maneira condicional.

```bash
npm install --save clsx
```

## Radix UI

Traz diversos componentes não estilizados, que são muito uteis, ex: modal, checkbox, …

**Slot →** permite escolher qual tag de texto será utilizada(`<span>`, `<p>`, `<h1>`, …). Repassa todas as propriendades, para o primeiro componente passado como parâmetro:

```bash
npm install @radix-ui/react-slot
```

**Checkbox:**

```bash
npm install @radix-ui/react-checkbox
```

## Phosphor Icons
```bash
npm i phosphor-react
```

## Storybook deployer

```bash
npm i @storybook/storybook-deployer --save-dev
```

```json
{
  "scripts": {
    "deploy-storybook": "storybook-to-ghpages"
  }
}
```

Cria a pasta com os arquivos estáticos:

```bash
npm run build-storybook
```

## URL pública

[Webpack App](https://natancavasin.github.io/design-system/)

## Acessibilidade dos componentes

[Accessibility Addon | Storybook: Frontend workshop for UI development](https://storybook.js.org/addons/@storybook/addon-a11y/)

```bash
npm install @storybook/addon-a11y
```

## Uteis
[Converte SVG em um componente React](https://www.notion.so/Do-figma-ao-react-9e8016c16a9341558a82fd3d011f47ab#134e244d1dc04a7ba84e9317fd089909)
