---
images:
  - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fgatsby-tl-site-hero.png?alt=media&token=8b6d4cc0-ec89-4b3e-9486-cf79af94fcc6"
  - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_gatsby-tl-site-hero.png?alt=media&token=aee5afc8-6ec5-4e24-9a0d-72990d7831af"
  - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_gatsby-tl-site-hero.png?alt=media&token=72f9ac78-a3eb-4a2a-91bd-e6b34f85e4b3"
  - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_gatsby-tl-site-hero.png?alt=media&token=1a8e9d02-d99e-409d-88de-a2f2baaff7e3"
thumbnails:
  - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fgatsby-tl-site-thumb.png?alt=media&token=dffca831-e4ed-4c32-bb66-3c11cb512e05"
  - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_gatsby-tl-site-thumb.png?alt=media&token=d7202331-a0d5-4ece-8975-1bc12fcf0ee8"
  - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_gatsby-tl-site-thumb.png?alt=media&token=3166f1ce-69b3-43cf-87e2-83b92d5df9b5"
  - "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_gatsby-tl-site-thumb.png?alt=media&token=bfab745d-bcd2-4c3c-9cbd-c6925ff6f6a3"
title: "Hotel site using Gatsby"
description: "A hotel website built on top of a custom CMS I created."
currentLanguage: "en"
date: "2023-02-25"
accent: "#663399"
featured: true
languages:
  - "en"
  - "es"
categories:
  - "Gatsby"
  - "React"
  - "Web"
---

### Summary
This post covers how I built [terralunalodge.com](https://terralunalodge.com/en/) using:

- Gatsby
- Tailwind
- FaunaDB
- TypeScript

## What is the page about?
[TerraLuna Lodge](https://terralunalodge.com/en/) is a hotel located in the Ecuadorian Amazon. It is a family business, so I took the challenge of building a site with the best technology I could use to help it stand out.

I chose Gatsby because the team previously had shared hosting where only WordPress sites worked well. That was when I discovered Gatsby, and I was excited by the idea of using modern web technologies like React, compiling everything into a static site, and deploying it even on limited shared hosting.

The current website is the second iteration. I upgraded it from Gatsby 2 to Gatsby 4.5 with a completely new design. Just like the first version, this one was designed, built, deployed, and maintained by me alone.

## Stack
The two versions differ in some parts of the stack, but they share many of the same tools:

- React
- Gatsby
- Tailwind
- Segment for analytics

#### Terra Luna web page v1
The first version was my first time using Gatsby. It had a fairly complex stack because the goal was to replace the original site built with WordPress.

For the backend I used a headless CMS called Strapi and deployed it to Google Cloud. That was a bit excessive because the site was mostly informational, and the Google Cloud plan I used was relatively expensive to maintain.

The deployment and build process were very manual. The website had no awareness of changes in the data, and deployments took a long time because the hosting provider did not offer SSH access or anything similar that would have made automation easier.

The site was translated into three languages, and managing all those translations was also a manual job because Strapi did not offer a solid solution for multilingual text input at that time.

#### Terra Luna web page v2
The second version was rebuilt from the ground up to solve the problems from the earlier site.

The first step was finding a different backend stack. This new version uses FaunaDB as the backend and a custom CMS made specifically for this website. That was helpful because every component in the CMS was designed to store exactly the data the website needed, so the CMS stayed as simple as possible while still covering the requirements.

The CMS was built using [React](https://reactjs.org/), [FaunaDB](https://fauna.com/), [Tailwind](https://tailwindcss.com/), and [DaisyUI](https://daisyui.com/).

Because of the new CMS, and to take advantage of Gatsby's data layer, I had to build custom source plugins to extract data from the backend. I ended up building four plugins for the site:

- **gatsby-source-faunadb-terraluna:** extracts all the necessary data from FaunaDB and images stored in [UploadCare](https://uploadcare.com/), then creates the required nodes, including Gatsby image nodes.
- **gatsby-source-static-ggl-map:** uses the Google Static Maps API to generate a map image and transforms it into a Gatsby image node.
- **gatsby-tl-sitemap:** creates a sitemap for the website. I built it because I needed more control over sitemap generation.
- **gatsby-translation-tl:** downloads translation keys and values from FaunaDB, then creates the files that the i18n plugin needs to handle translation on the site.

Another weak point this version solved was hosting. The new website uses Gatsby Hosting, which was much better and also cheaper than the previous provider. Deployments can now be automated and triggered directly from the custom CMS.

### Next steps
- [ ] Upgrade to Gatsby 5
- [ ] Use Slice API
- [ ] Use Partial Hydration
- [ ] Implement Party Town to load analytics

### Screenshots

#### Web page

<p align="center">
<img sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_terra-luna-site-ss.png?alt=media&token=1be9d905-4b0c-4e19-9ee1-54155d1c8f22 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_terra-luna-site-ss.png?alt=media&token=e6b16a01-2c17-4d04-ab93-adc4a9227805 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_terra-luna-site-ss.png?alt=media&token=46db42bc-a1c9-431a-a3c2-31dbc3e87e54 400w" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fterra-luna-site-ss.png?alt=media&token=29819313-a6f4-4100-bf0d-68bc54178e39">
</p>

#### Admin

<p align="center">
<img sizes="(min-width: 720px) 720px, 100vw" srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_terra-luna-admin-ss.png?alt=media&token=f55d7350-bf9a-4264-9911-17c2bfc08c74 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_terra-luna-admin-ss.png?alt=media&token=54df76b0-9d57-4a69-9e99-023f85707d3a 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_terra-luna-admin-ss.png?alt=media&token=14d3622c-8ac4-4248-8d49-b9bd678ec403 400w" src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fterra-luna-admin-ss.png?alt=media&token=3b5e648b-87b8-4207-96b2-a49f83b91297">
</p>
