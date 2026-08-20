# hamy.cz

Static site for [hamy.cz](https://www.hamy.cz/). English-only personal pages: Michal Hamerník, plus the Interval Training Android app.

## Layout

The web root is `www/`. Open that folder to preview:

```
python -m http.server 8765
```

Then visit `http://127.0.0.1:8765/`.

Live hosting is Wedos. Site files belong in the domain document root only. The server-wide router `.htaccess` is **not** in this repository.

## What is intentionally not here

FTP credentials, deploy scripts, and host-specific router rules. Do not add `.env` files, passwords, or private keys.

IBM Plex Sans and IBM Plex Mono in `www/fonts/` are Copyright IBM Corp., licensed under the SIL Open Font License 1.1.

© Michal Hamerník
