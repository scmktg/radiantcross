"use client";
import { useMemo, useState } from "react";
import type { Product, Variant } from "../../lib/shopify";
type Colour = "Black" | "Sand";
const colours: Colour[] = ["Black", "Sand"];
const sizes = ["XS","S","M","L","XL","2XL"];
const money = (amount:string, code:string) => new Intl.NumberFormat("en-AU",{style:"currency",currency:code}).format(Number(amount));
function matches(p:Product,c:Colour){return (p.title+" "+p.handle).toLowerCase().includes(c.toLowerCase())||p.variants.nodes.some(v=>v.selectedOptions.some(o=>/^(color|colour)$/i.test(o.name)&&o.value.toLowerCase()===c.toLowerCase()));}
function Picture({product,colour,extra=""}:{product?:Product;colour:Colour;extra?:string}){
 const photo=product?.featuredImage||product?.images.nodes[0];
 return <div className={`picture picture-${colour.toLowerCase()} ${extra}`}>{photo?<img src={photo.url} alt={photo.altText||`Southern Cross Tee in ${colour}`}/>:<span>{colour}</span>}</div>;
}
export default function Storefront({products,configured}:{products:Product[];configured:boolean}){
 const [colour,setColour]=useState<Colour>("Black"),[size,setSize]=useState("M"),[quantity,setQuantity]=useState(1),[busy,setBusy]=useState(false),[error,setError]=useState(""),[menu,setMenu]=useState(false);
 const pair=useMemo(()=>({Black:products.find(p=>matches(p,"Black"))||(products.length===1?products[0]:undefined),Sand:products.find(p=>matches(p,"Sand"))||(products.length===1?products[0]:undefined)}),[products]);
 const product=pair[colour];const variants=product?.variants.nodes||[];
 const hasColourOption=product?.options.some(o=>/^(color|colour)$/i.test(o.name));
 const variant:Variant|undefined=variants.find(v=>{
  const optSize=v.selectedOptions.find(o=>/^size$/i.test(o.name)),optColour=v.selectedOptions.find(o=>/^(color|colour)$/i.test(o.name));
  return (!optSize||optSize.value.toLowerCase()===size.toLowerCase())&&(!hasColourOption||optColour?.value.toLowerCase()===colour.toLowerCase())&&(Boolean(optSize)||variants.length===1);
 });
 const priced=variant?.price||variants.find(v=>!hasColourOption||v.selectedOptions.some(o=>/^(color|colour)$/i.test(o.name)&&o.value.toLowerCase()===colour.toLowerCase()))?.price;
 const canBuy=configured&&Boolean(variant?.availableForSale);
 function pick(c:Colour){setColour(c);setError("");}
 async function buy(){if(!canBuy||!variant||busy)return;setBusy(true);setError("");try{const res=await fetch("/api/cart",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({variantId:variant.id,quantity})});const result=await res.json();if(!res.ok||!result.checkoutUrl)throw new Error(result.error||"Checkout unavailable");window.location.assign(result.checkoutUrl);}catch(e){setError(e instanceof Error?e.message:"Checkout unavailable");setBusy(false);}}
 return <>
  <header className="header"><a className="logo" href="#">RADIANT CROSS</a><nav className={menu?"nav open":"nav"} aria-label="Main navigation"><a href="#shop" onClick={()=>setMenu(false)}>Shop</a><a href="#about" onClick={()=>setMenu(false)}>About</a><a href="mailto:hello@radiantcross.au">Contact</a></nav><a className="header-link" href="#shop">Shop collection</a><button className="menu-button" aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?"Close":"Menu"}</button></header>
  <main>
   <section className="hero"><div className="hero-text"><span className="kicker">COLLECTION 001</span><h1>The everyday<br/>essential.</h1><p>An oversized tee, made simple. Two timeless colours and an understated Australian signature.</p><a className="dark-button hero-button" href="#shop">Shop the collection</a></div><Picture product={pair.Sand} colour="Sand" extra="hero-photo"/></section>
   <section className="collection wrap" id="shop"><div className="section-heading"><div><span className="kicker">RADIANT CROSS / 001</span><h2>Shop the collection</h2></div><p>One tee. Two colours.</p></div><div className="cards">{colours.map(c=>{const p=pair[c],price=p?.variants.nodes[0]?.price;return <a href="#product" onClick={()=>pick(c)} className="product-card" key={c}><Picture product={p} colour={c}/><div className="card-meta"><div><strong>Southern Cross Oversized Tee</strong><span>{c}</span></div><span>{price?money(price.amount,price.currencyCode):"Coming soon"}</span></div></a>})}</div></section>
   <section className="product wrap" id="product"><div className="gallery"><Picture product={product} colour={colour}/>{product?.images.nodes.slice(1,3).map((image,i)=><div className="gallery-extra" key={image.url+i}><img src={image.url} alt={image.altText||"Additional tee view"}/></div>)}</div><div className="details"><span className="kicker">COLLECTION 001</span><h2>Southern Cross<br/>Oversized Tee</h2><p className="price">{priced?money(priced.amount,priced.currencyCode):"Coming soon"}</p><p className="description">A relaxed oversized silhouette with a subtle Southern Cross chest print and a clean, unprinted back. Made for every day.</p>
    <div className="field"><div className="field-title"><strong>Colour</strong><span>{colour}</span></div><div className="colours">{colours.map(c=><button key={c} onClick={()=>pick(c)} aria-pressed={colour===c} className={colour===c?"colour active":"colour"}><span className={`swatch ${c.toLowerCase()}`}/>{c}</button>)}</div></div>
    <div className="field"><div className="field-title"><strong>Size</strong><span>Oversized fit</span></div><div className="sizes">{sizes.map(s=><button key={s} aria-pressed={size===s} className={size===s?"size active":"size"} onClick={()=>{setSize(s);setError("");}}>{s}</button>)}</div></div>
    <div className="purchase"><div className="quantity"><button onClick={()=>setQuantity(Math.max(1,quantity-1))} aria-label="Decrease quantity">−</button><output>{quantity}</output><button onClick={()=>setQuantity(Math.min(20,quantity+1))} aria-label="Increase quantity">+</button></div><button className="dark-button checkout" disabled={!canBuy||busy} onClick={buy}>{busy?"Opening checkout…":!configured?"Coming soon":!variant?"Unavailable":!variant.availableForSale?"Sold out":"Buy now"}</button></div>
    {error&&<p className="error" role="alert">{error}</p>}{!configured&&<p className="note">Shopify products and checkout will appear when the store is connected.</p>}
    <div className="specs"><p>Relaxed oversized fit</p><p>Minimal Southern Cross chest detail</p><p>Clean, unprinted back</p></div>
   </div></section>
   <section className="about" id="about"><span className="kicker">ABOUT RADIANT CROSS</span><h2>Less, but better.</h2><p>Australian training and lifestyle essentials. Thoughtful details, a simple approach, and the discipline to keep showing up.</p></section>
  </main><footer className="footer"><div><strong>RADIANT CROSS</strong><p>Australian training and lifestyle.</p></div><nav><a href="#shop">Shop</a><a href="#about">About</a><a href="mailto:hello@radiantcross.au">Contact</a></nav><span>© {new Date().getFullYear()} Radiant Cross Australia</span></footer>
 </>;
}
