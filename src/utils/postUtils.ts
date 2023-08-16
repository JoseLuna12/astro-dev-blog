import type { CollectionEntry } from "astro:content";

export function getPostsByLang(lang: string, list: CollectionEntry<"blog">[]) {
  return list.filter((post) => {
    const slugLang = post.data.currentLanguage;
    return lang == slugLang;
  });
}

export function setFeaturedValues(
  featured: CollectionEntry<"blog">[] = [],
  postsValues: CollectionEntry<"blog">[],
  size = 3
): CollectionEntry<"blog">[] {
  if (postsValues.length <= 3) {
    return postsValues;
  }
  if (featured.length < size) {
    const postV = postsValues.pop();
    if (postV == undefined) {
      return postsValues;
    }
    const alreadyInFeature = featured.find((f) => f.slug == postV?.slug);

    if (!alreadyInFeature) {
      featured.push(postV);
    }
    return setFeaturedValues(featured, postsValues);
  } else {
    return featured;
  }
}

export const AllowedPostTags = [
  "All",
  "Kotlin",
  "Swift",
  "Flutter",
  "Astro",
  "Web",
  "Mobile",
  "Rust",
  "Gatsby",
  "React",
  "Node",
] as const;

export const PostsTagsDefault: { value: PostsTagsType; img: string }[] = [
  {
    value: "All",
    img: "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_normal-page-ico-web.png?alt=media&token=01385773-4fe8-401c-bb97-234a735c9ab0",
  },
  {
    value: "Kotlin",
    img: "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_android-kotlin-ico-web.png?alt=media&token=04eb5358-7ca9-464c-a8ab-37b153ed3fb3",
  },
  {
    value: "Swift",
    img: "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_swift-ico-web.png?alt=media&token=8584749b-0b20-47c6-aa0c-d9d1066130c4",
  },
  {
    value: "Flutter",
    img: "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_flutter-ico-web.png?alt=media&token=7997d024-1549-44c2-bd47-d8a3661396f9",
  },
  {
    value: "Astro",
    img: "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_astro-icon-web.png?alt=media&token=556da252-dcbc-43d5-8464-b25417a165c8",
  },
  {
    value: "Web",
    img: "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_normal-page-ico-web.png?alt=media&token=01385773-4fe8-401c-bb97-234a735c9ab0",
  },
  {
    value: "Mobile",
    img: "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_normal-page-ico-web.png?alt=media&token=01385773-4fe8-401c-bb97-234a735c9ab0",
  },
  {
    value: "Rust",
    img: "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_rust-icon-web.png?alt=media&token=498d3880-5e3c-43ea-a8e0-e890f292374d",
  },
  {
    value: "Gatsby",
    img: "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_gatsby-icon.png?alt=media&token=003f7069-3c0b-4c01-ab9b-4719670707a8",
  },
  {
    value: "React",
    img: "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_react-icon-web.png?alt=media&token=f4aa009f-059b-4eba-9205-812e8bee76fb",
  },
  {
    value: "Node",
    img: "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_normal-page-ico-web.png?alt=media&token=01385773-4fe8-401c-bb97-234a735c9ab0",
  },
];

// export const PostTypesString = onlyKeys as const
export type PostsTagsType = (typeof AllowedPostTags)[number];
