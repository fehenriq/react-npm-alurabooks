# Pacote NPM - TSDX React com Storybook

Esse projeto é um pacote construído do 0 e <a href="https://www.npmjs.com/package/react-alurabooks">publicado no NPM</a> para todos usarem

## 🔨 Funcionalidades do projeto

O projeto possui 6 componentes que foram desenvolvidos com base no design da <a href="https://www.figma.com/file/dkGogcES2G1lwH8hwrF3E6/React%3A-Alura-Books?node-id=0%3A1">AluraBooks no Figma</a>  

>### AbBotao
Possui texto personalizável, tipo[primario, secundario] e onClick

>### AbCard
Um card simples

>### AbTag
Uma tag com texto personalizável

>### AbCampoTexto
Um label com titúlo personalizável, value(placeholder), tipo[texto, email, password, date] e onChange

>### AbGrupoOpcoes
3 cards com titulo, corpo e rodapé onde tem onChange  
É possível determinar o padrão e muda o estilo de acordo com o selecionado

>### AbInputQuantidade
Possui o título quantidade, 2 botões[+ e -] e um contador  
O usuário pode adicionar ou remover itens e o contador é atualizado

## ✔️ Técnicas e tecnologias utilizadas

- `Typescript`
- `React`
- `styled-components`
- `Storybook`
- `NPM`

## 💻 Para usar o pacote em seus projetos:

### Comando
```bash
npm i react-alurabooks
```

```bash
import { ctrl + espaço } from 'react-alurabooks';
```

## 🛠️ Para abrir e rodar o projeto:

É necessário ter instalado no PC:
- `node.js`
- `npm ou yarn`

### 👾 TSDX

É recomendado rodar o TSDX em um terminal:

```bash
npm start # ou yarn start
```

### 📖 Storybook

Rode em outro terminal:

```bash
yarn storybook
```

#### 🖌️ Exemplo para rodar o projeto:

```bash
cd example
npm i # ou yarn (para instalar dependências)
npm start # ou yarn start
```