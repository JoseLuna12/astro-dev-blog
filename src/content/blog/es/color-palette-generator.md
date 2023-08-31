---
images:
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fcolor-palette-rust-hero.png?alt=media&token=37569170-9ee6-422b-aa05-9cde31a26b71"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_color-palette-rust-hero.png?alt=media&token=3ecb4468-2495-4a82-a629-a08b890d1386"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_color-palette-rust-hero.png?alt=media&token=c5f609ed-62c1-480f-9846-e582b440a513"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_color-palette-rust-hero.png?alt=media&token=a1c5a451-dd79-4e8e-b171-d2b3b53635f8"
thumbnails: 
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fcolor-palette-rust-thumb.png?alt=media&token=93efdb64-0a00-4c25-8df3-d0eb04c12df1"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_color-palette-rust-thumb.png?alt=media&token=693a376a-7dfb-4f31-9640-72a3d3004f12"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_color-palette-rust-thumb.png?alt=media&token=0557f762-6203-4437-bb8f-3a6e52243000"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_color-palette-rust-thumb.png?alt=media&token=50261796-e930-4b12-bd4a-9d3b68e49ed7"
title: "Una librería WASM construida en Rust"
description: "Esta librería recibe una imagen y retorna la misma imagen con su paleta de colores."
currentLanguage: "es"
date: "03-03-2023"
accent: "#000000"
languages: 
    - "en"
    - "es"	
categories:
    - "Rust"
---

## La Idea
Hace algún tiempo quise construir un servicio web que generara la paleta de colores a partir de otra imagen. Debido a que estaba trabajando en Nodejs, elegí construir el endpoint usando javascript también.
Para extraer los colores utilicé una biblioteca llamada `color-thief`, luego otra biblioteca llamada `color-sorter` que ordena los colores de una manera agradable. El servicio recibe una URL de una imagen, la transforma en un búfer y la procesa para extraer todos los datos de color (paleta), luego, al usar una biblioteca `node-html-to-image`, pude diseñar la imagen que quería recibir.

Este es un ejemplo de como se genera la imagen en node:
```javascript
async function generateImagePalette({url, palette, name}){
	const colors = palette.map(color => `rgb(${color.r}, ${color.g}, ${color.b})`)
	const colorPalleteDiv = (rgb) => `
	<div style="background-color: ${rgb}; flex: 1; height: 90px;" >
	</div>
	`
	const colorsPaletteDivAll = colors.map(c => colorPalleteDiv(c)).join("")
	const imageDiv = `
	<div style="position: relative">
	<img style="width: 100%;" src="{{imageSource}}" alt="" />
	<div style="display: flex;">
	${colorsPaletteDivAll}
	</div>
	`
	const res = await htmlToImage(imageDiv, url)
	return res
}
```
## El problema
Todo funcionó bien, el servicio estaba haciendo lo que tenía que hacer, pero con un problema simple, era demasiado lento, algunas solicitudes tardaban entre 7 y 15 segundos en resolverse. Mi primer enfoque fue separar el servicio en dos, uno generaría la paleta de colores y la almacenaría en una base de datos, y el segundo recibiría solo la identificación del elemento en la base de datos y generaría la imagen, pero aún así fue lento. Este era un problema mayor, por eso busqué otras soluciones.

## La solucion WASM
Mi nueva idea era reconstruir ese proceso usando un lenguaje más rápido, en este caso Rust, y compilarlo en un paquete de nodos usando `wasm-bindgen`.

Solo se usaron dos crates para construir este paquete, `image` y `palette_extract`. El crate de imágenes me ayudó con la manipulación, edición, decodificación y codificación de la imagen, el create plaette_extract me ayudó a obtener los valores rgb de los colores dentro de la imagen.

La primera solución que construí fue una aplicación de consola que funcionaba con archivos locales o imágenes de Internet con la url (puedes consultarla [aquí](https://github.com/JoseLuna12/color_palette_generator)). Funcionó muy bien, así que decidí usarlo para construir el paquete de Nodejs que necesitaba.

La segunda versión era más compleja, usaba `wasm-bindgen` para poder compilarlo en wasm y los mismos crates de la versión de consola pero con algunos scripts de utilidad personalizados creados por mí. Por ejemplo, un struct que transforma los valores RGB a HSV, con estos nuevos valores pude clasificar los colores de muchas maneras por su tono, saturación o incluso luminosidad. Este script de clasificación de colores fue posible gracias a esta increíble [publicación de blog](https://www.alanzucconi.com/2015/09/30/colour-sorting/) que explica muchos algoritmos para clasificar colores.

Encontré dos problemas principales que retrasaron durante este desarrollo, el primer problema fue que no sabía cómo enviar una imagen de javascript a rust, probé Buffer, Blob, Base64 y muchos más, pero al final UnitVector8 fue la solución. El segundo problema fue que no sabía cómo devolver una imagen de Rust a javascript, la solución me llevó un tiempo investigar, pero finalmente pude usar el srtuct Cursor en la biblioteca Std para escribir un búfer de la imagen generada y luego vuélvalo a convertir en un `Vec<8>` que en javascript se interpretó como un UnitVector8.

## Pruebas
Una vez que el script estuvo completamente funcional, pude importarlo a mi servicio backend y finalmente probar si valía la pena usarlo. Pruebas anteriores en una aplicación web simple, fue realmente rápido, pero no estaba seguro de si iba a ser tan rápido en un proyecto de Node.


Para esta prueba, construí dos nuevos endpoints, ambos reciben la misma entrada, la URL de la imagen para trabajar. El primer endpoint fue el que construí usando javascript y el resultado fue, en una imagen de 800x1200:
- 6.49 s
- 396 kb

<img sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_node-palette-example.png?alt=media&token=a1fa9f3f-d541-4239-9cf4-d8293cc488b7 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_node-palette-example.png?alt=media&token=061caf96-3c3d-46ce-90a4-f7769b34c8c4 800w, 
https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_node-palette-example.png?alt=media&token=6b1ea967-0497-4dc7-88f4-e5081c6577f3 400w" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fnode-palette-example.png?alt=media&token=d5fcfd5d-8e4e-4eca-9e72-cee1bf859e07">

Mientras que la version WASM
- 281 ms
- 55 kb

<img sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_wasm-palette-example.png?alt=media&token=d3186d98-9dc3-4813-9b82-044f5fb31be1 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_wasm-palette-example.png?alt=media&token=1e5710c1-5f8b-4676-8d3c-21d2a579b44d 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_wasm-palette-example.png?alt=media&token=60112f12-04f6-4030-962b-50f8af481804 400w" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fwasm-palette-example.png?alt=media&token=96911b05-be90-499a-b4bf-fc21b298692d">

La solución WASM fue más de 10 veces más rápida, valió completamente la pena.

## Pensamientos finales 
La biblioteca wasm fue realmente eficaz, y debido a que fue construida usando rust, hacer cambios y agregar funciones es realmente fácil debido a lo seguro que es este lenguaje, lo recomendaría totalmente si tiene problemas de velocidad en sus algoritmos de javascript.

Puede consultar el script de la biblioteca [aquí](https://github.com/JoseLuna12/image-color-palette-generator-wasm)

## Ejemplos

<div class="img-carousel-blog">
<p align="center">
<img sizes="(min-width: 720px) 720px, 100vw"  srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_color_palette_example.jpg?alt=media&token=20733a95-65f1-4eeb-a161-defc11d88fb5 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_color_palette_example.jpg?alt=media&token=2b04a0d6-6007-4b73-9036-aad685d1e8bf 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_color_palette_example.jpg?alt=media&token=6f1a970c-4670-41ef-b5c9-d4f7d992ef7d 400w" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fcolor_palette_example.jpg?alt=media&token=c0b5e68a-ff79-4740-9626-32c6b1919ef1">
</p>
</div>

<div class="img-carousel-blog">
<p align="center">
<img sizes="(min-width: 720px) 720px, 100vw"  srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fbirdman-palette.jpg?alt=media&token=e092f903-daff-424b-84ed-9989500ba78b 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_birdman-palette.jpg?alt=media&token=6f7bf654-1fce-48f3-8823-c98e5a8a5f06 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_birdman-palette.jpg?alt=media&token=5f664f46-affa-4d60-aac3-46dcfa5af0e4 400w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_birdman-palette.jpg?alt=media&token=705f6473-15d2-45a2-8cc3-7d9f0ce52058 100w" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fbirdman-palette.jpg?alt=media&token=e092f903-daff-424b-84ed-9989500ba78b">
</p>
</div>

<div class="img-carousel-blog">
<p align="center">
<img sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_grand-palette.jpg?alt=media&token=3754821e-f9e7-4a5d-9dc5-2aa170f2f0de 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_grand-palette.jpg?alt=media&token=27373741-0597-4bde-bafb-c73fa54cba3a 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_grand-palette.jpg?alt=media&token=1f91509e-fdc2-4a3e-8519-de6bf355bbb4 400w" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fgrand-palette.jpg?alt=media&token=775071ca-b535-4ae4-831b-9a695f404ed1">
</p>
</div>





