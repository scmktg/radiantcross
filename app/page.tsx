"use client";

import { useState } from "react";

function NailCross({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 80 140" fill="none" aria-label="Radiant Cross symbol" role="img"><path d="M38 3 43 3 43 43 72 42 78 46 72 50 43 49 41 137 38 49 8 50 2 46 8 42 38 43Z" fill="currentColor"/></svg>;
}
function SouthernCross({ className = "" }: { className?: string }) {
  const star=(x:number,y:number,r:number,points:number,inner=.46)=>{const d=Array.from({length:points*2},(_,i)=>{const a=-Math.PI/2+i*Math.PI/points,rr=i%2?r*inner:r;return `${i===0?"M":"L"}${(x+Math.cos(a)*rr).toFixed(2)} ${(y+Math.sin(a)*rr).toFixed(2)}`}).join(" ")+"Z";return <path key={x+"-"+y} d={d}/>};
  return <svg className={className} viewBox="0 0 120 125" fill="currentColor" role="img" aria-label="Southern Cross stars">{star(60,15,12,7)}{star(22,59,11,7)}{star(95,52,11,7)}{star(61,106,12,7)}{star(70,70,5,5)}</svg>;
}
function Shirt({className=""}:{className?:string}) {
 return <svg className={className} viewBox="0 0 600 710" role="img" aria-label="Washed black oversized Radiant Cross tee with white Southern Cross and nail cross chest details">
  <defs><linearGradient id="shirtFabric" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#242428"/><stop offset=".42" stopColor="#161619"/><stop offset="1" stopColor="#242427"/></linearGradient><linearGradient id="sleeve" x1="0" x2="1"><stop stopColor="#19191b"/><stop offset=".6" stopColor="#28282a"/><stop offset="1" stopColor="#151517"/></linearGradient></defs>
  <path d="M174 73 225 49 Q300 78 375 49 L426 73 526 135 594 300 480 337 455 289 455 661 Q300 681 145 661 L145 289 120 337 6 300 74 135Z" fill="url(#shirtFabric)" stroke="#272729" strokeWidth="2"/>
  <path d="M174 73 74 135 6 300 120 337 145 289 145 164Z" fill="url(#sleeve)" opacity=".48"/><path d="M426 73 526 135 594 300 480 337 455 289 455 164Z" fill="url(#sleeve)" opacity=".42"/>
  <path d="M225 49 Q300 86 375 49 Q353 97 300 101 Q247 97 225 49Z" fill="#0a0a0c" stroke="#303034" strokeWidth="6"/><path d="M231 57 Q300 90 369 57" fill="none" stroke="#363639" strokeWidth="2"/>
  <path d="M145 653 Q300 666 455 653 M14 291 121 325 M486 325 585 291" stroke="#36363a" opacity=".55" strokeWidth="2" fill="none"/>
  <g fill="#f3f2ed" transform="translate(207 178) scale(.43)"><path d="M60 3 64 14 75 17 64 20 60 31 56 20 45 17 56 14Z"/><path d="M22 52 26 63 37 66 26 69 22 80 18 69 7 66 18 63Z"/><path d="M99 47 103 58 114 61 103 64 99 75 95 64 84 61 95 58Z"/><path d="M59 93 63 104 74 107 63 110 59 121 55 110 44 107 55 104Z"/><path d="M72 75 74 81 80 83 74 85 72 91 70 85 64 83 70 81Z"/></g>
  <path d="M385 180 389 180 389 200 404 199 408 202 404 205 389 204 387 249 385 204 371 205 367 202 371 199 385 200Z" fill="#f3f2ed"/>
 </svg>
}
export default function Home(){
 const [menu,setMenu]=useState(false);
 return <main>
  <div className="announcement">AUSTRALIAN TRAINING &amp; LIFESTYLE <span className="announcement-star">✳</span> BUILT BY DISCIPLINE</div>
  <header className="header"><a className="brand" href="#" aria-label="Radiant Cross home"><NailCross/><span>RADIANT CROSS</span></a>
   <nav className={menu?"nav open":"nav"} aria-label="Main navigation"><a href="#collection" onClick={()=>setMenu(false)}>Collection</a><a href="#story" onClick={()=>setMenu(false)}>Our story</a><a href="#details" onClick={()=>setMenu(false)}>Our values</a></nav>
   <a href="#contact" className="header-cta">GET IN TOUCH <span>↗</span></a><button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-label="Toggle menu" aria-expanded={menu}>{menu?"CLOSE":"MENU"} <span>{menu?"×":"+"}</span></button>
  </header>
  <section className="hero" id="top">
   <div className="hero-left"><div className="hero-overline"><span className="dot"/> AUSTRALIAN TRAINING &amp; LIFESTYLE <span className="line"/></div>
    <h1>BUILT BY<br/><em>DISCIPLINE.</em></h1>
    <p>Discipline isn’t something you switch on at the gym. It’s how you train, how you work, and how you live.</p>
    <a href="#collection" className="button-light">MEET THE ORIGINAL TEE <span>↗</span></a>
    <div className="hero-bottom"><span>DISCIPLINE. STRENGTH. FAITH.</span><span>EST. AUSTRALIA — 2026</span></div>
   </div>
   <div className="hero-right"><div className="hero-halo"/><div className="hero-symbol"><NailCross/></div><div className="hero-shirt"><Shirt/></div><span className="hero-photo-caption">THE ORIGINAL TEE / 001</span><div className="hero-side">ONE TEE. ONE PHILOSOPHY.</div></div>
  </section>
  <section className="intro" id="story"><span className="eyebrow">01 / THE IDEA</span><div><h2>SHOW UP.<br/><i>EVERY DAY.</i></h2><p>Discipline goes beyond the gym. It lives in the early mornings, the work nobody sees, the commitments we keep, and the people we show up for. Radiant Cross is an independent Australian training and lifestyle label built around that belief.</p></div><SouthernCross className="intro-stars"/></section>
  <section className="collection" id="collection">
    <div className="section-head"><div><span className="eyebrow">02 / COLLECTION 001</span><h2>ONE TEE.<br/><i>ONE PHILOSOPHY.</i></h2></div><p>Our first piece. Simple by design. Made to represent something bigger than what you wear.</p></div>
    <div className="single-product">
      <div className="single-product-visual"><div className="product-top"><span>RC / 001</span><span>THE ORIGINAL</span></div><Shirt className="single-shirt"/><span className="single-caption">FRONT / BLACK</span></div>
      <div className="single-product-copy"><span className="eyebrow">THE FIRST RELEASE</span><h3>The Original<br/>Tee.</h3><p>Clean. Understated. Intentional. A black oversized tee featuring two small white symbols: the Southern Cross for our Australian roots, and the nail cross for faith.</p>
        <div className="product-feature"><SouthernCross/><div><strong>ROOTED IN AUSTRALIA</strong><span>A quiet nod to where we come from.</span></div></div>
        <div className="product-feature"><NailCross/><div><strong>FAITH, WITHOUT THE NOISE</strong><span>One part of the story. Never the entire story.</span></div></div>
        <div className="product-availability"><span className="availability-dot"/> FIRST RELEASE IN PREPARATION</div>
        <a className="button-dark" href="#contact">FOLLOW THE FIRST RELEASE <span>↗</span></a>
        <small>Concept preview. Final fit, fabric, price and release details to be confirmed.</small>
      </div>
    </div>
  </section>
  <section className="manifesto" id="details"><div className="manifesto-overlay"/><div className="manifesto-content"><span className="eyebrow">03 / WHAT WE BELIEVE</span><NailCross/><h2>DISCIPLINE.<br/>STRENGTH.<br/><em>FAITH.</em></h2><p>Discipline is the foundation. In training. In work. In faith. In family. In how we represent Australia. Different parts of life, the same commitment to showing up.</p></div><SouthernCross className="manifesto-stars"/></section>
  <section className="contact" id="contact"><div><span className="eyebrow">04 / NEXT CHAPTER</span><h2>THE FIRST<br/><i>CHAPTER.</i></h2><p>One tee. A brand built with purpose. The Original Tee is taking shape. For collaborations or enquiries about the first release, reach out and say hello.</p><a className="button-dark" href="mailto:hello@radiantcross.au?subject=Radiant%20Cross%20enquiry">CONTACT THE BRAND <span>↗</span></a><small>Email address will be available once configured.</small></div><div className="contact-art"><NailCross/><span>AUSTRALIAN BY ORIGIN.<br/>BUILT BY DISCIPLINE.</span></div></section>
  <footer className="footer"><div className="footer-top"><a href="#" className="footer-wordmark">RADIANT<br/>CROSS</a><div><a href="#collection">Collection</a><a href="#story">About</a><a href="mailto:hello@radiantcross.au">Contact</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} RADIANT CROSS</span><span>AUSTRALIA</span><a href="#top">BACK TO TOP ↑</a></div></footer>
 </main>
}
