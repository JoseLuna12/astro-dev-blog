---
image: "/blog-heros/react-hero-twitter.png"
thumbnail: "/blog-thumbnails/react-thumbnail.png"
title: "Web App de peliculas para Twitter"
description: "Esta Web App genera tweets con solo proporcionar el nombre de una pelicula y las postea."
currentLanguage: "es"
date: "10-09-2022"
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
<img width="400" src="/blog-resources/twitter-single-movie.png">
</p>

Twittear la cinematografía de una o varias películas, con imágenes e información extra como el director y el cinematógrafo.

<p align="center">
<img width="400" src="/blog-resources/twitter-cinematography.png">
</p>

Twittear la banda sonora de una película únicamente con el nombre de esta o el id de The Movie Database y añadir un link hacia Spotify con el album.

<p align="center">
<img width="400" src="/blog-resources/twitter-soundtrack.png">
</p>

Twittear las películas de algún director. Este endpoint es un poco mas complejo que los demás ya que tiene varios campos opcionales, por ejemplo se le puede enviar únicamente el nombre del director y este responde con un tweet con 3 películas de ese director, pero también se puede enviar las películas que queremos mostrar de este director y no solo eso, sino también agregar una imagen diferente para estas películas únicamente con el link.

<p align="center">
<img width="400" src="/blog-resources/twitter-director.png">
</p>

Twittear acerca de una persona en especifico, se puede enviar el nombre de algún actor, director, cinematógrafo, etc y el backend genera un tweet con sus principales películas. Al igual que el endpoint de director este puede recibir una lista de películas especificas para que el backend obtenga información de ellas.
<p align="center">
<img width="400" src="/blog-resources/twitter-featured-person.png">
</p>

Twittear la paleta de colores de una imagen, este endpoint es el mas complejo de todos ya que usa una librería escrita en Rust ([pueden leer acerca de eso aquí](/dev/en/color-palette-generator) 👈 ) que extrae la paleta de colores de una imagen y la integra en una nueva imagen. 
<p align="center">
<img width="400" src="/blog-resources/twitter-colorpalette.png">
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
<p align="center"><img src="/blog-resources/twitter-list.gif" width="250"></p>
<p align="center"><img src="/blog-resources/twitter-movie.gif" width="250"></p>
<p align="center"><img src="/blog-resources/twitter-edit.gif" width="250"></p>
</div>

Frontend repository [aquí](https://github.com/JoseLuna12/twitter_client) 👈 <br>
Backend repository [aquí](https://github.com/JoseLuna12/twitter_bot_movie) 👈<br>
Supabse Functions [aquí](https://github.com/JoseLuna12/twitter-supabase-functions) 👈<br>
