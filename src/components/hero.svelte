<script>
  import heroImage from "../images/hero.jpg";

  export let title = "";
</script>

<div>
  <div class="w-full h-[40vh] bg-green-600 relative">
    <img
      src={heroImage}
      class="object-cover w-full h-[40vh]"
      alt=""
      draggable="false"
    />
    <a
      href="/"
      class="absolute top-0 left-0 text-white select-none p-10 font-bold text-3xl"
    >
      {title}
    </a>
  </div>
</div>
