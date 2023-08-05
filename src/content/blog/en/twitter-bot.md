---
image: "/blog-heros/react-hero-twitter.png"
thumbnail: "/blog-thumbnails/react-thumbnail.png"
title: "Movie Web App for Twitter"
description: "This Web App generates tweets by providing just the name of a movie and posts them."
currentLanguage: "en"
date: "10-09-2022"
accent: "#387CA0"
languages:
    - "en"
    - "es"
categories:
    - "React"
    - "Node"
    - "Web"
---

## Twitter Bot
This project exists because I was looking for a way to automate a list of movies I would like to watch. Initially, I used Apple's Shortcuts app to create notes when I shared a movie link. Over time, the idea of making this list public came to me, and Twitter seemed to be the best platform for it.

Profile link [here](https://twitter.com/moonviesme) 👈

I began by developing the backend, a Node.js application with all the endpoints that this app would use.

**Stack:**<br>
React for the front end<br>
Express for the backend<br>
Supabase for the database<br>

## Backend
The backend of this application was the longest part of the project, as it consists of 24 endpoints that handle all the app's functionalities. To access movie details such as actors, images, titles, year, etc., I used The Movie Database API, and to tweet this content, I utilized the Twitter API.

### Key Features
The backend can generate different types of tweets based on the request. For example, it can tweet a movie with just its name or with the ID from The Movie Database API.

<p align="center">
<img width="400" src="/blog-resources/twitter-single-movie.png">
</p>

Tweeting the cinematography of one or multiple movies, including images and extra information like the director and cinematographer.

<p align="center">
<img width="400" src="/blog-resources/twitter-cinematography.png">
</p>

Tweeting the soundtrack of a movie with just its name or The Movie Database ID and adding a link to the Spotify album.

<p align="center">
<img width="400" src="/blog-resources/twitter-soundtrack.png">
</p>

Tweeting movies by a specific director. This endpoint is a bit more complex than others, as it has various optional fields. For instance, you can send only the director's name, and it responds with a tweet containing 3 movies by that director. Additionally, you can specify the movies you want to display and even provide different images for those movies using links.

<p align="center">
<img width="400" src="/blog-resources/twitter-director.png">
</p>

Tweeting about a specific person, such as an actor, director, cinematographer, etc., and generating a tweet with their main movies. Similar to the director endpoint, this one can receive a list of specific movies for the backend to fetch information about.

<p align="center">
<img width="400" src="/blog-resources/twitter-featured-person.png">
</p>

Tweeting the color palette of an image. This endpoint is the most complex of all, using a Rust library ([you can read more about it here](/dev/en/color-palette-generator) 👈) to extract the color palette from an image and integrate it into a new image.

<p align="center">
<img width="400" src="/blog-resources/twitter-colorpalette.png">
</p>

The backend is quite flexible and, in addition to receiving the necessary information to generate desired content, it can also receive certain configurations.

### Backend Configurations

The backend has 6 distinct configurations that can be combined.
- Images
- Ai
- Emoji
- Poster
- URL
- Later
- Thread

Not all options are available for all endpoints as it depends on the type of content being generated.

**Images:** This option tells the backend whether to include images or not, and it's turned on by default.

**Ai:** This option tells the backend whether to generate a shorter summary of the movie's plot using the OpenAI API.

**Emoji:** This option tells the backend whether to generate emojis to describe the movie's title.

**Poster:** This option tells the backend to use the movie poster instead of an image from a scene.

**URL:** This option is the only one sent with a payload to the backend. When the backend receives this option, it adds the link to the end of the tweet.

**Later:** This option saves the tweet in a Supabase table, whose main function is to automatically tweet the content.

**Thread:** This option is only activated for endpoints that generate or discuss multiple movies or roles. If enabled, the backend generates multiple tweets about the actor, cinematographer, director, etc., in a threaded format on Twitter.

### Supabase
[Supabase](https://supabase.com/) is a serverless database service used as the main database for the project. Thanks to a functionality called Edge Functions, several scripts run twice a day, every day. The main ones are `retweetService` and `laterService`.

**Retweet Service:** This service runs twice a day and scans the database for the oldest tweets, retweeting them to keep the account active.

**Later Service:** This service runs twice a day and extracts movies stored in a separate table from the main one. This table contains movies tagged with "Later," as discussed earlier. The service tweets these movies and removes them from the database, allowing for the gradual tweeting of new movies throughout the week in a more organic manner.

**Unretweet Service:** Starting now, this service runs twice a day, every day, scanning the database for tweets that have been retweeted and are older than 8 hours. It removes these retweets and unretweets them.

## Front End
The front end of this application is quite simple, consisting mainly of buttons and input fields to send information to the backend and display the generated tweet. The most complex part of this front end was editing the tweet's text, as tweets don't always adhere to Twitter's character limit. The front end can highlight this issue and allow the user to correct it.

<div class="img-carousel-blog">
<p align="center"><img src="/blog-resources/twitter-list.gif" width="250"></p>
<p align="center"><img src="/blog-resources/twitter-movie.gif" width="250"></p>
<p align="center"><img src="/blog-resources/twitter-edit.gif" width="250"></p>
</div>

Frontend repository [here](https://github.com/JoseLuna12/twitter_client) 👈 <br>
Backend repository [here](https://github.com/JoseLuna12/twitter_bot_movie) 👈<br>
Supabase Functions [here](https://github.com/JoseLuna12/twitter-supabase-functions) 👈<br>
