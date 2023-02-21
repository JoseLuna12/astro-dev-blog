import type { CollectionEntry } from "astro:content"

export function getPostsByLang(lang: string, list: CollectionEntry<"blog">[]) {
    return list.filter((post) => {
        const slugLang = post.slug.split('/')
        if (slugLang.length == 2) {
            return slugLang[0] == lang
        }
        return false
    })
}

export function setFeaturedValues(featured: CollectionEntry<"blog">[] = [], postsValues: CollectionEntry<"blog">[], size = 3): CollectionEntry<"blog">[] {
    if (featured.length < size) {
        const postV = postsValues.pop()
        if (postV == undefined) {
            return postsValues
        }
        const alreadyInFeature = featured.find(f => f.slug == postV?.slug)

        if (!alreadyInFeature) {
            featured.push(postV)
        }
        return setFeaturedValues(featured, postsValues)
    } else {
        return featured
    }
}

export const PostsTagsDefaults = [
    {
        value: "All",
        img: "/blog-icons/normal-page-ico-web.png"
    },
    {
        value: "Kotlin",
        img: "/blog-icons/android-kotlin-ico-web.png"
    },
    {
        value: "Swift",
        img: "/blog-icons/swift-ico-web.png"
    },
    {
        value: "Flutter",
        img: "/blog-icons/flutter-ico-web.png"
    }
] as const

export type PostsTagsType = typeof PostsTagsDefaults[number]["value"]