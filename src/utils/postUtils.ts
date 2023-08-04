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
    img: "/blog-icons/normal-page-ico-web.png",
  },
  {
    value: "Kotlin",
    img: "/blog-icons/android-kotlin-ico-web.png",
  },
  {
    value: "Swift",
    img: "/blog-icons/swift-ico-web.png",
  },
  {
    value: "Flutter",
    img: "/blog-icons/flutter-ico-web.png",
  },
  {
    value: "Astro",
    img: "/blog-icons/astro-icon-web.png",
  },
  {
    value: "Web",
    img: "/blog-icons/normal-page-ico-web.png",
  },
  {
    value: "Mobile",
    img: "/blog-icons/normal-page-ico-web.png",
  },
  {
    value: "Rust",
    img: "/blog-icons/rust-icon-web.png",
  },
  {
    value: "Gatsby",
    img: "/blog-icons/gatsby-icon.png",
  },
  {
    value: "React",
    img: "/blog-icons/react-icon-web.png",
  },
  {
    value: "Node",
    img: "/blog-icons/normal-page-ico-web.png",
  },
];

// export const PostTypesString = onlyKeys as const
export type PostsTagsType = (typeof AllowedPostTags)[number];
