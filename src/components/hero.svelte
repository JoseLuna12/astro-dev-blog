<script>
  export let title = "";
</script>

<div>
  <div class="w-full h-[40vh] bg-green-600 relative">
    <img
      class="object-cover w-full h-[40vh]"
      sizes="(min-width: 720px) 720px, 100vw"
      srcset="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_half_hero.jpg?alt=media&token=152ea20f-a578-4e4c-943a-066964f69069 1200vw, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_med_hero.jpg?alt=media&token=0eeb83bc-9663-45fb-bd5f-a88cfff38868 800vw, https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fthumbnail_low_hero.jpg?alt=media&token=7fbd689b-5d5b-4093-9f3f-9acfd854a043 400vw"
      draggable="false"
      src="https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fhero.jpg?alt=media&token=6b0b5a43-9fa0-4d13-831f-4e6dc7f8d912"
      alt="hero"
    />
    <a
      href="/"
      class="absolute top-0 left-0 text-white select-none p-10 font-bold text-3xl"
    >
      {title}
    </a>
  </div>
</div>
