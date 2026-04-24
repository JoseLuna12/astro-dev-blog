---
images:
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fastro-hero-image-blog-post.png?alt=media&token=0de8744c-06a4-4edd-92dc-54c8c0af979c"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_astro-hero-image-blog-post.png?alt=media&token=cf14c1ba-c40f-4594-ae5a-8938c7bfb368"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_astro-hero-image-blog-post.png?alt=media&token=a9b19eb6-5f5a-447d-820a-668af18f32a8"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_astro-hero-image-blog-post.png?alt=media&token=32c4b46a-659a-4947-931e-0cb6ee397517"
thumbnails: 
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fastro-thumbnail.png?alt=media&token=ea73215e-eda4-43b1-a399-5885c9634b59"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_astro-thumbnail.png?alt=media&token=2d85e5d2-31fe-4d3e-af39-719e40615366"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_astro-thumbnail.png?alt=media&token=344140fb-8774-4159-9033-0bbc0f7f314e"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_astro-thumbnail.png?alt=media&token=82f81943-a9df-4c93-a4cc-ae5e1054f703"
title: "Cómo construí este blog con Astro"
description: "Por que Astro fue la mejor opcion para construir un blog bilingue y rapido."
currentLanguage: "es"
date: "2023-02-22"
accent: "#FF5D01"
languages: 
    - "es"
    - "en"
categories:
    - "Astro"
    - "Web"
---
# Qué es Astro?
Astro es un constructor de sitios estaticos especializado en enviar solo el JavaScript necesario al cliente. Astro utiliza una tecnologia llamada Astro Islands que:
> Extrae la interfaz en pequeños componentes aislados. El JavaScript que no se usa es reemplazado por HTML, garantizando cargas mas rapidas. [Astro](https://astro.build/)

# Cómo utilicé Astro?
Utilicé componentes de Astro para las paginas y [Svelte](https://svelte.dev/) para los componentes interactivos y reutilizables, como botones y previsualizaciones de articulos.
Para el multilenguaje no utilicé ningun plugin o libreria. En su lugar cree un metodo de ruteo con dos versiones de la misma pagina, una en ingles y otra en español, ambas compartiendo el mismo componente construido con Astro y recibiendo props traducidas.

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
Los index de las carpetas `en` y `es` son muy parecidos, solo cambian los datos que se envian al componente compartido. Dentro de la carpeta `src` existe otro index que se encarga de revisar el idioma del navegador y redireccionar a la pagina correcta.
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
Para los posteos del blog utilicé el mismo sistema de carpetas por idioma. Cada post tiene su propia informacion como `fecha`, `imagen`, `lenguaje` y `lenguajes disponibles`, asi que la UI puede reaccionar a esos valores.
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
Soy bastante fan de [Gatsby](https://www.gatsbyjs.com/). Lo he usado en muchos proyectos, pero el problema que seguia teniendo hasta Gatsby `5.0` era que el bundle de JavaScript enviado al cliente seguia siendo muy grande incluso para paginas informativas. Astro evita eso enviando solo el JavaScript necesario para los componentes que realmente lo necesitan. En mi caso casi no se ejecuta JavaScript en el cliente, excepto por `index.astro` dentro de `src`.

Pueden ver el codigo fuente de este blog en mi repositorio de github [aquí](https://github.com/JoseLuna12/astro-dev-blog)
