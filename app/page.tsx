"use client";

import { useState } from "react";

function Cross({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 80 140" fill="none" aria-label="Radiant Cross symbol" role="img"><path d="M38 3 43 3 43 43 72 42 78 46 72 50 43 49 41 137 38 49 8 50 2 46 8 42 38 43Z" fill="currentColor"/></svg>;
}
function Stars({ className = "" }: { className?: string }) {
  const pts=[[60,16,11],[23,58,10],[95,50,10],[61,106,11],[70,72,5]];
  return <svg className={className} viewBox="0 0 120 125" role="img" aria-label="Southern Cross" fill="currentColor">{pts.map(([x,y,r],i)=><path key={i} d={Array.from({length:10},(_,n)=>{const a=-Math.PI/2+n*Math.PI/5,rr=n%2?r*.45:r;return (n?"L":"M")+(x+Math.cos(a)*rr)+","+(y+Math.sin(a)*rr)}).join(" ")+"Z"}/>)}</svg>;
}
function Tee({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 600 710" role="img" aria-label="Black boxy Radiant Cross tee with Southern Cross stars and cross embroidery">
    <defs><linearGradient id="fabric" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#242426"/><stop offset=".46" stopColor="#101012"/><stop offset="1" stopColor="#262629"/></linearGradient></defs>
    <path d="M174 73 225 49 Q300 78 375 49 L426 73 526 135 594 300 480 337 455 289 455 661 Q300 681 145 661 L145 289 120 337 6 300 74 135Z" fill="url(#fabric)" stroke="#29292a" strokeWidth="2"/>
    <path d="M225 49 Q300 86 375 49 Q353 97 300 101 Q247 97 225 49Z" fill="#080809" stroke="#343436" strokeWidth="6"/><path d="M145 653 Q300 666 455 653 M14 291 121 325 M486 325 585 291" stroke="#3b3b3b" opacity=".55" strokeWidth="2" fill="none"/>
    <g fill="#f2f2ed" transform="translate(205 176) scale(.38)"><path d="M60 3 64 14 75 17 64 20 60 31 56 20 45 17 56 14Z"/><path d="M22 52 26 63 37 66 26 69 22 80 18 69 7 66 18 63Z"/><path d="M99 47 103 58 114 61 103 64 99 75 95 64 84 61 95 58Z"/><path d="M59 93 63 104 74 107 63 110 59 121 55 110 44 107 55 104Z"/><path d="M72 75 74 81 80 83 74 85 72 91 70 85 64 83 70 81Z"/></g>
    <path d="M385 180 389 180 389 200 404 199 408 202 404 205 389 204 387 249 385 204 371 205 367 202 371 199 385 200Z" fill="#f3f3f0"/>
  </svg>;
}
export default function Home() {
  const [menuOpen,setMenuOpen]=useState(false);
  return <main id="top">
    <div className="topline">AUSTRALIAN TRAINING &amp; LIFESTYLE <span>✳</span> BUILT BY DISCIPLINE</div>
    <header className="site-header">
      <a href="#top" className="logo" aria-label="Radiant Cross home"><Cross/><span>RADIANT CROSS</span></a>
      <nav className={menuOpen?"nav nav-open":"nav"} aria-label="Primary navigation"><a href="#collection" onClick={()=>setMenuOpen(false)}>THE COLLECTION</a><a href="#ethos" onClick={()=>setMenuOpen(false)}>OUR ETHOS</a><a href="#about" onClick={()=>setMenuOpen(false)}>OUR STORY</a></nav>
      <a href="#collection" className="header-link">EXPLORE THE TEE <span>↗</span></a>
      <button className="mobile-toggle" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?"CLOSE −":"MENU +"}</button>
    </header>

    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-photography">
        <div className="photo-grain"/>
        <div className="hero-photo-caption"><span>RC — 001</span><span>EVERYDAY DISCIPLINE / AUSTRALIA</span></div>
        <div className="hero-photo-mark"><Cross/></div>
      </div>
      <div className="hero-message">
        <div className="hero-number">01 / THE FIRST CHAPTER</div>
        <h1 id="hero-title">BUILT BY<br/><em>DISCIPLINE.</em></h1>
        <div className="hero-message-bottom"><p>For the work nobody sees. The early starts, the extra reps, and the choice to show up again tomorrow.</p><a className="pill-button" href="#collection">DISCOVER THE ORIGINAL TEE <span>↗</span></a></div>
      </div>
    </section>

    <div className="ticker" aria-label="Brand values"><span>DISCIPLINE FIRST</span><b>✳</b><span>MADE FOR THE EVERYDAY</span><b>✳</b><span>ROOTED IN AUSTRALIA</span><b>✳</b><span>DISCIPLINE FIRST</span><b>✳</b><span>MADE FOR THE EVERYDAY</span></div>

    <section id="collection" className="collection">
      <div className="section-heading"><div><span className="kicker">THE COLLECTION / 001</span><h2>THE ORIGINAL <i>TEE.</i></h2></div><span className="section-index">ONE PIECE. NO SHORTCUTS.</span></div>
      <div className="product-layout">
        <div className="product-image"><span className="product-corner">01 / 01</span><Tee className="product-tee"/><span className="product-image-caption">BLACK / FRONT VIEW</span></div>
        <div className="product-info">
          <span className="kicker">INTRODUCING / RC-001</span>
          <h3>YOUR EVERYDAY<br/>UNIFORM.</h3>
          <p>An oversized black tee with a clean boxy silhouette. Subtle Southern Cross stars and a small cross sit across the chest. Made to carry a simple reminder: discipline travels with you.</p>
          <div className="product-attributes"><div><strong>01</strong><span>OVERSIZED, RELAXED FIT</span></div><div><strong>02</strong><span>TIMELESS BLACK</span></div><div><strong>03</strong><span>MINIMAL SYMBOL DETAIL</span></div></div>
          <div className="product-status"><span className="status-dot"/> FIRST RELEASE IN DEVELOPMENT</div>
          <a href="#contact" className="pill-button dark">ENQUIRE ABOUT THE RELEASE <span>↗</span></a>
          <small>Concept garment shown. Final specifications, pricing and availability are still to be confirmed.</small>
        </div>
      </div>
    </section>

    <section id="ethos" className="ethos"><span className="kicker">OUR ETHOS / 002</span><h2>IT&apos;S MORE<br/>THAN <i>TRAINING.</i></h2><div className="ethos-bottom"><p>Discipline is a way of living. In the gym, at work, with family and in faith. It&apos;s not about being perfect. It&apos;s about showing up and putting in the work, every day.</p><div className="ethos-icons"><Stars/><Cross/></div></div></section>

    <section id="about" className="story"><div className="story-image"><div className="story-image-caption">BUILT IN AUSTRALIA / WORN EVERYWHERE</div></div><div className="story-content"><span className="kicker">THE STORY / 003</span><h2>ROOTED HERE.<br/><i>BUILT FOR MORE.</i></h2><p>Radiant Cross is an independent Australian training and lifestyle label. A love for gym culture, a respect for hard work, and the belief that the things we do every day shape who we become.</p><p>Our Southern Cross speaks to home. Our cross represents faith. Neither needs to shout. Discipline is what ties it all together.</p><a href="#contact" className="text-link">GET IN TOUCH <span>↗</span></a></div></section>

    <section id="contact" className="closing"><Cross/><span className="kicker">THE FIRST CHAPTER IS JUST BEGINNING</span><h2>SHOW UP.<br/><i>EVERY DAY.</i></h2><p>For collaborations and first-release enquiries.</p><a href="mailto:hello@radiantcross.au?subject=Radiant%20Cross%20enquiry" className="pill-button">CONTACT RADIANT CROSS <span>↗</span></a><small>Email contact is pending setup.</small></section>
    <footer className="footer"><div className="footer-main"><a href="#top" className="footer-logo"><Cross/> RADIANT CROSS</a><div className="footer-links"><a href="#collection">COLLECTION</a><a href="#ethos">ETHOS</a><a href="#about">STORY</a><a href="#contact">CONTACT</a></div></div><div className="footer-meta"><span>© {new Date().getFullYear()} RADIANT CROSS</span><span>AUSTRALIAN TRAINING &amp; LIFESTYLE</span><a href="#top">BACK TO TOP ↑</a></div></footer>
  </main>;
}
