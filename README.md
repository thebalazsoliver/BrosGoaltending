# Bros's Goaltending

## Futtatás

```bash
npm install
npm run dev
```

Az oldal ezután a terminálban megjelenő helyi címen nyitható meg.

## Brevo e-mail-küldés

A jelentkezési űrlap a `/api/contact` végpontnak küldi az adatokat. A Brevo
bekötésekor ezt a végpontot egy szerveroldali vagy Cloudflare Function
megoldással kell létrehozni. A Brevo API-kulcsot soha ne tedd a JSX-kódba.
