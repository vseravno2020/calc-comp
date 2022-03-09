<template>
  <component class="text-gray-400 font-bold py-2 px-4 rounded-full hover:bg-green-700 hover:cursor-pointer hover:text-white transition duration-500" :is="btnElementName">
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
