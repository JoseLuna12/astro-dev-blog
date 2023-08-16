---
images:
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Freact-hero-twitter.png?alt=media&token=cfdd2870-884d-471c-a682-c9af85711b56"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_react-hero-twitter.png?alt=media&token=d6e897a3-8fa3-4af2-b512-881ff474035e"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_react-hero-twitter.png?alt=media&token=f7b55a31-ef8b-40fb-a250-ef4af5bbae29"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_react-hero-twitter.png?alt=media&token=6c2e2bd0-1362-455a-9db2-37ba683f5f47"
thumbnails: 
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Freact-thumbnail.png?alt=media&token=c26e9f80-0d83-406c-bd93-8b911b33e04c"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_react-thumbnail.png?alt=media&token=ea49cba5-d13e-403b-891f-28ca53bb0b05"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_react-thumbnail.png?alt=media&token=f82cf0c0-8526-4e23-9b55-443f8092687f"
   - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_react-thumbnail.png?alt=media&token=b1d5db2b-d285-4831-8ee2-7e09899dea5b"
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
    <picture>
        <source sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_twitter-single-movie.png?alt=media&token=493fa6c2-34f6-401e-80d8-4dceeb808d71 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_twitter-single-movie.png?alt=media&token=99a603a5-d0e6-46cb-93d1-3e18b4aad709 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_twitter-single-movie.png?alt=media&token=89301e24-751e-490b-bf09-fd4f048f9a22 400w">
        <img width="400" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Ftwitter-single-movie.png?alt=media&token=f5c12168-0883-4c14-8d71-d6419dffcb85">
    </picture>
</p>

Tweeting the cinematography of one or multiple movies, including images and extra information like the director and cinematographer.

<p align="center">
    <picture>
        <source sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_twitter-cinematography.png?alt=media&token=96b189e7-9714-42a0-99ec-1bea8096fb3a 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_twitter-cinematography.png?alt=media&token=676e5b6d-fd54-4578-a76f-e69bbc9fc728 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_twitter-cinematography.png?alt=media&token=52c2ee23-f3e0-45c5-9868-1c4f812d0772 400w">
        <img width="400" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Ftwitter-cinematography.png?alt=media&token=1616c4cb-e094-4aad-8491-f02095cc44d5">
    </picture>
</p>

Tweeting the soundtrack of a movie with just its name or The Movie Database ID and adding a link to the Spotify album.

<p align="center">
    <picture>
        <source sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_twitter-soundtrack.png?alt=media&token=8425ac8b-cb62-4b17-9937-a138801a0b61 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_twitter-soundtrack.png?alt=media&token=0a282dad-984a-4dc7-9f64-7d0e90a39d39 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_twitter-soundtrack.png?alt=media&token=1f55dd7a-ae37-487d-a919-5ec15dc797b4 400w">
        <img width="400" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Ftwitter-soundtrack.png?alt=media&token=0fb412e7-ca10-464f-b9be-fa46b63d9f9c">
    </picture>
</p>

Tweeting movies by a specific director. This endpoint is a bit more complex than others, as it has various optional fields. For instance, you can send only the director's name, and it responds with a tweet containing 3 movies by that director. Additionally, you can specify the movies you want to display and even provide different images for those movies using links.

<p align="center">
    <picture>
        <source sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_twitter-director.png?alt=media&token=2c6f3e24-b23a-4de7-9f71-8cf57902c63e 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_twitter-director.png?alt=media&token=74f28ada-c5f6-4e3f-890a-52f5c0e3d5c0 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_twitter-director.png?alt=media&token=d012be7f-f144-4a22-b48f-8bdde3b72149 400w">
        <img width="400" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Ftwitter-director.png?alt=media&token=dbd81af6-00c8-40ef-a969-63dacf11cdee">
    </picture>
</p>

Tweeting about a specific person, such as an actor, director, cinematographer, etc., and generating a tweet with their main movies. Similar to the director endpoint, this one can receive a list of specific movies for the backend to fetch information about.

<p align="center">
    <picture>
        <source sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_twitter-featured-person.png?alt=media&token=d7cb4257-27f9-4baa-914a-aaa2bc0be3c6 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_twitter-featured-person.png?alt=media&token=86d2d58c-571b-4a1e-8a21-bc00e568cd30 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_twitter-featured-person.png?alt=media&token=621e3289-3be9-4749-b6ef-ddcc948abfae 400w">
        <img width="400" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Ftwitter-featured-person.png?alt=media&token=ecb988f4-5894-4e0f-80bc-9d4a163f5b78">
    </picture>
</p>

Tweeting the color palette of an image. This endpoint is the most complex of all, using a Rust library ([you can read more about it here](/dev/en/color-palette-generator) 👈) to extract the color palette from an image and integrate it into a new image.

<p align="center">
    <picture>
        <source sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_twitter-colorpalette.png?alt=media&token=4eb92f87-7d22-472d-bb67-d55c63355693 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_twitter-colorpalette.png?alt=media&token=e315287e-17db-4c02-8779-807e08ef14c5 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_twitter-colorpalette.png?alt=media&token=f318e9aa-8e6a-4d37-abe7-4dd66d470cf1 400w">
        <img width="400" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Ftwitter-colorpalette.png?alt=media&token=99daf47a-1fa7-4a86-9cdc-791cebfcef68">
    </picture>
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
<p align="center">
        <img width="250" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Ftwitter-list.gif?alt=media&token=61019092-9548-414a-9150-2e3d2948105c">
</p>
<p align="center">
        <img width="250" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Ftwitter-movie.gif?alt=media&token=41ffc9b0-f92c-4a8b-bba6-9badde78121b">
</p>
<p align="center">
<img width="250" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Ftwitter-edit.gif?alt=media&token=9e3c348d-05c9-4a5e-90b0-7c505f702487">
</p>
</div>

Frontend repository [here](https://github.com/JoseLuna12/twitter_client) 👈 <br>
Backend repository [here](https://github.com/JoseLuna12/twitter_bot_movie) 👈<br>
Supabase Functions [here](https://github.com/JoseLuna12/twitter-supabase-functions) 👈<br>
