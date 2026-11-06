# Pitali — home, materiais e abertura

Solicitação explícita do usuário: manter hero Cinematic, trocar fotografia pelo arquivo 52ce332e-37ea-4eae-87fb-5b9d586a2e67.jpg do Drive; continuar home com linguagem e-commerce, sem iniciar catálogo.

## Implementação
- [ ] Trocar imagem e ajustar object-position em mobile/desktop preservando rostos. Ativo baixado: public/images/pitali-hero-campanha.jpg.
- [ ] Adaptar Motion Footer (@jahed): revelação ao scroll, nome PITALI grande, offwhite/dourado, navegação verdadeira. Sem contatos, políticas, benefícios ou promoções inventados.
- [ ] Splash: logo real com reveal de vidro inspirado no componente selecionado, breve pausa e swipe-up. Show once/session, Pular, escape/reduced-motion, falha de JS/WebGL nunca bloqueia site. Liberar foco e scroll e destruir render loop ao terminar.
- [ ] Instalar biblioteca Glisse real, verificar API/SSR/licença e aplicar aos CTAs principais com contraste adequado, foco de teclado e fallback de transparência.
- [ ] Spotlight Card reservado ao futuro catálogo: gold leve nas bordas com ponteiro desktop, sem tingir roupas/fotos; estado mobile independente de hover. Não implementar catálogo nesta etapa.
- [ ] Check/build e QA browser mobile/desktop: nova foto, footer acessível, splash termina/pula, recarga não repete na mesma sessão, links continuam utilizáveis.

Referências: 21st.dev/@jahed/components/motion-footer, 21st.dev/@shepovalovdenis/components/liquid-glass-logo-reveal, github.com/0kzh/glisse; shader base público github.com/zanwei/glass-icon-reveal (MIT, preservar licença se utilizado).
