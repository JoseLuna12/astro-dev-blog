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
title: "How I built my blog using Astro"
description: "Astro is a great tool and the best choice for building fast and easy a blog."
currentLanguage: "en"
date: "22-02-2023"
accent: "#FF5D01"
languages: 
    - "es"
    - "en"
categories:
    - "Astro"
    - "Web"
---
# What is Astro?
Astro is a static site builder that focus on sending just the necesarry javascript to the client. Astro introduced a new technology called Astro Islands that:
> Extracts your UI into smaller, isolated components on the page. Unused JavaScript is replaced with lightweight HTML, guaranteeing faster loads and time-to-interactive. [Astro](https://astro.build/)
# How did I use Astro?
I used Astro components for the main pages and [Svelte](https://svelte.dev/) for reusable and interactive components like buttons, small blogs previsualizations, etc. 
For the internationalization I did not use any plugin or library, is a custom made routing system. Basically there are two of the same pages, one for english and one for spanish, both of them share the same page component built with astro and as props I send the translation values.

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
The main index pages are the ones inside the language folders (*en*, *es*) and the index inside the *src* folder just redirects the user to it's browsers preferred language.
```javascript
//index.astro
const rawlang = window.navigator.language
let lang = 'en'
let langSplited = rawlang.split('-')
if(langSplited.length > 1){
	lang = langSplited[0]
}
window.location = '/'+lang
```
For the blogs posts I used the same system with folders to separate posts for each language. Each post has its own data like `date`, `image`, `current language`, `available languages`, etc. So the UI can react to that.
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
# Astro or Gatsbyjs
I'm a big fan of [Gatsby](https://www.gatsbyjs.com/), I've used it in many projects but the main problem I keep having until this version of gatsby (`5.0`) is that the javascript bundle send to the client is way to big, even for informative pages, Astro on the other hand, prevent this by sending only the necessary javascript to the client, in my case, none javascript is being send to the client, except for the main `index.astro` file in the `src` folder.

You can check the source code of this blog on my github repo [here](https://github.com/JoseLuna12/astro-dev-blog)
