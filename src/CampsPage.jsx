"use client";

import { Arrow, CardNavigation } from "./App.jsx";

const campHighlights = [
  "5 napos kapustábor",
  "Tudatos kapusfejlesztés",
  "Közös munka",
  "Élmények a jégen kívül",
];

const campDays = [
  ["Hétfő", "Június 28."],
  ["Kedd", "Június 29."],
  ["Szerda", "Június 30."],
  ["Csütörtök", "Július 1."],
  ["Péntek", "Július 2."],
];

function Check() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4.2 4.2L19 6.5" />
    </svg>
  );
}

export default function CampsPage() {
  return (
    <main className="camp-page">
      <CardNavigation />

      <section className="camp-listing" id="top">
        <div className="shell">
          <a className="camp-page-back" href="/">
            <span aria-hidden="true">←</span> Vissza a főoldalra
          </a>

          <div className="camp-page-heading">
            <div>
              <p className="eyebrow eyebrow--red">Táboraink · 2027</p>
              <h1>Bro&apos;s Summer Camp</h1>
            </div>
            <p>
              Öt nap közös munka, fejlődés és új élmények az Óbudai
              Jégcsarnokban. A jelentkezés már elindult.
            </p>
          </div>

          <article className="camp-detail-card">
            <div className="camp-poster">
              <div className="camp-poster__glow camp-poster__glow--top" />
              <div className="camp-poster__glow camp-poster__glow--bottom" />

              <div className="camp-poster__top">
                <img src="/bros-logo.webp" alt="Bros's Goaltending logó" />
                <span>Ár hamarosan</span>
              </div>

              <div className="camp-poster__copy">
                <p>Bro&apos;s Goaltending Camp</p>
                <h2>
                  Bro&apos;s
                  <span>Summer Camp</span>
                </h2>
                <strong>2027. június 28. – július 2.</strong>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=%C3%93budai%20J%C3%A9gcsarnok"
                  target="_blank"
                  rel="noreferrer"
                >
                  Óbudai Jégcsarnok
                </a>
              </div>
            </div>

            <div className="camp-information">
              <div>
                <p className="camp-information__intro">
                  Jó hírünk van: jövőre is megrendezzük a Bro&apos;s Summer
                  Campet! Már most nagyon várjuk, hogy ismét együtt dolgozzunk,
                  fejlődjünk és új élményeket szerezzünk.
                </p>

                <div className="camp-primary-facts">
                  <div>
                    <p>Ár</p>
                    <strong>Hamarosan</strong>
                    <span>Az árakat később tesszük közzé</span>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=%C3%93budai%20J%C3%A9gcsarnok"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p>Helyszín</p>
                    <strong>Óbudai Jégcsarnok</strong>
                    <span>Megnyitás a Google Térképen ↗</span>
                  </a>
                </div>

                <div className="camp-highlights">
                  {campHighlights.map((highlight) => (
                    <div key={highlight}>
                      <Check />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="camp-schedule">
                  <p>Program</p>
                  <div>
                    {campDays.map(([day, date]) => (
                      <article key={day}>
                        <strong>{day}</strong>
                        <span>{date}</span>
                        <small>Részletes program hamarosan</small>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="camp-detail-tags">
                  <span>Kapusfejlesztés</span>
                  <span>Közösség</span>
                  <span>5 nap az Óbudai Jégcsarnokban</span>
                  <span>Jelentkezés elindult</span>
                </div>
              </div>

              <div className="camp-card-actions">
                <a className="button button--red" href="/#jelentkezes">
                  Jelentkezés a táborra <Arrow />
                </a>
                <a className="button button--outline-dark" href="/">
                  Vissza a főoldalra
                </a>
              </div>
            </div>
          </article>
        </div>
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
            <a href="#top">Bro&apos;s Summer Camp</a>
            <a href="/#jelentkezes">Jelentkezés</a>
            <a href="https://www.instagram.com/bro.sgoaltending/" target="_blank" rel="noreferrer">
              Instagram <Arrow />
            </a>
          </div>
        </div>
        <div className="footer-bottom shell">
          <span>© {new Date().getFullYear()} Bros&apos;s Goaltending</span>
          <a href="#top">Vissza az elejére ↑</a>
        </div>
      </footer>
    </main>
  );
}
