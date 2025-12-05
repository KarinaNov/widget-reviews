<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import VButton from "@/components/UI/VButton.vue";

export default defineComponent({
  components: { VButton },
  setup() {
    const { locale } = useI18n();

    const switchLanguage = (lang: string) => {
      locale.value = lang;
    };

    return {
      switchLanguage,
    };
  },
});
</script>

<template>
  <div class="language-switcher">
    <VButton @click="switchLanguage('ua')" text="UA" />
    <VButton @click="switchLanguage('en')" text="EN" />
  </div>
</template>

<style scoped></style>
