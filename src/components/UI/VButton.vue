<template>
  <button
    :class="['button', buttonTypeClass]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
  name: "ButtonComponent",
  props: {
    text: {
      type: String as PropType<string>,
      default: "Button",
    },
    type: {
      type: String as PropType<"primary" | "secondary">,
      default: "",
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  computed: {
    buttonTypeClass(): string {
      if (this.type === "secondary") {
        return "button--secondary";
      } else if (this.type === "primary") {
        return "button--primary";
      }
      return "";
    },
  },
  methods: {
    handleClick(event: MouseEvent): void {
      if (!this.disabled) {
        this.$emit("click", event);
      }
    },
  },
});
</script>

<style></style>
