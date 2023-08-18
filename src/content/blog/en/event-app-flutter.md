---
images:
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fevent-app-flutter-ss.png?alt=media&token=f4f77ac6-42c3-4ab5-bed4-25d9c2836750"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_event-app-flutter-ss.png?alt=media&token=4d522a10-1ac6-4c48-9911-97059467c818"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_event-app-flutter-ss.png?alt=media&token=396bfa20-32d3-4c6c-b1c0-73eacea877b1"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_event-app-flutter-ss.png?alt=media&token=8f9c5f97-db31-4519-95a1-a0652808caf5"
thumbnails: 
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fevent-app-flutter-thumb.png?alt=media&token=69c26b2b-a84f-437c-bc90-11eb0a0847f2"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_event-app-flutter-thumb.png?alt=media&token=2b55d218-44f3-42de-aa6f-fe58320a6cd2"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_event-app-flutter-thumb.png?alt=media&token=244b55ea-08df-480a-9e98-f7b6ec95d1d9"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_event-app-flutter-thumb.png?alt=media&token=15383cff-4372-451b-a25a-3e4377032a82"
title: "Events App UI with Flutter"
description: "A simple interface for an events app built with Flutter."
currentLanguage: "en"
date: "22-02-2023"
accent: "#46D1FD"
languages: 
    - "es"
    - "en"
categories:
    - "Flutter"
    - "Mobile"
---
> Flutter is an open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase. [site](https://flutter.dev/)

### Design reference
<p align="center">
<picture>
<source sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_flutter-events-reference.png?alt=media&token=a1cf9fe0-ac8f-4240-94c1-6363a609886d 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_flutter-events-reference.png?alt=media&token=6a730a33-2b24-4581-88bf-3b674f820235 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_flutter-events-reference.png?alt=media&token=f4644220-790b-47cf-b819-bab34be7058f 400w">
<img src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fflutter-events-reference.png?alt=media&token=cba4168b-bcb5-470c-9e9c-ce0c7490c610">
</picture>
</p>

### Key app features
- This app has two custom navBars, one for the home page and one for the event page.
- All events come from a constants file where a list of Event class are hardcoded.

### Result

<div class="img-carousel-blog">
<p align="center">
    <img src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fflutter-event-demo.gif?alt=media&token=c4afd336-6dc8-407e-9b59-e7b6e569d22e">
</p>
<p align="center">
<picture width="250">
<source sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_event-app-homeScreen.png?alt=media&token=24ae9ded-f6c5-47c2-92e9-f2f2a3ba2ccc 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_event-app-homeScreen.png?alt=media&token=2893b8ce-6d00-435a-96e0-cb9c337129af 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_event-app-homeScreen.png?alt=media&token=efdb343a-b8cc-43e3-bad1-046be6492d3d 400w">
<img src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fevent-app-homeScreen.png?alt=media&token=e0e7641b-0862-4d33-98a7-07f2ad485827">
</picture>
</p>
<p align="center">
<picture width="250">
<source sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_event-app-eventscreen.png?alt=media&token=4c31ee03-46a8-4636-bb5b-7e2a081d853a 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_event-app-eventscreen.png?alt=media&token=3a98aebe-090a-49a7-9ce3-2c4d19060514 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_event-app-eventscreen.png?alt=media&token=5d87638d-5f94-40c9-95bb-97d5f8e24d9f 400w">
<img src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fevent-app-eventscreen.png?alt=media&token=2fb371e7-ce83-4894-a478-390d7927c34c">
</picture>
</p>
</div>

Repository [here](https://github.com/JoseLuna12/event-app-flutter) 👈 <br>
