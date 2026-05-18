# ZT Network · Sitio Web

Sitio corporativo de **ZTNETWORK LIMITADA** — RUT 78.419.384-5

- **Producción:** https://www.ztnetwork.cl
- **Staging:** https://staging.ztnetwork.pages.dev

## Stack
- HTML/CSS/JS vanilla (sin frameworks)
- Cloudflare Pages (hosting + CDN + SSL)
- Sin backend (sitio 100% estático)

## Deploy

```bash
# Staging
git checkout staging
git add .
git commit -m "feat: actualización del sitio"
git push origin staging
# → https://staging.ztnetwork.pages.dev en ~30s

# Producción (después de validar staging)
git checkout main
git merge staging
git push origin main
# → https://www.ztnetwork.cl
```

## Configuración Cloudflare

**DNS:** `www.ztnetwork.cl` y `ztnetwork.cl` → Proxied (naranja)

**SSL/TLS:** Full (strict) · HSTS preload · Min TLS 1.2

**Pages:**
- Build command: (vacío)
- Output directory: `/`
- Production branch: `main`
- Preview branch: `staging`

## Editar
- **Textos:** editar `index.html`
- **WhatsApp:** buscar y reemplazar `56974679583`
- **Marcas:** ver `assets/brand/logos/` (9 SVGs procesados con currentColor)

## Cumplimiento
- Ley 21.719 (Protección de Datos): `/privacidad.html`
- Ley 21.663 (Ciberseguridad): enlace a ANCI en homepage
- OWASP Top 10: mitigaciones vía `_headers`

## Contacto
- contacto@ztnetwork.cl
- WhatsApp: +56 9 7467 9583
