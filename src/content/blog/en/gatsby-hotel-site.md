---
image: "/blog-heros/gatsby-tl-site-hero.png"
thumbnail: "/blog-thumbnails/gatsby-tl-site-thumb.png"
title: "Hotel site using Gatsby"
description: "This hotel site was built on top of a custom CMS build by me."
currentLanguage: "en"
date: "25-02-2023"
accent: "#663399"
featured: true
languages: 
    - "en"
    - "es"
categories:
    - "Gatsby"
    - "React"
---

### Summary
This blogs talks about how I built this page ([terralunalodge.com](https://terralunalodge.com/en/)) using:
- Gatsby js
- Tailwind
- Faunadb
- Typescript

## What is the page about?
[TerraLuna lodge](https://terralunalodge.com/en/) is a hotel located on the ecuadorian amazon, is a familly buisness so thats why I took the challenge to built a site using the best technology available for it to stand out.
I choose to use Gatsby because they use to have a shared hosting in which only wordpress sites worked well, so thats when I heard about Gatsby js about 3 years ago, I was very exited to use it because I could use modern web technologies like React and then compile it as a static site and deploy it everywhere even on limited shared hostings like the one that the previous page was on.
The current page is the second iteration where I updated from Gatsby 2 to Gatsby 4.5 and a whole new design, just like the first page, the second one was design, build, deployed and mantained by me alone.

## Stack
The two versions differ in some parts of the stack, but share many of them like:
- React
- Gatsby
- Tailwind
- Segment (for analytics)

#### Terra Luna web page v1
The first page was my first time using Gatsby js, it had a somewhat complex stack because the idea was to replace the original site that was built using Wordpress.
For the backend I used a headless CMS called Strapi and deploy it to google cloud, it was a bit overkill because the page was informative alone and the google cloud platform plan I used was a bit expensive to mantain. 
The deployment and build process had a manual approach where the website was not aware of any changes in the data. Deployments use to take a lot of time too because of the hosting, it did not offered an ssh access or somenthing similar in order to automate the deployment.
The site was translated into 3 languages and managing all those translation was also a manual job, because strapi did not offered in that time some solution for multi language input texts.
#### Terra Luna web page v2
The second version was built from ground up again in order to solve all the problemas that the previous page had.
The first thing to do was to look for a different backend stack, this new page uses FaunaDB as the backend and a custom made cms just for this page to manage the content. This was very helpful because every component was made in order to store the exact data that the page would need, so this new CMS is as simple as it can be in order to fulfill all necesities from the web page.
The CMS was built using [Reactjs](https://reactjs.org/), [Faunadb](https://fauna.com/), [Tailwind](https://tailwindcss.com/) and [Daisy UI](https://daisyui.com/).
Because of the new CMS, in order to be able to leverage everything that Gatsby has to offer, I had to build custom source plugins in order to extract the data from the backend. A total of 4 custom plugins where built for the page.
- **gatsby-source-faunadb-terraluna:** This plugin extracts all the necesarry data from Faunadb and images stored in [UploadCare](https://uploadcare.com/) and create the necessary nodes, even the GatsbyImageNodes for the images.
- **gatsby-source-static-ggl-map:** This plugin uses google static map generator api in order to generate an image from the hotel map, it also transforms this image into a GatsbyImageNode so it has all the characteristics that GatsbyImage offers.
- **gatsby-tl-sitemap:** This plugin creates a sitemap for the web page, I built it because I needed more control on the creation of the sitemap.
- **gatsby-translation-tl:** This plugin is one of the most importants and complex, it downloads all the translation keys and values from faunadb, and create the files that the plugin i18n need in order to handle translation on the site.

Another weak point that this new version solves is the hosting, this new website uses Gatsby hosting wich is by far a lot better than the older hosting and also cheaper. Now all deployments can be automated and also triggered by the custom CMS.

### Next steps
- [ ] Upgrade to gatsby 5
- [ ] Use Slice API
- [ ] Use Partial Hydration
- [ ] Implement Party Town to load analytics

### Screenshots

#### Web page
![Terra Luna](/blog-resources/terra-luna-site-ss.png)
#### Admin 
![terra luna admin](/blog-resources/terra-luna-admin-ss.png)