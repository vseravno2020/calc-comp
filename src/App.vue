<template>
  <component :is="layout"> </component>
</template>

<script lang="ts">
import Default from "@/layouts/default.vue";
export default {
  computed: {
    layout() {
      return "default-layout";
    },
  },
  components: {
    "default-layout": Default,
  },
};
// import { RouterLink, RouterView } from 'vue-router'
</script>
