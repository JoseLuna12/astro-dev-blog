---
images:
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fcrunchyroll-hero.png?alt=media&token=bbbc92a4-8ff6-49ae-823a-49fca9541f59"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_crunchyroll-hero.png?alt=media&token=aebe1fc3-240d-4aeb-9d0d-6c2402c00dec"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_crunchyroll-hero.png?alt=media&token=a004488e-6d73-452e-8327-0cc88061dabc"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_crunchyroll-hero.png?alt=media&token=30ff8a57-3101-4390-8a9c-d94598441a54"
thumbnails: 
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fcrunchyroll-thumb.png?alt=media&token=c3dc8386-9148-4e7a-8296-65e37f6928fe"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_crunchyroll-thumb.png?alt=media&token=11047252-f9ca-48d4-a383-1345d62ec5a8"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_crunchyroll-thumb.png?alt=media&token=4e7d5bd8-4f5b-48d0-9ca1-d984df738928"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_crunchyroll-thumb.png?alt=media&token=f431e07e-29de-46f3-9d4b-259f4824cd25"
title: "Extensión para Crunchyroll.com"
description: "Esta extensión para crunchyroll previene spoilers y asi disfrutar mas la experiencia en la plataforma."
currentLanguage: "es"
date: "04-06-2023"
accent: "#F37422"
languages: 
    - "en"
    - "es"
categories:
    - "Web"
---


# Crunchy roll extension para Google Chrome

### Problemática 
Este proyecto surgió principalmente para evitar spoilers u obtener información acerca del siguiente capitulo en la lista. Muchas veces en el anime, los nombres de los episodios pueden arruinarte la experiencia porque prácticamente explican que va a pasar. El problema vino cuando me di cuenta que era muy fácil leer el nombre del siguiente capitulo el cual delataba aun mas información que por preferencia personal hubiese preferido no ver.

### Solución
Construir una extension para Google Chrome donde reemplace el contenido donde se expone la información del siguiente capitulo por información mas genérica como por ejemplo únicamente el número del capítulo.

**Stack:**
Javascript

#### Problemas durante el desarrollo
Crunchyroll al ser una web app donde no toda la información viene completa desde el servidor era mas difícil buscar los componentes que contenían la información deseada. 

En la primera carga el componente o div que contenía la información del capitulo siguiente no existía porque al parecer este componente se renderizaba en el cliente, pero al navegar por la pagina luego de esta primera carga el componente se incluía en el DOM desde el principio.

```javascript
function findNode() {
    const nextEpisodesNode = document.querySelector('[data-t="next-episode"]')
    if (nextEpisodesNode) {
        editNode(nextEpisodesNode)
        return true
    }

    return false
}
```

Para solucionar esto se uso una combinación de técnicas:

Primero se intenta encontrar el componente usando `querySelector`, si este retornaba vacío usaba la clase MutationObserver la cual ayuda a ver los cambios que se generaban en el DOM

```javascript
const observer = new MutationObserver((mutations, observer) => {
    let nodeValue = null
    mutations.forEach((mutation) => {
        if (mutation.type == "childList") {
            mutation.addedNodes.forEach(node => {
                if (node.classList?.contains("erc-watch-more-episodes")) {
                    const nextEpisode = node.querySelector('[data-t="next-episode"]')
                    nodeValue = nextEpisode

                }
            })
        }
    })
})
```

Esto solucionaba el problema a primera vista, pero al ser una SPA la pagina solo cargaba una vez y este script originalmente se ejecutaba únicamente cuando la pagina cargaba por primera vez. Para solucionar ese problema tuve que utilizar un service worker de la siguiente forma:

```javascript
chrome.webNavigation.onHistoryStateUpdated.addListener(async function ({ tabId, transitionType }) {
    await chrome.tabs.sendMessage(tabId, `crunchy_completed:${transitionType}`)
})
```
Con esto el script original se ejecutaba cada vez que el usuario navegaba por la página y así se pudo solucionar el problema y tener una extensión de chrome funcional.

### Result

<div class="img-carousel-blog">
<p align="center">
Antes:
<img sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_crunchyroll-after.png?alt=media&token=0f9fd32e-5d04-4f7c-a889-80d5fd041a81 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_crunchyroll-after.png?alt=media&token=5c8712d7-287b-45c1-aeaa-9740381ad283 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_crunchyroll-after.png?alt=media&token=b0e6dbbd-77fd-42da-899f-9c653a2f213c 400w" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fcrunchyroll-after.png?alt=media&token=217a620a-ab1e-40f6-aa76-07aaf8b8a00c">
</p>
</div>

<div class="img-carousel-blog">
<p align="center">Despues:
<img sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fcrunchyroll-before.png?alt=media&token=26ef6e2b-df78-42a8-8f51-da7c74456b2a 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_crunchyroll-before.png?alt=media&token=4e5faf50-7604-4eaa-a0ad-2ca71c995181 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_crunchyroll-before.png?alt=media&token=ef871ab0-6b53-4027-87d8-995c5a385fc9 400w" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_crunchyroll-before.png?alt=media&token=896d050d-9589-40d6-9187-8c8c028d1515">
</p>
</div>

Repositorio [aquí](https://github.com/JoseLuna12/crunchyroll-chrome-extension/) 👈 <br>





