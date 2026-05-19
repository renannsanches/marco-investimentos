# Marco Investimentos — CLAUDE.md

## Stack

- **Framework:** React 18.3.1 + React Router 6 (SPA)
- **Build:** Vite 5.4.19 + SWC
- **Language:** TypeScript 5.8.3 (lenient — `noImplicitAny: false`, `strictNullChecks: false`)
- **Package Manager:** npm (package-lock.json presente)
- **Styling:** Tailwind CSS 3.4.17 + shadcn/ui (Radix UI, 40+ componentes)
- **Forms:** React Hook Form + Zod
- **Data Fetching:** TanStack React Query 5
- **Backend/DB:** Supabase (Auth + Storage + PostgreSQL)
- **Charts:** Recharts
- **Icons:** Lucide React
- **Deployment:** Turboclou (LiteSpeed) — upload manual da `dist/` via FTP para `public_html/`

## Comandos

```bash
npm run dev      # Dev server → http://localhost:5173
npm run build    # Build de produção → dist/
npm run lint     # ESLint
```

## Deploy

Site hospedado no **Turboclou** (LiteSpeed), não no Vercel.

Fluxo de deploy:
1. `npm run build`
2. Upload do conteúdo de `dist/` para `public_html/` via FTP
3. `.htaccess` está em `public/` → vai para `dist/` automaticamente no build

O `.htaccess` usa `mod_rewrite` para SPA routing (React Router funcionar no servidor):
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## Variáveis de Ambiente

Arquivo `.env.local` na raiz (não commitar):
```
VITE_SUPABASE_URL=https://vgtfqtrmeftyoaegheiu.supabase.co
VITE_SUPABASE_ANON_KEY=<anon-key>
```

Variáveis VITE_ são baked no bundle em build time — funcionam em qualquer hospedagem estática.

## Supabase

Projeto: `vgtfqtrmeftyoaegheiu.supabase.co`

### Tabela `assessores`
| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | uuid PK | auto-gerado |
| `name` | text | Nome completo |
| `role` | text (nullable) | Cargo (ex: "CEO") |
| `image_url` | text | URL pública do Supabase Storage |
| `order_index` | integer | Ordem de exibição |
| `created_at` | timestamptz | Auto |

RLS: leitura pública (anon), escrita só autenticado.

### Storage
Bucket: `assessores-images` (público)
URL pattern: `https://vgtfqtrmeftyoaegheiu.supabase.co/storage/v1/object/public/assessores-images/<filename>`

### Auth
Usuário admin único criado manualmente no Supabase Dashboard.
Login em: `marcoinvestimentos.com.br/admin`

## Rotas

| Path | Página |
|------|--------|
| `/` | Homepage (Index) |
| `/sobre/a-marco` | Sobre a Marco |
| `/sobre/nossos-escritorios` | Nossos Escritórios |
| `/sobre/carreiras` | Carreiras |
| `/solucoes/investimentos` | Investimentos |
| `/solucoes/corporativas` | Corporativas |
| `/assessores` | Assessores (dados do Supabase) |
| `/contato` | Contato |
| `/lgpd/politica-de-privacidade` | Política de Privacidade |
| `/lgpd/politica-de-cookies` | Política de Cookies |
| `/admin` | Admin Panel (protegido por Supabase Auth) |
| `*` | 404 NotFound |

## Estrutura

```
src/
├── pages/
│   ├── Admin.tsx              # Auth gate → AdminLogin ou AssessoresManager
│   ├── Assessores.tsx         # Busca dados do Supabase (React Query)
│   └── ...                    # Demais páginas
├── components/
│   ├── admin/
│   │   ├── AdminLogin.tsx     # Card de login (email/senha)
│   │   ├── AssessoresManager.tsx  # CRUD + reorder (↑↓) dos assessores
│   │   └── AssessorForm.tsx   # Dialog add/edit com upload de foto
│   ├── marco/                 # Componentes de marca (Header, Hero, Footer, etc.)
│   └── ui/                    # shadcn/ui base
├── hooks/
│   └── useScrollAnimation.ts  # Aceita deps[] — necessário passar [assessores.length]
│                              # em páginas com dados async para re-observar elementos
├── lib/
│   ├── supabase.ts            # Client singleton + interface Assessor
│   ├── rdstation.ts           # RD Station API client
│   └── utils.ts               # cn() e utils gerais
├── App.tsx                    # Router + providers + rota /admin
└── index.css                  # Tailwind + animações customizadas
public/
├── .htaccess                  # SPA routing para LiteSpeed (mod_rewrite)
├── images/assessores/         # Fotos locais (legado — não mais usadas em prod)
└── ...
```

## Admin Panel

Acesso: `/admin` (sem link público no site)

Funcionalidades:
- Login com email/senha (Supabase Auth)
- Listar assessores ordenados por `order_index`
- Adicionar assessor (nome, cargo opcional, foto)
- Editar assessor (qualquer campo + troca de foto)
- Excluir assessor (com confirmação + remove foto do Storage)
- Reordenar com botões ↑↓ (swap de `order_index` em 2 updates paralelos)

## React Query Keys

| Key | Usado em |
|-----|----------|
| `['assessores']` | Página pública `/assessores` |
| `['admin-assessores']` | Admin panel |

Separados para evitar que mutações do admin invalidem cache público.

## Cores da Marca (Tailwind)

| Token | Uso |
|-------|-----|
| `gold` | Accent primário |
| `dark-grey` | Fundos escuros |
| `black-deep` | Preto profundo |
| `white-soft` | Off-white |
| `palladian` | Bege claro |

## Tipografia

- **Headings:** Rubik — classe `font-heading`
- **Body:** Barlow — classe `font-body`

## Padrões

### Animações scroll
Hook `useScrollAnimation(deps?)` + atributo `data-animate` nos elementos.
**Importante:** em componentes com dados async, passar `[data.length]` como dep para re-observar após fetch.

```tsx
const { data: assessores = [] } = useQuery(...)
useScrollAnimation([assessores.length])  // depois do useQuery
```

### Lead Capture (RD Station)
- Dev: proxy via vite.config
- Prod: Edge Function (configurar se migrar para Vercel)
- Env: `RD_TOKEN`
- Componentes: `Contactmodal.tsx`, `InvestModal.tsx`, `Contato.tsx`

## Notas TypeScript

Config leniente por design — não introduzir mudanças strict-mode sem discussão.

## Idioma

Site em português (Brasil). Todo texto visível ao usuário em pt-BR.
