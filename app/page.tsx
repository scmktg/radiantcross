"use client";

import { useEffect, useState } from "react";

const phrases = ["Work Hard.", "Train Hard."];

function Typewriter() {
  const [text, setText] = useState("");
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setReducedMotion(media.matches);
    syncPreference();
    media.addEventListener("change", syncPreference);
    return () => media.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setText("Work Hard. Train Hard.");
      return;
    }
    let timer: ReturnType<typeof setTimeout>;
    let phraseIndex = 0;
    let characterIndex = 0;
    let deleting = false;
    function tick() {
      const phrase = phrases[phraseIndex];
      if (!deleting) {
        characterIndex++;
        setText(phrase.slice(0, characterIndex));
        if (characterIndex === phrase.length) {
          deleting = true;
          timer = setTimeout(tick, 1600);
        } else {
          timer = setTimeout(tick, 105);
        }
      } else {
        characterIndex--;
        setText(phrase.slice(0, characterIndex));
        if (characterIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          timer = setTimeout(tick, 350);
        } else {
          timer = setTimeout(tick, 65);
        }
      }
    }
    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, [reducedMotion]);

  return <h1 className="typing-headline" aria-label="Work Hard. Train Hard."><span aria-hidden="true">{text}</span><span className="typing-cursor" aria-hidden="true" /></h1>;
}

export default function Home() {
  return (
    <main className="landing">
      <div className="hero-photo" role="img" aria-label="Athlete lifting weights in a gym" />
      <div className="hero-shade" />
      <header className="header">
        <a href="/" className="brand" aria-label="Radiant Cross home"><img src="/southern-cross-white.svg" alt="" width="48" height="52" /></a>
      </header>
      <section className="hero-content" aria-label="Radiant Cross">
        <Typewriter />
      </section>
      <footer className="footer"><span>© {new Date().getFullYear()} Radiant Cross</span></footer>
    </main>
  );
}
