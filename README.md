# PITALI

Home mobile first de beachwear e fitwear, off-white/dourado, Astro/React/Tailwind, GSAP e Glisse.

## Desenvolvimento

npm install
npm run dev

npm run check valida TypeScript e Astro. npm run build gera o site estático em dist/.

## Estrutura atual

- src/components/ParallaxHero.tsx: hero em camadas de praia, modelos e título; sem zoom de entrada, com movimento reduzido.
- src/components/LookbookSection.tsx: seleção Em destaque em profundidade, navegação somente pelas setas, sete peças isoladas entre dois looks.
- src/components/SplashScreen.tsx: logo original em vidro a cada reload; Escape e saída automática com swipe, sem botão Pular.
- src/components/MotionFooter.tsx: rodapé e navegação.
- src/data/home.ts: curadoria manual e referências dos ativos.
- public/images: WebP usados no site e fotografias originais preservadas. assets/originals: fontes dos recortes preparados com IA. docs/assets: manifesto e prompts.
- public/fonts: Neulis Alt Medium enviada pelo usuário; títulos usam Georgia.

Os recortes e o fundo em camadas incluem reconstrução de regiões ocultas por IA; cliente deve conferir detalhes antes da publicação comercial. Catálogo visual ativo com sete peças, Spotlight Card, filtros e detalhes ampliados. Preços, estoque, Stripe e Supabase continuam pendentes. Inclusão de fotos futuras: docs/catalogo-material.md.

Direção e continuidade: PROJECT_CONTEXT.md. A rota /teste-horizon foi rejeitada pelo usuário e permanece isolada.

O título grande Sol e movimento foi retirado da hero; permanece a assinatura Pitali · Beachwear & Fitwear. Novas fotos do Drive foram adiadas pelo usuário até liberar acesso.
