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
        img: ""
    },
    {
        value: "Kotlin",
        img: ""
    },
    {
        value: "Swift",
        img: ""
    },
    {
        value: "Flutter",
        img: ""
    }
] as const

export type PostsTagsType = typeof PostsTagsDefaults[number]["value"]