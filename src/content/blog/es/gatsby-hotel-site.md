---
image: "/blog-heros/gatsby-tl-site-hero.png"
thumbnail: "/blog-thumbnails/gatsby-tl-site-thumb.png"
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
![Terra Luna](/blog-resources/terra-luna-site-ss.png)
#### Admin 
![terra luna admin](/blog-resources/terra-luna-admin-ss.png)