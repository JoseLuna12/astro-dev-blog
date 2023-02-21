<script>
  export let title = "";
  export let subtitle = "";
  export let categories = [];
  export let thumbnail = "";
  export let slug = "";
  export let lang = "en";
</script>

<div class="w-full h-auto">
  <a href={`/dev/${slug}`} class="group">
    <img
      src={thumbnail}
      class="border-4 mb-3 object-cover max-h-[200px] w-full"
      alt=""
    />
    <p>
      <span
        class="font-bold group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-violet-500 transition ease-out duration-300"
        >{title}</span
      >
      <span>{subtitle}</span>
    </p>
  </a>
  <div class="flex space-x-1 py-3">
    {#each categories as cateogory}
      <a href="/{lang}/posts/{cateogory}">
        <div
          class="text-sm px-3 py-1 rounded-full bg-slate-400 text-white hover:scale-105 transition ease-out duration-300"
        >
          {cateogory}
        </div>
      </a>
    {/each}
  </div>
</div>
