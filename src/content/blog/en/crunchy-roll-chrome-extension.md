---
image: "/blog-heros/crunchyroll-hero.png"
thumbnail: "/blog-thumbnails/crunchyroll-thumb.png"
title: "Extension for Crunchyroll.com"
description: "This extension for Crunchyroll prevents spoilers and enhances the platform's viewing experience."
currentLanguage: "en"
date: "04-06-2023"
accent: "#F37422"
languages:
    - "en"
    - "es"
categories:
    - "Web"
---

# Crunchyroll Extension for Google Chrome

### Issue
This project originated primarily to prevent spoilers or obtaining information about the next episode on the list. Often in anime, episode titles can spoil the experience by essentially giving away what will happen. The problem arose when I realized that it was very easy to read the name of the next episode, which revealed even more information that I personally would have preferred not to see.

### Solution
Build an extension for Google Chrome that replaces the content displaying information about the next episode with more generic information, such as just the episode number.

**Stack:**
Javascript

#### Development Challenges
Since Crunchyroll is a web app where not all information comes directly from the server, it was more challenging to locate the components containing the desired information.

Upon the initial load, the component or div containing information about the next episode did not exist, presumably because this component was rendered on the client side. However, while navigating through the page after the initial load, the component was included in the DOM from the beginning.

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

To address this, a combination of techniques was employed:

First, an attempt was made to locate the component using `querySelector`. If this returned empty, the MutationObserver class was used, which helps detect changes in the DOM.

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

This initially appeared to solve the problem, but since the page was a Single Page Application (SPA) that only loaded once, the original script only ran when the page loaded for the first time. To address this, a service worker was used as follows:

```javascript
chrome.webNavigation.onHistoryStateUpdated.addListener(async function ({ tabId, transitionType }) {
    await chrome.tabs.sendMessage(tabId, `crunchy_completed:${transitionType}`)
})
```
With this approach, the original script executed each time the user navigated through the page. This resolved the issue and resulted in a functional Chrome extension.

### Result

<div class="img-carousel-blog">
<p align="center">After:<img src="/blog-resources/crunchyroll-after.png" width="800"></p>

</div>
<div class="img-carousel-blog">
<p align="center">Before:<img src="/blog-resources/crunchyroll-before.png" width="800"></p>
</div>

Repository [here](https://github.com/JoseLuna12/crunchyroll-chrome-extension/) 👈 <br>
