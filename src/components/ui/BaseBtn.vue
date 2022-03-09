<template>
  <component class="font-semibold" :is="btnElementName">
    <slot />
  </component>
</template>

<script>
export default {
  name: "BaseBtn",
  computed: {
    btnElementName() {
      if (this.link !== "") {
        return "a";
      }
      return "button";
    },
  },
};
</script>

<style scoped></style>
