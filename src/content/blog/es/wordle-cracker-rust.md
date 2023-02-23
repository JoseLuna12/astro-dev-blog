---
image: "/blog-heros/hero-rust-wordle.png"
thumbnail: "/blog-thumbnails/wordle-rust-thumb.png"
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


<p align="center"><img src="/blog-resources/wordle1.png" width="550"></p>

```
cargo run en lastLetter e
```

<p align="center"><img src="/blog-resources/wordle2.png" width="550"></p>

```
cargo run en pattern __gue
```

<p align="center"><img src="/blog-resources/wordle3-solved.png" width="550"></p>
</div>

link to my [repo](https://github.com/JoseLuna12/wordle-cracker)