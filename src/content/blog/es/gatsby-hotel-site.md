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
title: "Página para hotel usando Gatsby"
description: "Esta página de hotel fue hecha por mi usando un CMS fabricado a la medida por mi."
currentLanguage: "es"
date: "25-02-2023"
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
Este blog es sobre como construí la página ([terralunalodge.com](https://terralunalodge.com/en/)) usando:
- Gatsby js
- Tailwind
- Faunadb
- Typescript

## De que es la página
[TerraLuna lodge](https://terralunalodge.com/en/) es un hotel ubicado en la amazonía ecuatoriana, es un negocio familiar y por esa misma razón me desafié a construir un sitiio web usando la mejor tecnología disponible para sobresalir.
Escogí Gatsby porque la hostería solía tener un Hosting compartido donde solo podian subir sitios web hechos en Wordpress, fue por eso que descubrí a Gatsby hace 3 años con su tecnología para hacer sitios estaticos con tecnologías modernas como React y poder subirlas a cualquier tipo de hosting.
La página actual es la segunda versión donde se actualizó de Gatsby 2 a Gatsby 4 y con un diseño completamente nuevo, así como la primera versión, la segunda fue diseñada, desarrollada, deployeada y mantenida por mi.

## Stack
Las dos versiones se diferencian en algunas tecnologías pero mantienen algunas como:
- React
- Gatsby
- Tailwind
- Segment (analiticas)

#### Terra Luna web v1
La primera versión fue la primera vez que use Gatsby js, tuvo un diseño un poco complejo por que la idea era reemplazar a la página original que fue construida en Wordpress.
Para el Backend usé un Headless CMS llamado Strapi y desplegada en Google Cloud, fue un poco exagerado porque la página es simplemente informativa y el plan de google cloud era un poco caro.
El deployment y el proceso de construccion (build) era muy manual. Basicamente el sitio no tenía idea de los cambios en los datos, y  los deploymets tomaban mucho tiempo por el hosting que no ofrecía una llave ssh ni nada parecido como para poder automatizar el proceso.
El sitio fue traducido a 3 lenguajes y organizar, editar y mantenerlos era un proceso igualmente manual, porque Strapi en ese tiempo no ofrecía una solución para textos multilenguaje.

#### Terra Luna web v2
La segunda versión fue construida desde cero de nuevo para resolver todos los problemas que tenía la pagina anterior.
Lo primero que se hizo fue buscar un mejor backend, para esto se utilizó FaunaDB y un CMS hecho a medida por mi para manjear unicamente el contenido de la página.

El CMS fue construido usando [Reactjs](https://reactjs.org/), [Faunadb](https://fauna.com/), [Tailwind](https://tailwindcss.com/) y [Daisy UI](https://daisyui.com/).

Por el nuevo CMS, para aprovechar todo lo que Gatsby ofrece, tuve que construir un source plugin  para poder extrar la info de la página. En total tuve que construir 4 plugins.

- **gatsby-source-faunadb-terraluna:** Este plugin extrae toda la información necesaria de faunadb y crea los nodos necesarios, icnluso las urls de las imagenes, hosteadas en [UploadCare](https://uploadcare.com/) las trasnforma en GatsbyImageNodes.
- **gatsby-source-static-ggl-map:** Este plugin usa la api para generar mapas estaticos de Google y luego la transforma en un GatsbyImageNode.
- **gatsby-tl-sitemap:** Este plugin crea un sitemap para la página. La razón que tuve para construir este plugin fue para tener mas control en la creación del sitemap.
- **gatsby-translation-tl:** Este plugin, uno de los más importantes, extrae todas las traducciones de texto de Faunadb y genera los archivos y carpetas para cada idioma en el formato que se configuró el plugin i18n para la traducción del sitio.

Otro punto débil que esta nueva versión de la web resuelve es el hosting, este nuevo sitio usa Gatsby Hosting que es por mucho, mejor e incluso mas barato que el hosting antiguo. Ahora todos los deployments son automatizados y pueden ser activados desde el CMS.

### Next steps
- [ ] Actualizar a Gatsby 5
- [ ] Usar la Slice api
- [ ] Usar Partial Hydration
- [ ] Implementar Party Town para cargar los scripts de analyticas

### Capturas de pantalla

#### Página
<p align="center">
<picture>
<source sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_terra-luna-site-ss.png?alt=media&token=1be9d905-4b0c-4e19-9ee1-54155d1c8f22 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_terra-luna-site-ss.png?alt=media&token=e6b16a01-2c17-4d04-ab93-adc4a9227805 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_terra-luna-site-ss.png?alt=media&token=46db42bc-a1c9-431a-a3c2-31dbc3e87e54 400w">
<img src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fterra-luna-site-ss.png?alt=media&token=29819313-a6f4-4100-bf0d-68bc54178e39">
</picture>
</p>

#### Admin 
<p align="center">
<picture>
<source sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_terra-luna-admin-ss.png?alt=media&token=f55d7350-bf9a-4264-9911-17c2bfc08c74 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_terra-luna-admin-ss.png?alt=media&token=54df76b0-9d57-4a69-9e99-023f85707d3a 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_terra-luna-admin-ss.png?alt=media&token=14d3622c-8ac4-4248-8d49-b9bd678ec403 400w">
<img src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fterra-luna-admin-ss.png?alt=media&token=3b5e648b-87b8-4207-96b2-a49f83b91297">
</picture>
</p>