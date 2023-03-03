---
image: "/blog-heros/color-palette-rust-hero.png"
thumbnail: "/blog-thumbnails/color-palette-rust-thumb.png"
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
![Node image generator](/blog-resources/node-palette-example.png)
Mientras que la version WASM
- 281 ms
- 55 kb
![Wasme image generator](/blog-resources/wasm-palette-example.png)
La solución WASM fue más de 10 veces más rápida, valió completamente la pena.

## Pensamientos finales 
La biblioteca wasm fue realmente eficaz, y debido a que fue construida usando rust, hacer cambios y agregar funciones es realmente fácil debido a lo seguro que es este lenguaje, lo recomendaría totalmente si tiene problemas de velocidad en sus algoritmos de javascript.

Puede consultar el script de la biblioteca [aquí](https://github.com/JoseLuna12/image-color-palette-generator-wasm)

## Ejemplos
![After sun palette](/blog-resources/color_palette_example.png)
![Birdman palette](/blog-resources/birdman-palette.png)
![Grand hotel budapest palette](/blog-resources/grand-palette.png)

