# Pitali
Atualizado: 2026-11-06. Projeto em C:/Users/Usuario/Projects/pitali. Versionamento inicial preparado para github.com/JoaoLucasVital/pitali, privado.

## Direção atual
Ecommerce beachwear/fitwear mobile first, off-white/dourado, logo original. Astro 7, React 19, Tailwind 4, GSAP e Glisse. Neulis Alt Medium na interface, Georgia nos títulos. Catálogo visual primeiro; dados comerciais, carrinho, Supabase e Stripe ficam para as próximas etapas. Armazenamento de imagens a confirmar.

## Implementado
- Hero Osmo Parallax em camadas: fundo de praia, modelos e assinatura Pitali · Beachwear & Fitwear. Sem título grande Sol e movimento ou zoom inicial. Movimento das modelos limitado para manter a borda inferior do recorte fora da cena; parallax preservado.
- Splash a cada reload usando renderer MIT glass-icon-reveal, logo original e fundo off-white. Saída automática com swipe e Escape; texto inferior e botão Pular removidos. Wordmark transparente evita retângulos brancos no mobile.
- Em destaque inspirado no Runway: dois looks e sete peças isoladas. Navegação SOMENTE pelas setas, com animação CSS de profundidade; sem avanço por scroll ou swipe.
- Catálogo Spotlight com sete peças, filtros por tipo, modal de detalhes e alternância peça/look. Sem preços, estoque ou ranking fictícios.
- Rodapé Motion Footer e botões Glisse nas cores da marca. Rota /teste-horizon rejeitada e mantida isolada.

## Arquivos principais
src/components/{ParallaxHero,LookbookSection,SplashScreen,CatalogSection,SpotlightCard,MotionFooter}.tsx; src/data/{home,catalog}.ts; src/styles; src/lib/glassReveal.ts e vendor com licença. Imagens WebP em public/images, originais em assets/originals, prompts/manifesto em docs/assets e conversão em scripts/prepare-images.mjs.

## Verificação e limites
Última validação anterior: Astro check em 18 arquivos sem erros/avisos e build de duas rotas aprovado. QA no navegador em mobile/desktop: filtros, modal, setas, parallax e ausência de overflow. iPhone físico ainda pendente. Recortes com reconstrução por IA precisam de conferência da cliente; licença de webfont precisa ser confirmada para publicação definitiva.

## Pendências e próximo passo
Solicitar à cliente nome, preço, cores, tamanhos, estoque por variação, tecido, descrição curta e fotos originais de cada peça. Confirmar se conjuntos são vendidos juntos ou separados. Novas fotos e troca do look que repete a hero foram adiadas por falta de acesso ao Drive; não substituir por foto improvisada. Orientações em docs/catalogo-material.md. Depois dos dados, completar catálogo comercial e fluxo de compra.

## Ambiente
Prévia temporária atual: https://mardi-bowling-erik-dis.trycloudflare.com, depende do computador e dos processos ativos. Build em dist servido na porta 4322. Executável de túnel e temporários não são versionados. Falha de inicialização do sandbox Windows documentada em docs/sandbox-diagnostic.md; proteções não foram alteradas.

## Versionamento desta etapa
Primeiro envio do estado existente, sem reconstruir histórico antigo. Código/ativos e documentação separados em commits. Nenhuma alteração de direção visual nesta etapa.

Verificação em 06/11 para o primeiro envio: npm run check em 18 arquivos sem erros, avisos ou hints; npm run build aprovado para duas rotas.
