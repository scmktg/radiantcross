"use client";

import { useMemo, useState } from "react";
import type { Product, Variant } from "../../lib/shopify";

type PreviewColour = "Black" | "Sand";
function Stars({ light = false }: { light?: boolean }) {
  return <svg aria-hidden="true" viewBox="0 0 80 85" className="shirt-stars" fill={light ? "#ffffff" : "#b9a389"}>
    <path d="M32 4 35.6 13.5 45.7 13.9 37.7 20.3 40.7 30 32 24.3 23.3 30 26.3 20.3 18.3 13.9 28.4 13.5Z"/>
    <path d="M12 34 15.2 42.5 24.3 42.8 17.1 48.7 19.8 57.4 12 52.3 4.2 57.4 6.9 48.7 -.3 42.8 8.8 42.5Z"/>
    <path d="M59 30 62.2 38.5 71.3 38.8 64.1 44.7 66.8 53.4 59 48.3 51.2 53.4 53.9 44.7 46.7 38.8 55.8 38.5Z"/>
    <path d="M36 43 37.7 47.5 42.5 47.7 38.7 50.7 40.1 55.3 36 52.6 31.9 55.3 33.3 50.7 29.5 47.7 34.3 47.5Z"/>
    <path d="M27 65 30.2 73.5 39.3 73.8 32.1 79.7 34.8 88.4 27 83.3 19.2 88.4 21.9 79.7 14.7 73.8 23.8 73.5Z"/>
  </svg>;
}
function Tee({ colour, large = false }: { colour: PreviewColour; large?: boolean }) {
  return <div className={`tee-stage tee-${colour.toLowerCase()} ${large ? "tee-large" : ""}`} aria-label={`${colour} oversized tee with a small Southern Cross logo`} role="img">
    <svg className="tee-outline" viewBox="0 0 470 490" aria-hidden="true">
      <path d="M151 33 192 16 Q235 39 278 16 L319 33 Q391 60 458 131 L403 208 348 181 351 458 119 458 122 181 67 208 12 131 Q79 60 151 33Z" fill={colour === "Black" ? "#1c1d1e" : "#eae4da"} stroke={colour === "Black" ? "#292a2b" : "#ddd5c9"} strokeWidth="1.7"/>
      <path d="M192 16 Q235 96 278 16" fill="none" stroke={colour === "Black" ? "#363638" : "#d5cec2"} strokeWidth="13"/>
      <path d="M192 16 Q235 82 278 16" fill="none" stroke={colour === "Black" ? "#151617" : "#eee8e0"} strokeWidth="7"/>
      <path d="M119 448 H351 M25 146 78 188 M445 146 392 188" fill="none" stroke={colour === "Black" ? "#333436" : "#d1c9bc"} strokeWidth="1.2"/>
    </svg><div className="tee-mark"><Stars light={colour === "Black"} /></div>
  </div>;
}
function Chevron() { return <span aria-hidden="true">↗</span>; }

export default function Storefront({ products, configured }: { products: Product[]; configured: boolean }) {
  const [activeColour, setActiveColour] = useState<PreviewColour>("Black");
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [pending, setPending] = useState(false);
  const [notice, setNotice] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(undefined);
  const matchingProduct = useMemo(() => products.find(p => (p.title + " " + p.handle).toLowerCase().includes(activeColour.toLowerCase())) || products[activeColour === "Black" ? 0 : 1] || products[0], [products, activeColour]);
  const product = selectedProduct || matchingProduct;
  const variants = product?.variants.nodes || [];
  const selectedVariant: Variant | undefined = variants.find(v => v.selectedOptions.some(o => o.name.toLowerCase() === "size" && o.value.toLowerCase() === size.toLowerCase()) && (!v.selectedOptions.some(o => o.name.toLowerCase() === "color" || o.name.toLowerCase() === "colour") || v.selectedOptions.some(o => (o.name.toLowerCase() === "color" || o.name.toLowerCase() === "colour") && o.value.toLowerCase() === activeColour.toLowerCase()))) || variants.find(v => v.title.toLowerCase().includes(size.toLowerCase()) && v.title.toLowerCase().includes(activeColour.toLowerCase())) || variants.find(v => v.selectedOptions.some(o => o.value.toLowerCase() === size.toLowerCase())) || (variants.length === 1 ? variants[0] : undefined);
  const price = selectedVariant?.price || variants[0]?.price;
  const productImage = product?.featuredImage?.url;

  async function checkout() {
    if (!selectedVariant?.availableForSale || pending) return;
    setPending(true); setNotice("");
    try {
      const res = await fetch("/api/cart", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ variantId: selectedVariant.id, quantity }) });
      const data = await res.json();
      if (!res.ok || !data.checkoutUrl) throw new Error(data.error || "Couldn't open checkout.");
      window.location.assign(data.checkoutUrl);
    } catch (error) { setNotice(error instanceof Error ? error.message : "Couldn't open checkout."); setPending(false); }
  }

  function pickColour(colour: PreviewColour) { setActiveColour(colour); setSelectedProduct(undefined); setNotice(""); setSize("M"); }
  return <>
    <div className="announcement">AUSTRALIAN AT HEART. BUILT FOR EVERY DAY.</div>
    <header className="site-header">
      <a href="#" className="brand" aria-label="Radiant Cross home"><img src="/southern-cross-black.svg" alt="" width="28" height="30" /><span>RADIANT CROSS<span className="brand-dot">.</span></span></a>
      <nav className={menuOpen ? "navigation is-open" : "navigation"} aria-label="Main navigation">
        <a href="#collection" onClick={() => setMenuOpen(false)}>SHOP ALL</a>
        <a href="#story" onClick={() => setMenuOpen(false)}>OUR STORY</a>
      </nav>
      <div className="header-end"><span className="header-aus">EST. AUSTRALIA</span><a className="header-shop" href="#collection">EXPLORE COLLECTION <Chevron /></a><button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? "CLOSE" : "MENU"}</button></div>
    </header>
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy"><span className="eyebrow"><span className="status-dot" /> COLLECTION 001 — THE BEGINNING</span><h1 id="hero-title">MADE FOR<br/><span>THE EVERYDAY.</span></h1><p>Rooted in Australia. Built for those who show up, put in the work, and do it all again tomorrow.</p><a href="#collection" className="button button-dark">EXPLORE THE COLLECTION <Chevron /></a><div className="hero-index">01 / 02 <span>THE ORIGINAL TEE</span></div></div>
        <div className="hero-art" aria-label="Radiant Cross Black and Sand oversized tees"><div className="hero-arc" /><div className="hero-tee hero-back"><Tee colour="Sand" large /></div><div className="hero-tee hero-front"><Tee colour="Black" large /></div><div className="hero-art-caption">NO SHORTCUTS. JUST THE WORK. <span>↘</span></div></div>
      </section>
      <section className="values-strip" aria-label="Brand values"><span>DESIGNED TO MOVE</span><span className="separator">✳</span><span>MADE TO LAST</span><span className="separator">✳</span><span>PROUDLY AUSTRALIAN</span><span className="separator">✳</span><span>BUILT BY DISCIPLINE</span></section>
      <section className="collection section-pad" id="collection" aria-labelledby="collection-title"><div className="section-top"><div><span className="eyebrow">THE FIRST DROP / 001</span><h2 id="collection-title">The essentials<span className="punctuation">.</span></h2></div><p>One signature silhouette. Two timeless colours.<br/>Nothing more than you need.</p></div>
        <div className="product-grid">
          {(["Black","Sand"] as PreviewColour[]).map((colour, i) => { const p = products.find(pr => (pr.title + " " + pr.handle).toLowerCase().includes(colour.toLowerCase())) || products[i]; const photo = p?.featuredImage?.url; return <a href="#product" onClick={() => {pickColour(colour);setSelectedProduct(p)}} className="product-tile" key={colour}><div className={`product-image product-${colour.toLowerCase()}`}>{photo ? <img src={photo} alt={p?.featuredImage?.altText || `${colour} Southern Cross tee`} /> : <Tee colour={colour} />}{!configured && <span className="product-corner">COMING SOON</span>}<span className="quick-view">DISCOVER TEE <Chevron /></span></div><div className="product-meta"><div><h3>THE SOUTHERN CROSS TEE</h3><p>{colour.toUpperCase()} / OVERSIZED FIT</p></div><span>{p?.variants.nodes[0] ? new Intl.NumberFormat("en-AU",{style:"currency",currency:p.variants.nodes[0].price.currencyCode}).format(Number(p.variants.nodes[0].price.amount)) : "DROP 001"}</span></div></a> })}
        </div>
      </section>
      <section className="manifesto" id="story"><div className="manifesto-star"><img src="/southern-cross-white.svg" alt="" /></div><div className="manifesto-copy"><span className="eyebrow">A LITTLE DIFFERENT BY DESIGN</span><h2>NO NOISE.<br/>NO EXCUSES.<br/><em>JUST SHOW UP.</em></h2><p>For early starts, late finishes and everything in between. Radiant Cross is an everyday uniform for the pursuit of better.</p><span className="manifesto-signoff">BORN IN AUSTRALIA. WORN EVERYWHERE.</span></div></section>
      <section className="detail section-pad" id="product"><div className="detail-visual">{productImage ? <img src={productImage} alt={product?.featuredImage?.altText || "Southern Cross tee"} /> : <Tee colour={activeColour} large />}<span className="detail-label">THE ORIGINAL / COLLECTION 001</span></div><div className="detail-copy"><span className="eyebrow">RADIANT CROSS / 001</span><h2>The Southern<br/>Cross Tee<span className="punctuation">.</span></h2><p className="detail-description">An everyday essential with an unmistakably Australian signature. A clean oversized silhouette, a minimal Southern Cross chest mark, and nothing unnecessary.</p><div className="detail-price">{price ? new Intl.NumberFormat("en-AU",{style:"currency",currency:price.currencyCode}).format(Number(price.amount)) : "PRICE TO BE ANNOUNCED"} <span>{price ? "AUD" : "COLLECTION 001"}</span></div>
        <div className="control-block"><div className="control-label">COLOUR <strong>{activeColour.toUpperCase()}</strong></div><div className="colour-options"><button onClick={() => pickColour("Black")} className={activeColour === "Black" ? "colour-option selected" : "colour-option"} aria-label="Black" aria-pressed={activeColour === "Black"}><span className="swatch black-swatch"/></button><button onClick={() => pickColour("Sand")} className={activeColour === "Sand" ? "colour-option selected" : "colour-option"} aria-label="Sand" aria-pressed={activeColour === "Sand"}><span className="swatch sand-swatch"/></button></div></div>
        <div className="control-block"><div className="control-label">SIZE <span>RELAXED OVERSIZED FIT</span></div><div className="size-options">{["XS","S","M","L","XL","2XL"].map(s => <button key={s} onClick={() => {setSize(s);setNotice("")}} className={size===s ? "size-option selected" : "size-option"} aria-pressed={size===s}>{s}</button>)}</div></div>
        <div className="purchase-actions"><div className="quantity-control"><button onClick={() => setQuantity(Math.max(1,quantity-1))} aria-label="Decrease quantity">−</button><output>{quantity}</output><button onClick={() => setQuantity(Math.min(20,quantity+1))} aria-label="Increase quantity">+</button></div><button className="button button-dark buy-button" onClick={checkout} disabled={!configured || !selectedVariant?.availableForSale || pending}>{pending ? "OPENING CHECKOUT…" : !configured ? "COMING SOON" : !selectedVariant ? "SELECT A SIZE" : !selectedVariant.availableForSale ? "SOLD OUT" : "BUY NOW"} <Chevron /></button></div>
        {notice && <p className="form-error" role="alert">{notice}</p>}
        {!configured && <p className="connection-note">Storefront preview. Shopify checkout will activate once the collection and Storefront API credentials are connected.</p>}
        <div className="feature-list"><div><span>01</span> EVERYDAY OVERSIZED SILHOUETTE</div><div><span>02</span> SIGNATURE SOUTHERN CROSS CHEST MARK</div><div><span>03</span> CLEAN, UNPRINTED BACK</div></div>
      </div></section>
      <section className="closing"><img src="/southern-cross-black.svg" alt="" width="56" height="56" /><p>BUILT BY DISCIPLINE.</p><h2>Wear it your way<span className="punctuation">.</span></h2><a className="text-link" href="#collection">BACK TO THE COLLECTION <Chevron /></a></section>
    </main>
    <footer className="footer"><div className="footer-left"><span className="footer-brand">RADIANT CROSS.</span><p>AUSTRALIAN TRAINING & LIFESTYLE.</p></div><div className="footer-links"><a href="mailto:hello@radiantcross.au">CONTACT</a><a href="#story">ABOUT</a><a href="#collection">SHOP</a></div><span className="footer-copyright">© {new Date().getFullYear()} RADIANT CROSS AUSTRALIA</span></footer>
  </>;
}
