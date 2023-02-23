---
image: "/blog-heros/hero-rust-wordle.png"
thumbnail: "/blog-thumbnails/wordle-rust-thumb.png"
title: "Wordle cracker in Rust"
description: "A Rust console application to guess the current Wordle word."
currentLanguage: "en"
date: "23-02-2023"
accent: "#000000"
languages: 
    - "en"
    - "es"
categories:
    - "Rust"
---

## Wordle Cracker
[Wordle](https://www.nytimes.com/games/wordle/index.html) is a popular game where the main goal is to guess the daily word. Each day there is a new word and you have six chances to guess it. The only feedback that you have is that every time you type a word, each letter will get a color, green if the letter is correct and in the correct place, yellow if the letter is correct but in the wrong place and gray if the letter is incorrect.
With this feedback the application is able to give you words that match with the information.

### Commands
The application work with six simple commands.
- *firstLetter*: recieves a letter and return all the words that start with that letter.
- *lastLetter*: recieves a letter and return all the words that ends with that letter.
- *contains*: recieves multiple letters and return all the words that include that letters.
- *incorrectWords*: recieves multiple letters and filter all the letters that include those letters.
- *pattern*: recieves a pattern like `h _ _ s e` and return all the words that match with the position of the letters.
- *staticLetters*: recieves a group of letters and and return all the words that contains that chain of characters.
#### Utils commands
Not all commands help you sorting the list of words, there are a few that make some utility for the system itself.
- *save*: Saves a local file of the words so the program reads it every time instead of extracting them from the internet
- *read*: Reads the local file and print them to the console.
This application also supports spanish, the first parametter given can be `en` or `es` to choose a language.

### How do we access all words
All words are obtained using `web scrapping`, a function scans a web and stracts all its data.
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
In this example, a struct is created depending on the language and the scrapping function pulls all the data from the selected url and uses the current selector.
## Examples
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