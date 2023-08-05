---
image: "/blog-heros/crunchyroll-hero.png"
thumbnail: "/blog-thumbnails/crunchyroll-thumb.png"
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

Repositorio [aquí](https://github.com/JoseLuna12/crunchyroll-chrome-extension/) 👈 <br>





