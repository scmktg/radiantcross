function Cross({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 80 140" fill="none" aria-label="Radiant Cross symbol" role="img">
    <path d="M38 3 43 3 43 43 72 42 78 46 72 50 43 49 41 137 38 49 8 50 2 46 8 42 38 43Z" fill="currentColor"/>
  </svg>;
}
export default function Home() {
  return <main className="coming-soon">
    <header className="brand-header">
      <a href="/" className="brand" aria-label="Radiant Cross home"><Cross/><span>RADIANT CROSS</span></a>
      <span className="header-side">AUSTRALIAN TRAINING &amp; LIFESTYLE</span>
    </header>
    <section className="main-content" aria-labelledby="launch-heading">
      <div className="content-wrap">
        <div className="launch-label"><span className="status-indicator"/> THE FIRST CHAPTER IS COMING</div>
        <h1 id="launch-heading">BUILT BY<br/><em>DISCIPLINE.</em></h1>
        <p className="intro">A new Australian training and lifestyle label.<br/>One philosophy. Show up, every day.</p>
        <div className="signup">
          <h2>BE FIRST TO KNOW.</h2>
          <p>Join the list for updates on our first release.</p>
          <form action="https://formsubmit.co/hello@radiantcross.au" method="POST">
            <input type="hidden" name="_subject" value="Radiant Cross — New email signup"/>
            <input type="hidden" name="_template" value="table"/>
            <input type="hidden" name="_captcha" value="true"/>
            <input type="text" name="_honey" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true"/>
            <label className="visually-hidden" htmlFor="subscriber-email">Email address</label>
            <div className="form-field"><input id="subscriber-email" name="email" type="email" autoComplete="email" placeholder="Your email address" required maxLength={254}/><button type="submit" aria-label="Join the list">JOIN THE LIST <span aria-hidden="true">↗</span></button></div>
          </form>
          <small>By joining, you agree to receive occasional launch updates from Radiant Cross. Unsubscribe anytime.</small>
        </div>
      </div>
      <div className="right-graphic" aria-hidden="true"><Cross/><span>RC / 001</span></div>
    </section>
    <footer className="site-footer"><span>© {new Date().getFullYear()} RADIANT CROSS</span><span>DISCIPLINE. STRENGTH. FAITH.</span><a href="mailto:hello@radiantcross.au">HELLO@RADIANTCROSS.AU</a></footer>
  </main>;
}
