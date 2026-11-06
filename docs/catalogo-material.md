# Incluir as próximas fotos

Acesso à pasta Drive pendente; usuário adiou a inclusão das novas imagens em 2026-11-05.

## Foto repetida em Em destaque

Trocar a imagem do look `praia` em `src/data/home.ts`, que atualmente usa a mesma campanha da hero. Preservar a hero. Com a foto nova, preparar o recorte das modelos e de cada peça do look, salvar fontes em `assets/originals` e WebP em `public/images`, e atualizar o array `pieces` correspondente.

## Catálogo

`src/data/catalog.ts` concentra as sete peças atuais. Para incluir uma peça nova: `id` único, nome, categoria (Jaquetas/Shorts/Camisetas), cor, caminho do WebP isolado em `image`, foto da campanha em `lookImage` e `view` se a imagem for traseira. Categorias novas exigem também atualizar o filtro e o tipo.

Os cards Spotlight, os filtros e a janela de detalhes usam esses dados. A foto original aparece em “No look”. Não é preciso alterar o layout para incluir mais peças.

Preços, tamanhos, estoque e checkout serão integrados quando a cliente fornecer dados comerciais. Os recortes com regiões reconstruídas por IA precisam da conferência da cliente.
