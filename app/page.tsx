import Image from "next/image";

export default function Home() {
  return (
    <main className="page">
      <div className="center">
        <Image className="cross" src="/radiant-cross-logo.png" alt="Radiant Cross" width={240} height={240} priority />
        <p className="coming-soon">COMING SOON</p>
        <form className="signup" action="https://formsubmit.co/hello@radiantcross.au" method="POST">
          <input type="hidden" name="_subject" value="Radiant Cross — New email signup" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <label className="visually-hidden" htmlFor="signup-email">Email address</label>
          <input id="signup-email" name="email" type="email" placeholder="Email address" autoComplete="email" maxLength={254} required />
          <button type="submit" aria-label="Join the mailing list">JOIN <span aria-hidden="true">↗</span></button>
        </form>
        <p className="fine-print">Join the list for launch updates.</p>
      </div>
    </main>
  );
}
