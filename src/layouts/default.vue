<template>
  <div class="container mx-auto">
    <header>
      <my-header />
    </header>
    <main>main</main>
    <footer>
      <my-footer />
    </footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "default",
  components: {
    "my-header": Header,
    "my-footer": Footer,
  },
};
</script>
