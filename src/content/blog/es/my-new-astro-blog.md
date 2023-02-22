---
image: "/blog-heros/astro-hero-image-blog-post.png"
thumbnail: "/blog-thumbnails/astro-thumbnail.png"
title: "Cómo construí este blog con Astro"
description: "Astro es una buena herramienta y la mejor opción para construir un blog."
currentLanguage: "es"
date: "22-02-2022"
accent: "#FF5D01"
languages: 
    - "es"
    - "en"
categories:
    - "Astro"
    - "Web"
---
# Qué es Astro?
Astro es un constructor de sitios estaticos, especializado en mandar unicamente el javascript necesario al cliente. Astro utiliza una tecnologia llamada Astro Islands que:
>Extrae la interfaz en pequeños, aislados componentes. el Javascript que no se usa es reemplazado por HTML, garantizando cargas mas rapidas. [Astro](https://astro.build/)

# Cómo utilicé Astro?
Utilicé componentes de Astro para las páginas y [Svelte](https://svelte.dev/) para los componentes interactivos y reusables como botones, previsualizaciones de los blogs, etc.
Para el multilenguaje no utilicé ningún plugin o librería, en vez, cree un metodo de ruteo. Basicamente hay dos versiones the la misma página para inglés y español, las dos comparten el mismo componente construido con Astro y como props se le envia los valores que cambian dependiendo el idioma.

```
Blog
│   
└───src
    │
    └───Pages
	│ 	│
	│   └───en
	│	│   └──index.astro
	│	└───es
	│	    └──index.astro
	└──index.astro

```
Los index de las carpetas `en` y `es` son muy parecidos, solo cambian en los datos que se envía al componente que comparten. Dentro de la carpeta src existe otro index, este solo se encarga de verificar el lenguaje del navegador y redireccionar a la pagina correcta.
```javascript
//src/index.astro
const rawlang = window.navigator.language
let lang = 'en'
let langSplited = rawlang.split('-')
if(langSplited.length > 1){
	lang = langSplited[0]
}
window.location = '/'+lang
```
Para los posteos del blog utilicé el mismo sistema de carpetas por cada idioma. Cada post tiene su propia informacion como `fecha`, `imagen`, `lenguaje`, `lenguajes disponibles`, etc. y así la UI puede interactuar con esos valores.
```
src
│   
└───Content
    │
    └───blog
	  	│
	    └───en
	 	│   └──md-files.md
	 	└───es
	 	    └──md-files.md
```
# Astro o Gatsbyjs
Soy bastante fan de [Gatsby](https://www.gatsbyjs.com/), Lo he usado en muchos projectos pero el problema que sigo teniendo hasta la versión de hoy en día cuando escribí este post (5.0) es que el bundle de javascript es innecesariamente grande incluso para páginas simplemente informativas. Astro por el otro lado previen esto enviando solo el javascript necesario para los componentes que de verdad lo necesitan al cliente, en mi caso, nada de javascript se está ejecutando en el cliente a excepción de `index.astro` en la carpeta `src`.

Pueden ver el codigo fuente de este blog en mi repositorio de github [aquí](https://github.com/JoseLuna12/astro-dev-blog)