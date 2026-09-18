# Meu Horário na Web

Site e telas de produto da plataforma brasileira de agendamento online para qualquer negócio com hora marcada — barbearias, clínicas, quadras, pets, professores, consultores.

> **Promessa:** sua agenda cheia, sem você precisar atender o telefone.

## Rodando

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção (todas as rotas são estáticas)
npm run start
npm run lint
```

Stack: Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · lucide-react · next-themes.

## Mapa do site

| Rota | O que é |
| --- | --- |
| `/` | Página inicial completa (hero animado, seletor “Para quem é”, como funciona, recursos, demo interativa, prova social, antes/depois, preços, FAQ, CTA, rodapé) |
| `/para-barbearias`, `/para-clinicas`, `/para-quadras-e-campos`, `/para-consultores`, `/para-pets`, `/para-professores` | Páginas de destino por segmento (SEO) |
| `/barbearia-do-ze`, `/clinica-vida`, `/arena-vila-nova`, `/estudio-traco`, `/pet-feliz`, `/carla-ingles` | Página pública de agendamento de negócios de exemplo (máx. 4 toques) |
| `/painel` (+ `/agenda`, `/clientes`, `/servicos`, `/horarios`, `/configuracoes`) | Painel do profissional com dados fictícios |
| `/cadastro` | Cadastro guiado: escolhe o tipo de negócio e já vem pré-configurado |
| `/entrar` | Login (demonstração: qualquer e-mail abre o painel) |
| `/sobre`, `/contato`, `/termos`, `/privacidade` | Páginas de apoio (textos-modelo) |

Também: `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, `opengraph-image`, `icon.svg`.

## Onde mexer

- **Conteúdo por segmento** (vocabulário, serviços, negócios de exemplo, SEO, dores/ganhos): `src/lib/segments.ts`.
- **Depoimentos e números** (marcados como exemplo): `testimonials` e `stats` em `src/lib/segments.ts`.
- **Planos e preços** (valores de exemplo): `src/components/marketing/pricing.tsx`.
- **Perguntas frequentes**: `src/lib/faqs.ts`.
- **Dados da empresa** (domínio, WhatsApp, e-mail, redes): `src/lib/site.ts`.
- **Tokens de design** (cores claro/escuro, sombras, animações): `src/app/globals.css`.
- **Fluxo de agendamento** (usado na demo e na página pública): `src/components/booking/booking-flow.tsx`.
- **Dados fictícios do painel**: `src/lib/mock.ts` (determinísticos: mesma data = mesma agenda).

## Decisões de design

- Paleta: fundo off-white quente, **índigo-violeta** como cor principal e **âmbar** só em CTAs. Modo escuro completo via classe `dark` (next-themes).
- Tipografia: **Bricolage Grotesque** (títulos) + **Onest** (texto), self-hosted por `next/font`.
- Motivo gráfico: o tempo — grades de calendário, relógio, blocos de horário.
- Todas as animações respeitam `prefers-reduced-motion`; a entrada do hero é CSS puro (não depende de JS para o LCP).
- Contraste AA nos tokens de texto; navegação por teclado nas abas, acordeões e fluxos.

## Antes de publicar

- Trocar depoimentos, números e logos de exemplo por reais (estão sinalizados na interface).
- Revisar valores dos planos, CNPJ, WhatsApp e e-mail em `src/lib/site.ts`.
- Revisar Termos e Política de privacidade com um advogado.
- Conectar o cadastro, login e painel a um backend real (hoje tudo é demonstração em memória).
