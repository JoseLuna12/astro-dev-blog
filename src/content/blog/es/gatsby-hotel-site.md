---
images:
  - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fgatsby-tl-site-hero.png?alt=media&token=8b6d4cc0-ec89-4b3e-9486-cf79af94fcc6"
  - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_gatsby-tl-site-hero.png?alt=media&token=aee5afc8-6ec5-4e24-9a0d-72990d7831af"
  - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_gatsby-tl-site-hero.png?alt=media&token=72f9ac78-a3eb-4a2a-91bd-e6b34f85e4b3"
  - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_gatsby-tl-site-hero.png?alt=media&token=1a8e9d02-d99e-409d-88de-a2f2baaff7e3"
thumbnails:
  - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fgatsby-tl-site-thumb.png?alt=media&token=dffca831-e4ed-4c32-bb66-3c11cb512e05"
  - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_gatsby-tl-site-thumb.png?alt=media&token=d7202331-a0d5-4ece-8975-1bc12fcf0ee8"
  - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_gatsby-tl-site-thumb.png?alt=media&token=3166f1ce-69b3-43cf-87e2-83b92d5df9b5"
  - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_gatsby-tl-site-thumb.png?alt=media&token=bfab745d-bcd2-4c3c-9cbd-c6925ff6f6a3"
title: "Pagina para hotel usando Gatsby"
description: "Un sitio para hotel construido sobre un CMS hecho a la medida."
currentLanguage: "es"
date: "2023-02-25"
featured: true
accent: "#663399"
languages:
  - "en"
  - "es"
categories:
  - "Gatsby"
  - "React"
  - "Web"
---

### Summary
Este post cuenta como construí [terralunalodge.com](https://terralunalodge.com/en/) usando:

- Gatsby
- Tailwind
- FaunaDB
- TypeScript

## De que trata la pagina
[TerraLuna Lodge](https://terralunalodge.com/en/) es un hotel ubicado en la Amazonia ecuatoriana. Como es un negocio familiar, me propuse construir un sitio con la mejor tecnologia posible para ayudarlo a destacar.

Escogí Gatsby porque el equipo tenia un hosting compartido donde solo funcionaban bien los sitios hechos en WordPress. Asi fue como descubrí Gatsby hace algunos años y me entusiasmé con la posibilidad de usar tecnologias modernas como React, compilar todo como un sitio estatico y desplegarlo incluso en un hosting limitado.

La pagina actual es la segunda iteracion. Se actualizó de Gatsby 2 a Gatsby 4 con un diseño completamente nuevo. Igual que la primera version, esta fue diseñada, desarrollada, desplegada y mantenida por mi.

## Stack
Las dos versiones cambian en algunas partes del stack, pero comparten varias herramientas:

- React
- Gatsby
- Tailwind
- Segment para analiticas

#### Terra Luna web v1
La primera version fue mi primer proyecto serio con Gatsby. Tuvo un stack relativamente complejo porque la idea era reemplazar a la pagina original construida en WordPress.

Para el backend usé un Headless CMS llamado Strapi y lo desplegué en Google Cloud. Fue un poco excesivo porque la pagina era principalmente informativa y el plan de Google Cloud resultaba caro de mantener.

El deployment y el proceso de construccion eran muy manuales. El sitio no tenia forma de enterarse de cambios en los datos y los deploys tomaban bastante tiempo porque el hosting no ofrecia acceso SSH ni una alternativa similar para automatizar el proceso.

El sitio estaba traducido a tres idiomas, y organizar, editar y mantener esas traducciones era tambien un proceso manual porque Strapi no ofrecia una solucion convincente para texto multilenguaje en ese momento.

#### Terra Luna web v2
La segunda version se reconstruyó desde cero para resolver los problemas de la pagina anterior.

El primer paso fue buscar un backend diferente. Esta nueva version usa FaunaDB y un CMS hecho a medida especificamente para este sitio. Eso fue muy util porque cada componente del CMS se diseñó para guardar exactamente la informacion que la pagina necesitaba, manteniendo la herramienta lo mas simple posible.

El CMS fue construido usando [React](https://reactjs.org/), [FaunaDB](https://fauna.com/), [Tailwind](https://tailwindcss.com/) y [DaisyUI](https://daisyui.com/).

Gracias al nuevo CMS, y para aprovechar la capa de datos de Gatsby, tuve que construir plugins personalizados para extraer la informacion desde el backend. Al final terminé creando cuatro plugins:

- **gatsby-source-faunadb-terraluna:** extrae toda la informacion necesaria de FaunaDB y de las imagenes almacenadas en [UploadCare](https://uploadcare.com/), y luego crea los nodos requeridos, incluyendo nodos de imagen para Gatsby.
- **gatsby-source-static-ggl-map:** usa la API de Google Static Maps para generar la imagen del mapa del hotel y la transforma en un nodo de imagen para Gatsby.
- **gatsby-tl-sitemap:** crea un sitemap para el sitio. Lo construí porque necesitaba mas control sobre la generacion del sitemap.
- **gatsby-translation-tl:** descarga las claves y valores de traduccion desde FaunaDB y genera los archivos que el plugin de i18n necesita para manejar la traduccion del sitio.

Otro punto debil que esta version resolvió fue el hosting. El nuevo sitio usa Gatsby Hosting, que era mucho mejor y tambien mas barato que el proveedor anterior. Ahora los deployments pueden automatizarse y dispararse directamente desde el CMS.

### Next steps
- [ ] Actualizar a Gatsby 5
- [ ] Usar Slice API
- [ ] Usar Partial Hydration
- [ ] Implementar Party Town para cargar analiticas

### Capturas de pantalla

#### Pagina

<p align="center">
<img sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_terra-luna-site-ss.png?alt=media&token=1be9d905-4b0c-4e19-9ee1-54155d1c8f22 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_terra-luna-site-ss.png?alt=media&token=e6b16a01-2c17-4d04-ab93-adc4a9227805 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_terra-luna-site-ss.png?alt=media&token=46db42bc-a1c9-431a-a3c2-31dbc3e87e54 400w" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fterra-luna-site-ss.png?alt=media&token=29819313-a6f4-4100-bf0d-68bc54178e39">
</p>

#### Admin

<p align="center">
<img sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_terra-luna-admin-ss.png?alt=media&token=f55d7350-bf9a-4264-9911-17c2bfc08c74 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_terra-luna-admin-ss.png?alt=media&token=54df76b0-9d57-4a69-9e99-023f85707d3a 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_terra-luna-admin-ss.png?alt=media&token=14d3622c-8ac4-4248-8d49-b9bd678ec403 400w" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fterra-luna-admin-ss.png?alt=media&token=3b5e648b-87b8-4207-96b2-a49f83b91297">
</p>
