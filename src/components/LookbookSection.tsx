import { useId, useState } from 'react';
import { Button } from 'glisse';
import '../styles/lookbook.css';
type Crop = { left: number; right: number; top: number; bottom: number };
export type LookbookLook = { id: string; name: string; category: string; image: string; fallbackImage: string; alt: string; pieces: readonly { image?: string; name: string; alt: string; crop?: Crop }[] };
function ModelImage({ look }: { look: LookbookLook }) {
 const [fallback, setFallback] = useState(false);
 return <img className="runway-model-image" src={fallback ? look.fallbackImage : look.image} alt={look.alt} width={1024} height={1536} loading="lazy" decoding="async" draggable={false} onError={() => { if (!fallback) setFallback(true); }} />;
}
export default function LookbookSection({ title = 'Em destaque', looks }: { title?: string; looks: readonly LookbookLook[] }) {
 const [active, setActive] = useState(0);
 const titleId = useId();
 const count = looks.length;
 if (!count) return null;
 const current = looks[active % count];
 const select = (index: number) => setActive(Math.max(0, Math.min(count - 1, index)));
 return <section className="pitali-lookbook" id="looks" aria-labelledby={titleId}><div className="runway-viewport">
  <div className="lookbook-topline"><span>Seleção Pitali</span><span>Beachwear &amp; fitwear</span></div>
  <div className="runway-layout"><div className="runway-main">
   <div className="lookbook-editorial"><p className="lookbook-eyebrow">Sol e movimento</p><h2 id={titleId}>{title}</h2><p>Peças para acompanhar<br/>todos os seus momentos.</p></div>
   <div className="lookbook-stage" role="group" aria-roledescription="carrossel" aria-label="Looks Pitali">
    {looks.map((look,index)=><div key={look.id} className="runway-model" data-position={index-active} aria-hidden={index!==active}><ModelImage look={look}/></div>)}
   </div>
   <div className="runway-bottom"><div><span className="runway-number">Look {String(active+1).padStart(2,'0')}</span><h3>{current.name}</h3><a href="https://www.instagram.com/pitali.oficial/" target="_blank" rel="noopener noreferrer">Conheça as peças <span aria-hidden="true">↗</span><span className="lookbook-sr-only"> no Instagram, abre em nova aba</span></a></div><div className="lookbook-arrows"><Button variant="glass" className="lookbook-arrow" aria-label="Look anterior" disabled={active===0} onClick={()=>select(active-1)}>←</Button><Button variant="glass" className="lookbook-arrow" aria-label="Próximo look" disabled={active===count-1} onClick={()=>select(active+1)}>→</Button></div></div>
  </div><aside className="lookbook-rail" aria-label={'Peças do look '+(active+1)} key={current.id}><h3>Neste look <span>{current.pieces.length} peças</span></h3><div className="runway-pieces">
   {current.pieces.map(piece=><figure className="runway-piece" key={piece.name}><div className="runway-piece-image">{piece.crop?<img src={current.image} alt={piece.alt} loading="lazy" width={1024} height={1536} style={{width:100/(piece.crop.right-piece.crop.left)+'%',height:100/(piece.crop.bottom-piece.crop.top)+'%',left:-piece.crop.left/(piece.crop.right-piece.crop.left)*100+'%',top:-piece.crop.top/(piece.crop.bottom-piece.crop.top)*100+'%'}}/>:<img className="isolated-piece" src={piece.image} alt={piece.alt} loading="lazy" width={1312} height={1199}/>}</div><figcaption><span>{piece.name}</span><span className="runway-piece-type">{piece.crop?'Detalhe no look':'Pitali fitwear'}</span></figcaption></figure>)}
  </div></aside></div><p className="runway-instruction">Use as setas para explorar os looks</p><p className="lookbook-sr-only" role="status" aria-live="polite" aria-atomic="true">Look {active+1} de {count}: {current.name}.</p>
 </div></section>;
}
