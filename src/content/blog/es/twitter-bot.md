---
images:
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Freact-hero-twitter.png?alt=media&token=cfdd2870-884d-471c-a682-c9af85711b56"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_react-hero-twitter.png?alt=media&token=d6e897a3-8fa3-4af2-b512-881ff474035e"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_react-hero-twitter.png?alt=media&token=f7b55a31-ef8b-40fb-a250-ef4af5bbae29"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_react-hero-twitter.png?alt=media&token=6c2e2bd0-1362-455a-9db2-37ba683f5f47"
thumbnails: 
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Freact-thumbnail.png?alt=media&token=c26e9f80-0d83-406c-bd93-8b911b33e04c"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_react-thumbnail.png?alt=media&token=ea49cba5-d13e-403b-891f-28ca53bb0b05"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_react-thumbnail.png?alt=media&token=f82cf0c0-8526-4e23-9b55-443f8092687f"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_react-thumbnail.png?alt=media&token=b1d5db2b-d285-4831-8ee2-7e09899dea5b"
title: "Web App de peliculas para Twitter"
description: "Una web app que genera tweets sobre peliculas a partir de un solo titulo."
currentLanguage: "es"
date: "2022-09-10"
accent: "#387CA0"
languages: 
    - "es"
    - "en"
categories:
    - "React"
    - "Node"
    - "Web"
---
## Twitter Bot
Este proyecto existe porque buscaba la forma de automatizar una lista de películas que me gustaría ver. Al principio utilizaba la app Shortcuts de apple para crear notas cuando compartía el link de una película, con el tiempo se me vino la idea de hacer esta lista publica y la mejor plataforma para hacerlo fue Twitter.

Link del perfil [aquí](https://twitter.com/moonviesme) 👈

Comencé con el desarrollo del backend, una aplicación de node y todos los endpoints que iba a utilizar esta app.

**Stack:**<br>
React para el front end<br>
Express para el backend<br>
Supabase para la base de datos<br>

## Backend
El backend de esta aplicación fue la parte mas larga del proyecto ya que consta con 24 endpoints  los cuales se encargan de absolutamente todas las funcionalidades de la aplicación. 
Para acceder al contenido de las películas como actores, imágenes, títulos, año, etc. utilicé la api de The Movie Database y para twittear este contenido directamente la api de Twitter.

### Principales funcionalidades
El backend puede generar distintos tipos de tweets según el request, por ejemplo puede twitear una película únicamente con el nombre de esta o con el id de la api de The Movie Database. 

<p align="center">
    <img width="400" sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_twitter-single-movie.png?alt=media&token=493fa6c2-34f6-401e-80d8-4dceeb808d71 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_twitter-single-movie.png?alt=media&token=99a603a5-d0e6-46cb-93d1-3e18b4aad709 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_twitter-single-movie.png?alt=media&token=89301e24-751e-490b-bf09-fd4f048f9a22 400w" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Ftwitter-single-movie.png?alt=media&token=f5c12168-0883-4c14-8d71-d6419dffcb85">
</p>
Twittear la cinematografía de una o varias películas, con imágenes e información extra como el director y el cinematógrafo.

<p align="center">
    <img width="400" sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_twitter-cinematography.png?alt=media&token=96b189e7-9714-42a0-99ec-1bea8096fb3a 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_twitter-cinematography.png?alt=media&token=676e5b6d-fd54-4578-a76f-e69bbc9fc728 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_twitter-cinematography.png?alt=media&token=52c2ee23-f3e0-45c5-9868-1c4f812d0772 400w" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Ftwitter-cinematography.png?alt=media&token=1616c4cb-e094-4aad-8491-f02095cc44d5">
</p>

Twittear la banda sonora de una película únicamente con el nombre de esta o el id de The Movie Database y añadir un link hacia Spotify con el album.


<p align="center">
    <img width="400" sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_twitter-soundtrack.png?alt=media&token=8425ac8b-cb62-4b17-9937-a138801a0b61 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_twitter-soundtrack.png?alt=media&token=0a282dad-984a-4dc7-9f64-7d0e90a39d39 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_twitter-soundtrack.png?alt=media&token=1f55dd7a-ae37-487d-a919-5ec15dc797b4 400w" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Ftwitter-soundtrack.png?alt=media&token=0fb412e7-ca10-464f-b9be-fa46b63d9f9c">
</p>

Twittear las películas de algún director. Este endpoint es un poco mas complejo que los demás ya que tiene varios campos opcionales, por ejemplo se le puede enviar únicamente el nombre del director y este responde con un tweet con 3 películas de ese director, pero también se puede enviar las películas que queremos mostrar de este director y no solo eso, sino también agregar una imagen diferente para estas películas únicamente con el link.

<p align="center">
    <img width="400" sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_twitter-director.png?alt=media&token=2c6f3e24-b23a-4de7-9f71-8cf57902c63e 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_twitter-director.png?alt=media&token=74f28ada-c5f6-4e3f-890a-52f5c0e3d5c0 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_twitter-director.png?alt=media&token=d012be7f-f144-4a22-b48f-8bdde3b72149 400w" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Ftwitter-director.png?alt=media&token=dbd81af6-00c8-40ef-a969-63dacf11cdee">
</p>

Twittear acerca de una persona en especifico, se puede enviar el nombre de algún actor, director, cinematógrafo, etc y el backend genera un tweet con sus principales películas. Al igual que el endpoint de director este puede recibir una lista de películas especificas para que el backend obtenga información de ellas.

<p align="center">
    <img width="400" sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_twitter-featured-person.png?alt=media&token=d7cb4257-27f9-4baa-914a-aaa2bc0be3c6 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_twitter-featured-person.png?alt=media&token=86d2d58c-571b-4a1e-8a21-bc00e568cd30 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_twitter-featured-person.png?alt=media&token=621e3289-3be9-4749-b6ef-ddcc948abfae 400w" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Ftwitter-featured-person.png?alt=media&token=ecb988f4-5894-4e0f-80bc-9d4a163f5b78">
</p>

Twittear la paleta de colores de una imagen, este endpoint es el mas complejo de todos ya que usa una librería escrita en Rust ([pueden leer acerca de eso aquí](/dev/en/color-palette-generator) 👈 ) que extrae la paleta de colores de una imagen y la integra en una nueva imagen. 

<p align="center">
    <img width="400" sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_twitter-colorpalette.png?alt=media&token=4eb92f87-7d22-472d-bb67-d55c63355693 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_twitter-colorpalette.png?alt=media&token=e315287e-17db-4c02-8779-807e08ef14c5 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_twitter-colorpalette.png?alt=media&token=f318e9aa-8e6a-4d37-abe7-4dd66d470cf1 400w" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Ftwitter-colorpalette.png?alt=media&token=99daf47a-1fa7-4a86-9cdc-791cebfcef68">
</p>

El backend es bastante flexible y aparte de recibir la información necesaria para generar el contenido deseado también se puede mandar ciertas configuraciones.

### Configuraciones del backend

El backend cuenta con 6 configuraciones distintas que se pueden combinar.
- Images
- Ai
- Emoji
- Poster
- URL
- Later
- Thread 

No todas las opciones están disponibles para todos los endpoints porque depende mucho del tipo de contenido que se esta generando.

**Images:** esta opción le dice al backend si debe incluir o no imágenes, esta prendido por defecto.

**Ai:** esta opción le dice al backend si debe generar un resumen mas corto de la sinopsis de la película utilizando OpenAi api.<br>

**Emoji:** esta opción le dice al backend si debe generar emojis para describir el titulo de la película.<br>

**Poster:** esta opción le dice al backend que en vez de usar una imagen de una escena de la película utilice el póster.<br>

**URL:** esta opción la única que se envía con un payload al backend, cuando el backend recibe esta opción ubica el link al final del tweet.<br>

**Later:** esta opción hace que se guarde el tweet en una tabla de Supabase la cual su principal función es twittear automáticamente el contenido.<br>

**Thread:** esta opción solo esta activada para los endpoints que generan o hablan de varias películas o roles, si se activa esta opción el backend genera varios tweets sobre el actor, cinematógrafo, director, etc. en formato de thread en twitter.<br>

### Supabase
[Supabase](https://supabase.com/) es un servicio server less para bases de datos, el proyecto la usa como principal base de datos pero no solo eso, gracias a la funcionalidad llamada Edge Functions, se genero varios scripts que corren 2 veces al día todos los días. Los principales son retweetService y laterService.

**Retweet service:** Este servicio corre dos veces al día todos los días y escanea la base de datos con los tweets mas antiguos y los retwittea para así mantener la cuenta activa.

**Later Service:** este servicio corre dos veces al día todos los días y extrae las películas guardadas en una tabla diferente a la principal donde se guardan todas las películas con el tag Later discutido anteriormente. Este servicio lo que hace es twittear estas películas y eliminarlas de la base de datos para que se pueda crear varias películas nuevas que twittear pero en vez de hacerlo de inmediato lo hace a lo largo de la semana de una forma mas orgánica.

**Unretweet service:** Este servicio corre dos veces al día todos los días y escanea la base de datos con los tweets y busca los tweets que han sido retwitteados que tienen mas de 8 horas, los elimina y los unretwittea

## Front End
El front end de esta aplicación es bastante simple consta de únicamente botones e inputs donde se envía al baked la información y se muestra el tweet generado.
La parte mas compleja de este front end fue la edición de texto del tweet, ya que no siempre el tweet cumple con las normas de twitter como máximo de caracteres y esto lo puede mostrar el front end y se puede corregir por el usuario.


<div class="img-carousel-blog">
<p align="center">
        <img width="250" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Ftwitter-list.gif?alt=media&token=61019092-9548-414a-9150-2e3d2948105c">
</p>
<p align="center">
        <img width="250" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Ftwitter-movie.gif?alt=media&token=41ffc9b0-f92c-4a8b-bba6-9badde78121b">
</p>
<p align="center">
<img width="250" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Ftwitter-edit.gif?alt=media&token=9e3c348d-05c9-4a5e-90b0-7c505f702487">
</p>
</div>

Frontend repository [aquí](https://github.com/JoseLuna12/twitter_client) 👈 <br>
Backend repository [aquí](https://github.com/JoseLuna12/twitter_bot_movie) 👈<br>
Supabse Functions [aquí](https://github.com/JoseLuna12/twitter-supabase-functions) 👈<br>
