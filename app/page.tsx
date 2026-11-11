export default function Home() {
  return (
    <main className="landing">
      <div className="hero-photo" role="img" aria-label="Athlete lifting weights in a gym" />
      <div className="hero-shade" />
      <header className="header">
        <a href="/" className="brand" aria-label="Radiant Cross home">RADIANT CROSS</a>
      </header>
      <section className="hero-content" aria-labelledby="headline">
        <h1 id="headline">Work Hard.<br />Train Hard.</h1>
      </section>
      <footer className="footer"><span>RADIANT CROSS AUSTRALIA</span></footer>
    </main>
  );
}
