<template>
    <p :class="customClass">{{ title }}</p>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "VTitle",
    props: {
      title: {
        type: String,
        required: true,
      },
      customClass: {
        type: String,
        default: "",
      },
    },
  });
  </script>
  
  <style scoped>
  </style>