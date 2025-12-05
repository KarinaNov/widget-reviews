<template>
  <img :src="src" :alt="alt" :class="['logo', customClass]" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VLogo",
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "Logo",
    },
    customClass: {
      type: String,
      default: "",
    },
  },
});
</script>

<style scoped></style>
