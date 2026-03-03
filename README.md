# Portifólio — Otávio Emanoel

Site de portifólio pessoal desenvolvido com **Next.js 16**, **TypeScript** e **Tailwind CSS v4**, hospedado em [otavio-emanoel-dev.vercel.app](https://otavio-emanoel-dev.vercel.app/).

## Estrutura do Projeto

```
src/
  app/
    components/
      Hero.tsx          # Seção inicial com foto e CTA
      About.tsx         # Seção sobre mim com skills e timeline
      Projects.tsx      # Seção de projetos com cards responsivos
      Contact.tsx       # Formulário de contato com validação
      Navbar.tsx        # Navegação com toggle de tema e download de CV
      Footer.tsx        # Rodapé com links para redes sociais
      ThemeProvider.tsx # Provedor de contexto para modo escuro/claro
    api/
      contact/
        route.ts        # API route para o formulário de contato
    globals.css
    layout.tsx
    page.tsx
  data/
    projects.ts         # Dados dos projetos (mock)
  hooks/
    useTheme.ts         # Hook para acessar o contexto de tema
  __tests__/
    Hero.test.tsx
    Projects.test.tsx
public/
  images/               # Imagens dos projetos (adicionar manualmente)
  me.webp               # Sua foto (substituir pela foto real)
  cv.pdf                # Seu currículo (adicionar o arquivo)
```

## Rodando Localmente

```bash
# Clone o repositório
git clone https://github.com/Otavio-Emanoel/portifolio-pw3.git
cd portifolio-pw3

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Scripts Disponíveis

| Script | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run start` | Inicia o servidor de produção |
| `npm run lint` | Executa o ESLint |
| `npm test` | Executa os testes com Jest |
| `npm run test:watch` | Executa os testes em modo watch |

## Personalização

### Substituindo a Foto

Substitua o arquivo `public/me.webp` pela sua foto. A imagem deve ser quadrada (recomendado 400×400px ou maior).

### Adicionando Imagens dos Projetos

Adicione as imagens dos seus projetos na pasta `public/images/`. Veja o arquivo `public/images/README.md` para os nomes corretos.

### Atualizando os Projetos

Edite o arquivo `src/data/projects.ts` com os dados dos seus projetos reais:

```ts
export const projects: Project[] = [
  {
    id: 1,
    title: "Nome do Projeto",
    description: "Descrição curta do projeto.",
    image: "/images/project-nome.png",
    tags: ["React", "Node.js"],
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/seu-usuario/projeto",
  },
  // ...
];
```

### Adicionando o Currículo

Adicione o arquivo `public/cv.pdf` para habilitar o botão de download de currículo na navbar.

### Configurando o Formulário de Contato

A API route `/api/contact` aceita `POST` com `{ name, email, message }` e retorna `{ ok: true }`.

Para enviar e-mails reais, descomente e configure um dos métodos no arquivo `src/app/api/contact/route.ts`:

#### Opção A — nodemailer (SMTP)

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

Crie `.env.local`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu@email.com
SMTP_PASS=sua-senha-de-app
CONTACT_EMAIL=seu@email.com
```

#### Opção B — Resend

```bash
npm install resend
```

Crie `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=seu@email.com
```

> **Atenção:** Nunca commite o arquivo `.env.local` no repositório.

#### Opção C — formsubmit.co (sem backend)

Substitua a chamada `fetch` no `Contact.tsx` por um `<form action="https://formsubmit.co/seu@email.com" method="POST">`. Não é necessário configurar a API route neste caso.

## Modo Escuro / Claro

O toggle de tema fica na navbar. A preferência é salva no `localStorage` e respeita a preferência do sistema operacional na primeira visita.

## Deploy na Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FOtavio-Emanoel%2Fportifolio-pw3)

O deploy é automático a cada push na branch `main`.

## Acessibilidade

- Todos os componentes usam `aria-labelledby`, `aria-label` e `alt` apropriados.
- Botões e links têm texto acessível.
- Contraste de cores adequado para modo claro e escuro.
- Scroll suave (`scroll-behavior: smooth`) habilitado.

