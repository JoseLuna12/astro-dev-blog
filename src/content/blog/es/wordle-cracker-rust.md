---
images:
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fhero-rust-wordle.png?alt=media&token=043b1cae-5af2-4d61-8d3e-afa65d7e7625"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_hero-rust-wordle.png?alt=media&token=6098d0f4-47a2-4cd6-bd92-ecd3ac124cf6"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_hero-rust-wordle.png?alt=media&token=99e12d83-c60e-4dcc-afe0-6fd514a415ec"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_hero-rust-wordle.png?alt=media&token=457cfda0-794f-4e22-ab63-b50b3f14f24c"
thumbnails: 
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fwordle-rust-thumb.png?alt=media&token=5fab2aa9-c795-4a84-87ca-8525b444c30b"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_wordle-rust-thumb.png?alt=media&token=e13654d3-e186-4a10-9747-ad9294ad2b57"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_wordle-rust-thumb.png?alt=media&token=2f5e358e-a200-45a5-bf72-f15870e4c1a4"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_wordle-rust-thumb.png?alt=media&token=68a8ab5c-7db3-45d6-89b3-da73e95228c5"
title: "Wrodle cracker en Rust"
description: "Una aplicación de consola escrita en Rust para adivinar la palabra del dia de Wordle."
currentLanguage: "es"
date: "23-02-2023"
accent: "#000000"
languages: 
    - "en"
    - "es"
categories:
    - "Rust"
---

## Wordle Cracker
[Wordle](https://www.nytimes.com/games/wordle/index.html) es un juego muy popular donde el objetivo es adivinar la palabra del día. Todos los dias la palabra cambia y tienes 6 chances para adivinarla. La única retroalimentación del juego es que cada vez que escribes una palabra, cada letra cambia de color, verde si la letra es correcta y está en el lugar correcto, amarillo si la letra es correcta pero en el lugar equivocado y gris si la letra está incorrecta.
Con esta retroalimentación la aplicación es capaz de dar palabras que cumplan con esas restricciones.

### Comandos
La aplicación trabaja con seis simples comandos.
- *firstLetter*: recive una letra y retorna todas las palabras que terminan con ella.
- *lastLetter*: recive una letra y retorna todas las palabras que terminan con ella.
- *contains*: recive multiples letras y retorna todas las palabras que las contienen.
- *incorrectWords*: recive multiples letras y filtra todas las palabras que las contienen.
- *pattern*: recive un patrón como `h _ _ s e` y retorna todas las palabras que coinciden con la posición de las letras.
- *staticLetters*: recive un grupo de letras y retorna todas las palabras que las contiene sin inportar la posición.
#### Comandos utilitarios
No todos los comandos ayudan solo con filtrar las palabras, hay algunos comandos que sirven para el sistema mismo.
- *save*: Guarda localmente todas las palabras que se extrae de internet en un archivo local.
- *read*: Lee todas las palabras guardadas localmente y las imprime en la consola.
Esta aplicación también soporta palabras en español, el primer parametro en el comando puede ser `en` o `es` para escoger un lenguaje

### Cómo se obtienen las palabras
Las palabras se obtienen usando la tecnologia de `web scrapping` donde se escanea una pagina web y se extrae sus datos programaticamente.
```rust
fn get_query_object<'l>(lang: &'l Langs) -> QueryObject {
    match lang {
        Langs::En => QueryObject {
            url: String::from("https://wordfind.com/length/5-letter-words"),
            selector: String::from("li.dl>a"),
        },
        Langs::Es => QueryObject {
            url: String::from("https://muchaspalabras.com/5-letras/diccionario"),
            selector: String::from("ul.inline-list.words.group0.sort>li>a"),
        },
    }
}
```
En este ejemplo se crea un struct dependiendo del lenguaje, con esto la función que extrae los datos sabe donde y cual selector usar.

## Ejemplo
<div class="img-carousel-blog-col">

```
cargo run en includes u,e
```


<p align="center">
    <img width="550" sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_wordle1.png?alt=media&token=221b6e04-1cd6-4221-96c5-72f1bec40b9d 1200w,https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_wordle1.png?alt=media&token=469f19b3-2b01-4196-bcaa-cf8e28b681cd 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_wordle1.png?alt=media&token=de7181db-8d80-497e-91e5-5ad2aa725494 400w" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fwordle1.png?alt=media&token=6a5620de-c805-457f-bf21-7156e510d429">
</p>


```
cargo run en lastLetter e
```

<p align="center">
    <img width="550" sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_wordle2.png?alt=media&token=977330ac-750f-47eb-9bb4-951da7ed75cd 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_wordle2.png?alt=media&token=97988ed5-7860-46f4-b308-5740721d9f6e 800w,  https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_wordle2.png?alt=media&token=46a2625b-eb50-4099-ba09-afc2e3687875 400w" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_wordle2.png?alt=media&token=977330ac-750f-47eb-9bb4-951da7ed75cd">
</p>


```
cargo run en pattern __gue
```

<p align="center">
        <img width="550" sizes="(min-width: 720px) 720px, 100vw"  srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_wordle3-solved.png?alt=media&token=bfeb02bb-6ee7-4e9e-9ec8-edc1111a0afc 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_wordle3-solved.png?alt=media&token=183baa7a-6bd5-41dd-82db-4ed360644030 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_wordle3-solved.png?alt=media&token=799935e4-b8e9-41f5-9792-51bf238282ba 400w" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fwordle3-solved.png?alt=media&token=51abd4b7-da98-4450-ba9f-19276fc9f3df">
</p>
</div>

link to my [repo](https://github.com/JoseLuna12/wordle-cracker)