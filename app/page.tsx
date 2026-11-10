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
const products=[{id:"01",title:"The Original Tee",detail:"Washed Black / White",status:"First collection"},{id:"02",title:"The Essential Tee",detail:"Bone / Black",status:"In development"},{id:"03",title:"Everyday Uniform",detail:"An ongoing collection",status:"Coming soon"}];
export default function Home(){
 const [menu,setMenu]=useState(false);
 return <main>
  <div className="announcement">AUSTRALIAN STREETWEAR <span className="announcement-star">✳</span> THE FIRST CHAPTER IS COMING</div>
  <header className="header"><a className="brand" href="#" aria-label="Radiant Cross home"><NailCross/><span>RADIANT CROSS</span></a>
   <nav className={menu?"nav open":"nav"} aria-label="Main navigation"><a href="#collection" onClick={()=>setMenu(false)}>Collection</a><a href="#story" onClick={()=>setMenu(false)}>Our story</a><a href="#details" onClick={()=>setMenu(false)}>The details</a></nav>
   <a href="#contact" className="header-cta">GET IN TOUCH <span>↗</span></a><button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-label="Toggle menu" aria-expanded={menu}>{menu?"CLOSE":"MENU"} <span>{menu?"×":"+"}</span></button>
  </header>
  <section className="hero" id="top">
   <div className="hero-left"><div className="hero-overline"><span className="dot"/> INDEPENDENT AUSTRALIAN LABEL <span className="line"/></div>
    <h1>NOT MADE<br/>TO <em>FOLLOW.</em></h1>
    <p>Understated streetwear with something to stand for. A little darker in character. Australian at heart.</p>
    <a href="#collection" className="button-light">DISCOVER THE FIRST COLLECTION <span>↗</span></a>
    <div className="hero-bottom"><span>FAITH. STRENGTH. DISCIPLINE.</span><span>EST. AUSTRALIA — 2026</span></div>
   </div>
   <div className="hero-right"><div className="hero-halo"/><div className="hero-symbol"><NailCross/></div><div className="hero-shirt"><Shirt/></div><span className="hero-photo-caption">THE ORIGINAL TEE / 001</span><div className="hero-side">A STUDY IN SIMPLICITY — RADIANT CROSS</div></div>
  </section>
  <section className="intro" id="story"><span className="eyebrow">01 / THE IDEA</span><div><h2>LESS NOISE.<br/><i>MORE MEANING.</i></h2><p>Radiant Cross was born from a simple idea: everyday clothing should feel like you. Built around restrained details, considered silhouettes and symbols that mean something. No excess. No compromises on identity.</p></div><SouthernCross className="intro-stars"/></section>
  <section className="collection" id="collection"><div className="section-head"><div><span className="eyebrow">02 / COLLECTION 001</span><h2>THE FIRST<br/><i>CHAPTER.</i></h2></div><p>A small beginning, done with intent. Designed to be worn on repeat.</p></div>
   <div className="product-grid">
    <article className="product product-dark"><div className="product-top"><span>RC / 001</span><span>THE ORIGINAL</span></div><Shirt className="product-shirt"/><div className="product-info"><div><h3>The Original Tee</h3><span>Washed black. Signature chest symbols.</span></div><span>COMING SOON</span></div></article>
    <article className="product product-cream"><div className="product-top"><span>RC / 002</span><span>IN DEVELOPMENT</span></div><div className="cream-shirt"><Shirt/></div><div className="product-info"><div><h3>The Essential Tee</h3><span>An exploration in lighter tones.</span></div><span>COMING SOON</span></div></article>
    <article className="product product-type"><div className="product-top"><span>RC / 003</span><span>THE UNIFORM</span></div><div className="type-art"><NailCross/><p>FAITH.<br/>STRENGTH.<br/>DISCIPLINE.</p><SouthernCross/></div><div className="product-info"><div><h3>More to come</h3><span>Considered pieces for everyday life.</span></div><span>STAY CLOSE</span></div></article>
   </div><p className="collection-note">PRODUCTS SHOWN ARE CONCEPT PREVIEWS. AVAILABILITY AND PRICING TO BE ANNOUNCED.</p>
  </section>
  <section className="manifesto" id="details"><div className="manifesto-overlay"/><div className="manifesto-content"><span className="eyebrow">03 / WHAT WE BELIEVE</span><NailCross/><h2>FAITH.<br/>STRENGTH.<br/><em>DISCIPLINE.</em></h2><p>Three words. One mentality. A quiet reminder to keep moving with purpose.</p></div><SouthernCross className="manifesto-stars"/></section>
  <section className="contact" id="contact"><div><span className="eyebrow">04 / NEXT CHAPTER</span><h2>BE PART OF<br/><i>THE BEGINNING.</i></h2><p>Collection 001 is taking shape. For collaborations, wholesale enquiries, or to follow the journey, reach out and say hello.</p><a className="button-dark" href="mailto:hello@radiantcross.au?subject=Radiant%20Cross%20enquiry">CONTACT THE BRAND <span>↗</span></a><small>Email address will be available once configured.</small></div><div className="contact-art"><NailCross/><span>AUSTRALIAN BY ORIGIN.<br/>INDEPENDENT BY NATURE.</span></div></section>
  <footer className="footer"><div className="footer-top"><a href="#" className="footer-wordmark">RADIANT<br/>CROSS<span>®</span></a><div><a href="#collection">Collection</a><a href="#story">About</a><a href="mailto:hello@radiantcross.au">Contact</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} RADIANT CROSS</span><span>AUSTRALIA</span><a href="#top">BACK TO TOP ↑</a></div></footer>
 </main>
}
