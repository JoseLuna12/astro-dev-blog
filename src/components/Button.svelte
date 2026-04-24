<script lang="ts">
  export let buttonText = "";
  export let position = "center";
  export let href = "/en";

  let cssPosition =
    position === "center"
      ? "justify-items-center"
      : position === "start"
        ? "justify-items-start"
        : "justify-items-end";
</script>

<div class={`grid w-full ${cssPosition}`}>
  <a
    href={href}
    class="my-4 inline-flex items-center justify-center border border-black bg-black px-10 py-2 text-white transition hover:scale-105 hover:bg-white hover:text-black"
  >
    {buttonText}
  </a>
</div>
