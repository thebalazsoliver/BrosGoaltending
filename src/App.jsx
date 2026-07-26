"use client";

import { useEffect, useState } from "react";

const trainingTypes = [
  {
    number: "01",
    title: "Egyéni képzés",
    lead: "Minden perc a te játékodról szól.",
    text: "Személyre szabott, posztspecifikus munka a technikai részletekre, a helyezkedésre és a magabiztos döntésekre építve.",
    tags: ["Személyes fókusz", "Azonnali visszajelzés"],
    href: "#jelentkezes",
  },
  {
    number: "02",
    title: "Hétvégi kiscsoport",
    lead: "Kis létszám. Magas intenzitás.",
    text: "Egymásra épülő gyakorlatok és meccsszerű szituációk olyan közegben, ahol a kapusok egymást is jobb teljesítményre ösztönzik.",
    tags: ["Kis csoport", "Meccstempó"],
    href: "#jelentkezes",
  },
  {
    number: "03",
    title: "Nyári tábor",
    lead: "Egy teljes hét a fejlődésért.",
    text: "Komplex kapusprogram koncentrált jégmunkával, szárazedzéssel, közös élményekkel és napi, érthető szakmai iránymutatással.",
    tags: ["Komplex program", "Közösségi élmény"],
    href: "/taboraink",
  },
];

const coaches = [
  {
    number: "01",
    initials: "TB",
    name: "Tóth Balázs",
    role: "Alapító · Kapusedző",
    image: "/tothbalazs.webp",
    imageClass: "coach-card__image--toth",
  },
  {
    number: "02",
    initials: "ML",
    name: "Márkus Levente",
    role: "Alapító · Kapusedző",
    image: "/markuslevente.webp",
    imageClass: "coach-card__image--markus",
  },
  {
    number: "03",
    initials: "HA",
    name: "Horváth André",
    role: "Alapító · Kapusedző",
    image: "/horvathandre.webp",
    imageClass: "coach-card__image--horvath",
  },
];

const menuCards = [
  {
    title: "Képzések",
    className: "nav-card--red",
    links: [
      ["Egyéni képzés", "/#kepzesek"],
      ["Hétvégi kiscsoport", "/#kepzesek"],
      ["Táboraink", "/taboraink"],
    ],
  },
  {
    title: "Az iskola",
    className: "nav-card--graphite",
    links: [
      ["Bemutatkozás", "/#bemutatkozas"],
      ["Kis történetünk", "/#tortenet"],
      ["Edzők", "/#edzok"],
      ["Vélemények", "/#velemenyek"],
    ],
  },
  {
    title: "Kapcsolat",
    className: "nav-card--light",
    links: [
      ["Jelentkezés", "/#jelentkezes"],
      ["Instagram", "https://www.instagram.com/bro.sgoaltending/"],
    ],
  },
];

export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.7 21v-8h2.8l.4-3.1h-3.2v-2c0-.9.3-1.5 1.6-1.5H17V3.6c-.8-.1-1.6-.2-2.4-.2-2.4 0-4.1 1.5-4.1 4.2v2.3H7.8V13h2.7v8h3.2Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle className="social-dot" cx="17.4" cy="6.8" r="1" />
    </svg>
  );
}

export function CardNavigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeWithEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeWithEscape);
    return () => window.removeEventListener("keydown", closeWithEscape);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <div className={`card-nav-wrap ${open ? "is-open" : ""}`}>
      <nav className="card-nav" aria-label="Fő navigáció">
        <div className="card-nav__bar">
          <button
            className={`menu-toggle ${open ? "is-open" : ""}`}
            type="button"
            aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            <span />
            <span />
          </button>

          <a className="nav-brand" href="/" onClick={closeMenu}>
            <img src="/bros-logo.webp" alt="" />
            <span>BROS&apos;S GOALTENDING</span>
          </a>

          <a className="nav-cta" href="/#jelentkezes" onClick={closeMenu}>
            Jelentkezés <Arrow />
          </a>
        </div>

        <div className="card-nav__content" aria-hidden={!open}>
          {menuCards.map((card) => (
            <section className={`nav-card ${card.className}`} key={card.title}>
              <p>{card.title}</p>
              <div>
                {card.links.map(([label, href]) => {
                  const external = href.startsWith("http");
                  return (
                    <a
                      href={href}
                      key={label}
                      onClick={closeMenu}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                    >
                      <Arrow /> {label}
                    </a>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    trainingTypes: [],
    consent: false,
  });
  const [formStatus, setFormStatus] = useState({ type: "idle", message: "" });
  const trainingOptions = ["Egyéni képzés", "Hétvégi kiscsoport", "Nyári tábor", "Még nem tudom"];

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const toggleTraining = (training) => {
    setFormData((current) => ({
      ...current,
      trainingTypes: current.trainingTypes.includes(training)
        ? current.trainingTypes.filter((item) => item !== training)
        : [...current.trainingTypes, training],
    }));
  };

  const submitApplication = async (event) => {
    event.preventDefault();
    setFormStatus({ type: "loading", message: "Küldés folyamatban…" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Az üzenetet most nem sikerült elküldeni.");

      setFormStatus({ type: "success", message: "Köszönjük! Megkaptuk a jelentkezésed, hamarosan jelentkezünk." });
      setFormData({ name: "", email: "", message: "", trainingTypes: [], consent: false });
    } catch (error) {
      setFormStatus({
        type: "error",
        message: `${error.message} Addig írj nekünk Instagramon vagy Facebookon.`,
      });
    }
  };

  return (
    <main>
      <CardNavigation />

      <section className="hero" id="top">
        <img
          className="hero__image"
          src="/bros-team.webp"
          alt="A Bros's Goaltending kapusai és edzői a jégen"
        />
        <div className="hero__shade" />
        <div className="hero__content shell">
          <p className="eyebrow eyebrow--light">Jégkorong kapusiskola · 2024 óta</p>
          <h1>
            A kapusban
            <span>több van.</span>
          </h1>
          <div className="hero__bottom">
            <p>
              Három edző közös szakmai szemlélete. Tudatos képzés, érthető
              visszajelzés és olyan részletek, amelyek mérkőzésen is működnek.
            </p>
            <div className="hero__actions">
              <a className="button button--red" href="#jelentkezes">
                Jelentkezem <Arrow />
              </a>
              <a className="button button--glass" href="#kepzesek">
                Képzések
              </a>
            </div>
          </div>
        </div>
        <a className="hero__scroll" href="#bemutatkozas" aria-label="Tovább a bemutatkozáshoz">
          Görgess <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="section intro-section shell" id="bemutatkozas">
        <div className="section-index">
          <span>01</span>
          <p>Bemutatkozás</p>
        </div>
        <div className="intro-copy">
          <p className="eyebrow">Bros&apos;s Goaltending</p>
          <h2>Három edző.<br />Egy közös szemlélet.</h2>
          <div className="intro-copy__text">
            <p>
              Azért dolgozunk, hogy minden kapus jobban értse a saját játékát,
              magabiztosabban mozogjon a kapuban, és nyomás alatt is jó döntéseket hozzon.
            </p>
            <p>
              A képzéseinkben a technikai alapokat mindig valós játékhelyzetekkel,
              egyértelmű magyarázatokkal és személyre szabott visszajelzéssel kapcsoljuk össze.
            </p>
          </div>
        </div>
      </section>

      <section className="story-section" id="tortenet">
        <div className="story-grid shell">
          <div className="story-mark" aria-hidden="true">
            <img src="/bros-logo.webp" alt="" />
            <span>2024</span>
          </div>
          <div className="story-copy">
            <p className="eyebrow eyebrow--red">Kis történetünk</p>
            <h2>Barátságból<br />közös küldetés.</h2>
            <p>
              A Bros&apos;s Goaltendinget Tóth Balázs, Márkus Levente és Horváth André
              alapította. A közös gondolat egyszerű volt: olyan kapusképzést létrehozni,
              ahol a szakmai igényesség, a személyes figyelem és a jó közösség ugyanannyira fontos.
            </p>
            <p>
              Hiszünk benne, hogy a fejlődés nem egyetlen nagy ugrásból, hanem sok jól
              megértett részletből épül fel. Ezeket a részleteket tesszük láthatóvá minden edzésen.
            </p>
          </div>
        </div>
      </section>

      <section className="section training-section shell" id="kepzesek">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Képzéseink</p>
            <h2>Minden szinthez<br />egy következő lépés.</h2>
          </div>
          <p>
            Válaszd azt a formát, amely most a legtöbbet adja a fejlődésedhez.
            A megfelelő kiindulópont megtalálásában is segítünk.
          </p>
        </div>

        <div className="training-grid">
          {trainingTypes.map((training) => (
            <a
              className="training-card"
              href={training.href}
              key={training.number}
              aria-label={`${training.title} – részletek`}
            >
              <div className="training-card__top">
                <span>{training.number}</span>
                <Arrow />
              </div>
              <div>
                <p className="training-card__lead">{training.lead}</p>
                <h3>{training.title}</h3>
                <p className="training-card__copy">{training.text}</p>
              </div>
              <ul>
                {training.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </a>
          ))}
        </div>
      </section>

      <section className="coaches-section" id="edzok">
        <div className="section shell">
          <div className="section-heading section-heading--dark">
            <div>
              <p className="eyebrow eyebrow--red">Az alapítók</p>
              <h2>A palánk mögött<br />is egy csapat.</h2>
            </div>
            <p>
              Három különböző nézőpont, egy közös mérce: minden kapus kapjon
              figyelmet, érthető választ és használható fejlődési irányt.
            </p>
          </div>

          <div className="coach-grid">
            {coaches.map((coach) => (
              <article className="coach-card" key={coach.name}>
                <div className="coach-card__portrait">
                  <img
                    className={`coach-card__image ${coach.imageClass}`}
                    src={coach.image}
                    alt={`${coach.name}, a Bros's Goaltending alapító kapusedzője`}
                  />
                  <i>{coach.number}</i>
                </div>
                <div className="coach-card__meta">
                  <span>{coach.number}</span>
                  <div>
                    <h3>{coach.name}</h3>
                    <p>{coach.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section reviews-section shell" id="velemenyek">
        <div className="reviews-heading">
          <p className="eyebrow">Vélemények</p>
          <h2>A fejlődés<br />belülről látszik.</h2>
        </div>
        <div className="review-placeholder">
          <span className="quote-mark">“</span>
          <p>
            Ide kerülnek majd a kapusok és szülők ellenőrzött visszajelzései
            a képzésekről, az edzőkről és a közösen elért fejlődésről.
          </p>
          <div>
            <strong>Valódi történetek hamarosan</strong>
            <span>Bros&apos;s Goaltending</span>
          </div>
        </div>
      </section>

      <section className="apply-section" id="jelentkezes">
        <div className="apply-background" aria-hidden="true">
          <img src="/bros-team.webp" alt="" />
        </div>
        <div className="apply-grid shell">
          <div className="apply-copy">
            <p className="eyebrow eyebrow--red">Jelentkezés és kapcsolat</p>
            <h2>A következő<br />védésed itt<br />kezdődik.</h2>
            <p>
              Írd meg, hol tartasz most, és melyik képzés érdekel. Segítünk
              megtalálni azt a következő lépést, amely valóban előreviszi a játékodat.
            </p>
            <div className="apply-socials">
              <p>Keress minket közösségi oldalainkon</p>
              <div>
                <a className="social-button" href="https://www.facebook.com/profile.php?id=100067667316568" target="_blank" rel="noreferrer">
                  <FacebookIcon /> Facebook
                </a>
                <a className="social-button" href="https://www.instagram.com/bro.sgoaltending/" target="_blank" rel="noreferrer">
                  <InstagramIcon /> Instagram
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={submitApplication}>
            <div className="contact-form__heading">
              <p className="eyebrow eyebrow--red">Beszéljünk!</p>
              <h3>Küldj egy rövid üzenetet</h3>
            </div>
            <div className="form-row">
              <label className="form-field">
                <span>Név</span>
                <input name="name" value={formData.name} onChange={updateField} placeholder="Kapus vagy szülő neve" autoComplete="name" required />
              </label>
              <label className="form-field">
                <span>E-mail-cím</span>
                <input name="email" type="email" value={formData.email} onChange={updateField} placeholder="nev@email.hu" autoComplete="email" required />
              </label>
            </div>
            <label className="form-field">
              <span>Mesélj röviden a kapusról</span>
              <textarea name="message" value={formData.message} onChange={updateField} placeholder="Életkor, jelenlegi csapat vagy szint, célok…" rows="4" required />
            </label>
            <fieldset className="training-choice">
              <legend>Melyik képzés érdekel?</legend>
              <div>
                {trainingOptions.map((training) => (
                  <label className="choice-pill" key={training}>
                    <input type="checkbox" checked={formData.trainingTypes.includes(training)} onChange={() => toggleTraining(training)} />
                    <span>{training}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <label className="consent-field">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(event) => setFormData((current) => ({ ...current, consent: event.target.checked }))}
                required
              />
              <span>Hozzájárulok, hogy a megadott adataimat a kapcsolatfelvételhez kezeljék.</span>
            </label>
            <button className="button button--red button--full" type="submit" disabled={formStatus.type === "loading"}>
              {formStatus.type === "loading" ? "Küldés…" : "Jelentkezés elküldése"} <Arrow />
            </button>
            {formStatus.message && (
              <p className={`form-status form-status--${formStatus.type}`} role="status">{formStatus.message}</p>
            )}
          </form>
        </div>
      </section>

      <footer className="site-footer" id="kapcsolat">
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
            <a href="#bemutatkozas">Bemutatkozás</a>
            <a href="#kepzesek">Képzések</a>
            <a href="#edzok">Edzők</a>
            <a href="#velemenyek">Vélemények</a>
          </div>
          <div className="footer-column">
            <p>Kapcsolat</p>
            <a href="https://www.facebook.com/profile.php?id=100067667316568" target="_blank" rel="noreferrer">
              Facebook <Arrow />
            </a>
            <a
              href="https://www.instagram.com/bro.sgoaltending/"
              target="_blank"
              rel="noreferrer"
            >
              @bro.sgoaltending <Arrow />
            </a>
            <a href="#jelentkezes">Jelentkezés</a>
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