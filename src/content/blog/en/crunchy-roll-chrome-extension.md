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
<p align="center">Before:
<picture>
<source sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_crunchyroll-after.png?alt=media&token=0f9fd32e-5d04-4f7c-a889-80d5fd041a81 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_crunchyroll-after.png?alt=media&token=5c8712d7-287b-45c1-aeaa-9740381ad283 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_crunchyroll-after.png?alt=media&token=b0e6dbbd-77fd-42da-899f-9c653a2f213c 400w">
<img src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fcrunchyroll-after.png?alt=media&token=217a620a-ab1e-40f6-aa76-07aaf8b8a00c">
</picture>
</p>
</div>

<div class="img-carousel-blog">
<p align="center">After:
<picture>
<source sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fcrunchyroll-before.png?alt=media&token=26ef6e2b-df78-42a8-8f51-da7c74456b2a 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_crunchyroll-before.png?alt=media&token=4e5faf50-7604-4eaa-a0ad-2ca71c995181 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_crunchyroll-before.png?alt=media&token=ef871ab0-6b53-4027-87d8-995c5a385fc9 400w">
<img src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_crunchyroll-before.png?alt=media&token=896d050d-9589-40d6-9187-8c8c028d1515">
</picture>
</p>
</div>

Repository [here](https://github.com/JoseLuna12/crunchyroll-chrome-extension/) 👈 <br>
