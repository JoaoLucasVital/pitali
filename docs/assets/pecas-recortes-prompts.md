# Recortes das peças em destaque — 2026-11-05

Preparados com imagegen integrado, a pedido do usuário, para substituir os detalhes com corpo pelas peças isoladas. Originais de campanha preservados. Regiões escondidas pelas modelos foram reconstruídas; cliente deve confirmar cor, costuras, logos e modelagem antes de uso comercial definitivo. O short vinho usa vista traseira, conforme a foto fornecida.

Todos os PNG finais: assets/originals/<chave>-recorte.png. Todos os WebP finais: public/images/<chave>-recorte.webp. Conversão sem perdas com alpha real; script scripts/prepare-images.mjs; dimensões e bytes no image-manifest.json.

## Prompt comum exato

Use case: background-extraction / product cutout. Edit the exact garment from the supplied PITALI campaign reference into a single standalone e-commerce ghost-mannequin product image, front view, centered, complete garment, generous 10% transparent margin. Remove the person, body, skin, hair, jewelry, other clothes and scenery entirely. Preserve the target garment's actual color, cut, fabric, stitching, waistband and any visible PITALI mark faithfully; do not redesign, add features, pockets or logos. Reconstruct only areas occluded by the body as conservatively as possible. Natural soft photographic lighting, believable fabric volume, no mannequin visible, no hanger, no ground plane, no cast shadow outside the garment. True transparent alpha background, not a checkerboard painted on an opaque background. Exactly ONE piece, no collage, no text outside the garment.

## Alvos e instruções adicionais exatas

### short-rosa

Referência: public/images/pitali-hero-campanha.jpg

TARGET: ONLY the blush pink high-waisted fitted biker shorts worn by the woman on the LEFT. Broad smooth high waistband, upper-thigh length, flat seam lines and small tonal PITALI mark near the top waistband if present. Keep muted pale blush pink, not the fuchsia jacket. No jacket, underwear, hands, legs or body.

### jaqueta-cinza

Referência: public/images/pitali-hero-campanha.jpg

TARGET: ONLY the semi-sheer charcoal/taupe gray cropped windbreaker worn by the woman on the RIGHT. Stand collar, front gray zipper, long raglan sleeves, elastic cuffs and elastic cropped hem, small PITALI chest mark. Show empty garment, no body or white shorts visible inside/through it. Preserve the original gray fabric and semi-sheer character. Arms gently angled down like a standard ghost-mannequin product jacket.

### short-off-white

Referência: public/images/pitali-hero-campanha.jpg

TARGET: ONLY the off-white/ivory high-waisted fitted shorts worn by the woman on the RIGHT. Broad smooth waistband with small gray PITALI mark at front center, fitted short upper-thigh legs and subtle hem stitching. Maintain warm ivory/off-white rather than bright gray. Remove gray jacket, legs, hands and all other elements.

### camiseta-branca

Referência: public/images/pitali-movimento.jpg

TARGET: ONLY the fitted white short-sleeve crew-neck T-shirt worn by the red-haired woman on the LEFT, seen from the FRONT. Rounded neckline, slim fitted torso, short close-fitting raglan sleeves, curved hem, small pale gray PITALI centered chest mark. Preserve the white stretch fabric and actual design. No orange shorts, hair, body or jewelry. Single front-view shirt.

### short-laranja

Referência: public/images/pitali-movimento.jpg

TARGET: ONLY the vivid burnt-orange high-waisted fitted biker shorts worn by the woman on the LEFT. Smooth wide high waistband, fitted short upper-thigh legs, visible flat seam/hem stitching as reference. Preserve warm orange without making it red or neon, no new logo. No white shirt, hands, legs, body or jewelry.

### short-vinho

Referência: public/images/pitali-movimento.jpg

TARGET: ONLY the deep burgundy/wine high-waisted fitted shorts worn by the woman on the RIGHT. Reference shows the BACK with a small pale PITALI mark centered at waistband. Present a single BACK-view ghost-mannequin product cutout preserving that mark placement and actual seam construction; do NOT invent a front view. Deep wine/chocolate burgundy color, fitted upper-thigh legs, wide waistband. No white T-shirt, hands, legs or body.
