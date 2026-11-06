# Imagens Pitali

Os arquivos originais foram preservados. O site usa WebP.

- pitali-hero-campanha.webp: mestre sem perdas, 1066x1600; pixels comparados ao JPEG original, iguais após decodificar.
- pitali-hero-campanha-hq.webp: ampliação leve de 1,25x, altura2000; interpolação Lanczos, sem reconstrução generativa de rostos, roupas ou logos. Não cria detalhe óptico novo.
- pitali-hero-campanha-640.webp e -960.webp: variantes responsivas qualidade98 para celular. Master/HQ continuam disponíveis para telas maiores.
- pitali-logo.webp: sem perdas. Comparação com canais RGBA equivalentes confirmou os mesmos pixels do PNG original; o WebP elimina apenas o canal alpha totalmente opaco.
- pitali-movimento.webp: cópia WebP sem perdas da foto anterior, preservada como recurso.
- jaqueta-rosa-recorte.webp: fundo transparente; recorte por IA com reconstrução de partes ocultas. Exige conferência da cliente antes de venda.

Dimensões e tamanhos: image-manifest.json. Reproduzir a codificação: node scripts/prepare-images.mjs.

Referência de composição: Runway Fashion Lookbook Carousel de @kedhareswer, com looks em profundidade e recortes laterais. A seção está ativa e configurada em src/data/home.ts. Não há ranking real de vendas ou catálogo publicado.

Atualização05/11: short-rosa, jaqueta-cinza, short-off-white, camiseta-branca, short-laranja e short-vinho usam arquivos -recorte.webp sem perdas e com alpha real. Os sete cards mostram peças isoladas. O vinho é vista traseira conforme a fotografia. Fontes PNG em assets/originals; prompts e limites em pecas-recortes-prompts.md.
