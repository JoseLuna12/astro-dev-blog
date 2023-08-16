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


<p align="center">
    <picture>
        <source sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_wordle1.png?alt=media&token=221b6e04-1cd6-4221-96c5-72f1bec40b9d 1200w,https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_wordle1.png?alt=media&token=469f19b3-2b01-4196-bcaa-cf8e28b681cd 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_wordle1.png?alt=media&token=de7181db-8d80-497e-91e5-5ad2aa725494 400w">
        <img width="550" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fwordle1.png?alt=media&token=6a5620de-c805-457f-bf21-7156e510d429">
    </picture>
</p>

```
cargo run en lastLetter e
```

<p align="center">
    <picture>
        <source sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_wordle2.png?alt=media&token=977330ac-750f-47eb-9bb4-951da7ed75cd 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_wordle2.png?alt=media&token=97988ed5-7860-46f4-b308-5740721d9f6e 800w,  https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_wordle2.png?alt=media&token=46a2625b-eb50-4099-ba09-afc2e3687875 400w">
        <img width="550" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_wordle2.png?alt=media&token=977330ac-750f-47eb-9bb4-951da7ed75cd">
    </picture>
</p>

```
cargo run en pattern __gue
```

<p align="center">
<picture>
        <source sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_wordle3-solved.png?alt=media&token=bfeb02bb-6ee7-4e9e-9ec8-edc1111a0afc 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_wordle3-solved.png?alt=media&token=183baa7a-6bd5-41dd-82db-4ed360644030 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_wordle3-solved.png?alt=media&token=799935e4-b8e9-41f5-9792-51bf238282ba 400w">
        <img width="550" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fwordle3-solved.png?alt=media&token=51abd4b7-da98-4450-ba9f-19276fc9f3df">
    </picture>
</p>
</div>

link to my [repo](https://github.com/JoseLuna12/wordle-cracker)