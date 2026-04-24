<script lang="ts">
  export let title = "";
  export let homeHref = "/en";
</script>

<div>
  <div class="relative h-[40vh] w-full bg-green-600">
    <img
      class="h-[40vh] w-full object-cover"
      sizes="100vw"
      srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_hero.jpg?alt=media&token=152ea20f-a578-4e4c-943a-066964f69069 1200w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_hero.jpg?alt=media&token=0eeb83bc-9663-45fb-bd5f-a88cfff38868 800w, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_hero.jpg?alt=media&token=7fbd689b-5d5b-4093-9f3f-9acfd854a043 400w"
      draggable="false"
      src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fhero.jpg?alt=media&token=6b0b5a43-9fa0-4d13-831f-4e6dc7f8d912"
      alt={title ? `${title} hero banner` : "Developer blog hero banner"}
    />
    <a
      href={homeHref}
      class="absolute left-0 top-0 select-none p-10 text-3xl font-bold text-white"
    >
      {title}
    </a>
  </div>
</div>
