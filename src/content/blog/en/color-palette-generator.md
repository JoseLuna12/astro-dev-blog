---
draft: true
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

<picture>
<source sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_node-palette-example.png?alt=media&token=a1fa9f3f-d541-4239-9cf4-d8293cc488b7 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_node-palette-example.png?alt=media&token=061caf96-3c3d-46ce-90a4-f7769b34c8c4 800w, 
https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_node-palette-example.png?alt=media&token=6b1ea967-0497-4dc7-88f4-e5081c6577f3 400w">
<img src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fnode-palette-example.png?alt=media&token=d5fcfd5d-8e4e-4eca-9e72-cee1bf859e07">
</picture>

While on the wasm version
- 281 ms
- 55 kb

<img  sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_wasm-palette-example.png?alt=media&token=d3186d98-9dc3-4813-9b82-044f5fb31be1 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_wasm-palette-example.png?alt=media&token=1e5710c1-5f8b-4676-8d3c-21d2a579b44d 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_wasm-palette-example.png?alt=media&token=60112f12-04f6-4030-962b-50f8af481804 400w" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fwasm-palette-example.png?alt=media&token=96911b05-be90-499a-b4bf-fc21b298692d">

The WASM solution was more than 10 times faster, it was completely worth it.

## Final thoughts 
The wasm library was really amazing and performant, and because it was built using rust, making changes and adding features is really easy because of how safe this language is, I would totally recomend it if you are having speed problems on your javascript algorithms. 

You can check out the library script [here](https://github.com/JoseLuna12/image-color-palette-generator-wasm)

## Examples

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


