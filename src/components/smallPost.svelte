<script lang="ts">
  import { getResponsiveImage } from "../utils/postUtils";

  export let title = "";
  export let subtitle = "";
  export let categories: string[] = [];
  export let slug = "";
  export let lang = "en";
  export let thumbnails: string[] = [];

  const { src: thumbnailSrc, srcset: thumbnailsSrcSet } = getResponsiveImage(thumbnails);
</script>

<div class="h-auto w-full">
  <a href={`/dev/${slug}`} class="group">
    <img
      srcset={thumbnailsSrcSet || undefined}
      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      src={thumbnailSrc}
      alt={title}
    />
    <p>
      <span
        class="font-bold transition ease-out duration-300 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-violet-500 group-hover:bg-clip-text group-hover:text-transparent"
      >
        {title}
      </span>
      <span>{subtitle}</span>
    </p>
  </a>
  <div class="flex flex-wrap gap-2 py-3">
    {#each categories as category}
      <a href={`/${lang}/posts/${category}`}>
        <div
          class="rounded-full bg-slate-400 px-3 py-1 text-sm text-white transition ease-out duration-300 hover:scale-105"
        >
          {category}
        </div>
      </a>
    {/each}
  </div>
</div>
