---
image: "/blog-heros/color-palette-rust-hero.png"
thumbnail: "/blog-thumbnails/color-palette-rust-thumb.png"
title: "A Wasm library built in rust"
description: "This rust script recieves an image as input and return the same image with its color palette"
currentLanguage: "en"
date: "03-03-2023"
accent: "#000000"
languages: 
    - "en"
    - "es"
categories:
    - "Rust"
---

## The Idea
Some time ago I wanted to build a web service that generate the image palette from another image. Because I was working on node, I choose to build the solution using javascript too.
For extracting the colors I used a library called `color-thief`, then another library called `color-sorter` that sorts the colors in a pleacent way. The Service recieves a url of an image, transform it to a buffer and process it to extract all the color data (palette), then by using a library `node-html-to-image` I was able to design the image I wanted to recieve.

This is an example of how the image was generated:
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
## The problem
All worked well, the service was doing what it had to do but with one simple problem, it was too slow, some requests took about 7 to 15 seconds to resolve. The first approach was to separate the service into two, one would generate the color palette and store it in a database, and the second one would recieve only the id of the item in the database and generate the image, but it was still slow. This was a mayor problem thats why I looked for other solutions.

## The WASM solution
My new idea was to rebuild that process using a faster language, in this case Rust, and compile it to a node package using `wasm-bindgen`.

Only two crates where used to build this package, `image` and `palette_extract`. The image crate helped me with the image manipulation, edit, decode and encoding of the image, the plaette_extract crate helped me with getting the rgb values of the colors inside the image.

The first solution I built was a console application that worked with local files or internet images with the url (you can check it [here](https://github.com/JoseLuna12/color_palette_generator)). It worked really well so I decided to use it to build the node package I needed.

The second version was more complex, it used `wasm-bindgen` to be able to compile it into wasm and the same crates of the console version but with some custom utility scripts built by me. For example a struct that transforms RGB values to HSV, with this new values I was able to sort the colors in many ways by their Hue, Saturation or even luminousness. This color sorting script was made posible thanks to this awsome [blog post](https://www.alanzucconi.com/2015/09/30/colour-sorting/) that explains many algorithms to sort colors.

I encountered two main problems that slowed me down during this development, the first problem was that I did not know how to send an image from javascript to rust, I tried Buffer, Blob, Base64 and many more but at the end UnitVector8 was the solution. The second problem was that I did not know how to send back an image from Rust, the solution took me a while to investigate but finally I was able to use the Cursor struct in the Std library to write a buffer of the generated image and then turn it back to a `Vec<8>` wich in javascript was interpreted as a UnitVector8.

## Testing
Once the script was completly functional I was able to import it to my backend service and finally test if was worth using it. On previous tests on a simple client app it was really fast, but I was not sure if it was going to be as fast in a node project.

For this test I built two new endpoints, both of them recieves the same input, the url of the image to work on. The first endpoint was the one I built using javascript and the result was, on a 800x1200 image:
- 6.49 s
- 396 kb
![Node image generator](/blog-resources/node-palette-example.png)
While on the wasm version
- 281 ms
- 55 kb
![Wasme image generator](/blog-resources/wasm-palette-example.png)
The WASM solution was more than 10 times faster, it was completely worth it.

## Final thoughts 
The wasm library was really amazing and performant, and because it was built using rust, making changes and adding features is really easy because of how safe this language is, I would totally recomend it if you are having speed problems on your javascript algorithms. 

You can check out the library script [here](https://github.com/JoseLuna12/image-color-palette-generator-wasm)

## Examples
![After sun palette](/blog-resources/color_palette_example.png)
![Birdman palette](/blog-resources/birdman-palette.png)
![Grand hotel budapest palette](/blog-resources/grand-palette.png)

