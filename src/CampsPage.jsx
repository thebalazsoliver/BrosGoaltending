"use client";

import { Arrow, CardNavigation } from "./App.jsx";

const campFacts = [
  {
    label: "Időpont",
    value: "2027.06.28–07.02.",
    detail: "Hétfőtől péntekig",
  },
  {
    label: "Helyszín",
    value: "Óbudai Jégcsarnok",
    detail: "1037 Budapest, Kubik utca 1.",
  },
  {
    label: "Ár",
    value: "Hamarosan",
    detail: "Az árakat később tesszük közzé",
  },
];

export default function CampsPage() {
  return (
    <main className="camp-page">
      <CardNavigation />

      <section className="camp-hero" id="top">
        <img
          className="camp-hero__image"
          src="/bros-team.webp"
          alt="A Bros's Goaltending kapusai és edzői az Óbudai Jégcsarnokban"
        />
        <div className="camp-hero__shade" />
        <div className="camp-hero__content shell">
          <a className="camp-back-link" href="/">
            <Arrow direction="left" /> Vissza a főoldalra
          </a>
          <div className="camp-hero__panel">
            <p className="eyebrow eyebrow--red">Táboraink · 2027</p>
            <h1>
              Bro&apos;s
              <span>Summer Camp</span>
            </h1>
            <p className="camp-hero__lead">
              Jövőre is együtt dolgozunk, fejlődünk és új élményeket szerzünk.
              A jelentkezés már elindult.
            </p>
            <div className="camp-hero__actions">
              <a className="button button--red" href="/#jelentkezes">
                Jelentkezem
              </a>
              <a className="button button--glass" href="#reszletek">
                Tábor részletei
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="camp-intro section shell" id="reszletek">
        <div className="camp-intro__copy">
          <p className="eyebrow">Bro&apos;s Summer Camp 2027</p>
          <h2>Találkozunk<br />2027 nyarán.</h2>
          <p className="camp-intro__lead">
            Jó hírünk van: jövőre is megrendezzük a Bro&apos;s Summer Campet!
          </p>
          <p>
            A dátumot már most érdemes beírni a naptárba. Öt napon át a tudatos
            kapusfejlesztésé, a közös munkáé és a jégen kívüli élményeké lesz a
            főszerep az Óbudai Jégcsarnokban.
          </p>
          <p>
            Már most nagyon várjuk, hogy jövő nyáron ismét együtt dolgozzunk,
            fejlődjünk és új élményeket szerezzünk.
          </p>
        </div>

        <div className="camp-facts">
          {campFacts.map((fact, index) => (
            <article className={`camp-fact ${fact.label === "Ár" ? "camp-fact--price" : ""}`} key={fact.label}>
              <span>0{index + 1}</span>
              <p>{fact.label}</p>
              <h3>{fact.value}</h3>
              <small>{fact.detail}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="camp-cta section shell">
        <p className="eyebrow">A jelentkezés már elindult</p>
        <h2>Ott leszel<br />a jégen?</h2>
        <p>
          Írd meg nekünk a jelentkezési űrlapon, hogy a 2027-es nyári tábor
          érdekel, és felvesszük veled a kapcsolatot.
        </p>
        <a className="button button--red" href="/#jelentkezes">
          Jelentkezés a táborra
        </a>
      </section>

      <footer className="site-footer">
        <div className="footer-main shell">
          <div className="footer-brand">
            <img src="/bros-logo.webp" alt="Bros's Goaltending logó" />
            <div>
              <strong>BROS&apos;S<br />GOALTENDING</strong>
              <span>Goalie development · Since 2024</span>
            </div>
          </div>
          <div className="footer-column">
            <p>Oldal</p>
            <a href="/">Főoldal</a>
            <a href="/#kepzesek">Képzések</a>
            <a href="/#edzok">Edzők</a>
          </div>
          <div className="footer-column">
            <p>Tábor</p>
            <a href="#reszletek">Részletek</a>
            <a href="/#jelentkezes">Jelentkezés</a>
            <a href="https://www.instagram.com/bro.sgoaltending/" target="_blank" rel="noreferrer">
              Instagram <Arrow />
            </a>
          </div>
        </div>
        <div className="footer-bottom shell">
          <span>© {new Date().getFullYear()} Bros&apos;s Goaltending</span>
          <a href="#top">Vissza az elejére <Arrow direction="up" /></a>
        </div>
      </footer>
    </main>
  );
}
