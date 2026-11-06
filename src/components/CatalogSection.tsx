import { useEffect, useId, useRef, useState } from 'react';
import { catalogProducts, type CatalogProduct } from '../data/catalog';
import SpotlightCard from './SpotlightCard';
import '../styles/catalog.css';

const categories = ['Todas', 'Jaquetas', 'Shorts', 'Camisetas'] as const;

export default function CatalogSection() {
  const [category, setCategory] = useState<typeof categories[number]>('Todas');
  const [selected, setSelected] = useState<CatalogProduct | null>(null);
  const [showLook, setShowLook] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const detailTitleId = useId();
  const filtered = category === 'Todas' ? catalogProducts : catalogProducts.filter(product => product.category === category);

  useEffect(() => {
    const panel = dialog.current;
    if (!selected || !panel) return;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    if (!panel.open) panel.showModal();
    return () => {
      document.documentElement.style.overflow = previousOverflow;
      if (panel.open) panel.close();
    };
  }, [selected]);

  function open(product: CatalogProduct) {
    setShowLook(false);
    setSelected(product);
  }

  return <section className="pitali-catalog" id="catalogo" aria-labelledby={titleId}>
    <div className="catalog-heading"><div><h2 id={titleId}>Conheça as peças</h2><p>Encontre o que acompanha o seu ritmo.</p></div><span className="catalog-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'peça' : 'peças'}</span></div>
    <div className="catalog-filters" role="group" aria-label="Filtrar catálogo por tipo">
      {categories.map(item => <button type="button" key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
    </div>
    <ul className="catalog-grid">
      {filtered.map(product => <li key={product.id}><SpotlightCard>
        <button type="button" className="catalog-card-button" aria-label={`Ver detalhes de ${product.name}`} onClick={() => open(product)}>
          <span className="catalog-image"><img src={product.image} alt={product.name + (product.view ? ', ' + product.view.toLowerCase() : '')} width="1312" height="1199" loading="lazy" decoding="async" /></span>
          <span className="catalog-card-info"><span className="catalog-product-name">{product.name}</span><span className="catalog-product-type">{product.view ?? product.category}</span><span className="catalog-card-action" aria-hidden="true">↗</span></span>
        </button>
      </SpotlightCard></li>)}
    </ul>

    <dialog ref={dialog} className="product-dialog" aria-labelledby={detailTitleId} onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) event.currentTarget.close(); }}>
      {selected && <div className="product-dialog-panel">
        <button type="button" className="product-dialog-close" aria-label="Fechar detalhes da peça" onClick={() => dialog.current?.close()}>×</button>
        <div className="product-dialog-visual"><img src={showLook ? selected.lookImage : selected.image} alt={showLook ? `Look Pitali com ${selected.name.toLowerCase()}` : selected.name} className={showLook ? 'is-look' : ''} width="1312" height="1199" /></div>
        <div className="product-dialog-info"><p className="product-category">{selected.category}</p><h3 id={detailTitleId}>{selected.name}</h3><p className="product-color">{selected.color}{selected.view ? ` · ${selected.view}` : ''}</p>
          <div className="product-view-switch" role="group" aria-label="Visualização da peça"><button type="button" aria-pressed={!showLook} onClick={() => setShowLook(false)}>Peça</button><button type="button" aria-pressed={showLook} onClick={() => setShowLook(true)}>No look</button></div>
          <p className="product-enquiry">Consulte tamanhos e disponibilidade com a Pitali.</p><a className="product-instagram" href="https://www.instagram.com/pitali.oficial/" target="_blank" rel="noopener noreferrer">Fale com a Pitali <span aria-hidden="true">↗</span><span className="catalog-sr-only"> no Instagram, abre em nova aba</span></a>
        </div>
      </div>}
    </dialog>
  </section>;
}
