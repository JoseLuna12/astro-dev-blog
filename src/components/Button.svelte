<script>
  export let buttonText = "";
  export let position = "center";
  export let linkPrefix = "/en";

  let cssPosition =
    position == "center"
      ? "justify-items-center"
      : position == "start"
      ? "justify-items-start"
      : "justify-items-end";
</script>

<div class="grid {cssPosition} w-full">
  <a href="{linkPrefix}/">
    <button
      class="my-4 px-10 bg-black text-white py-2 hover:bg-white border border-white hover:scale-105 hover:border-black hover:text-black transition"
    >
      {buttonText}
    </button>
  </a>
</div>
