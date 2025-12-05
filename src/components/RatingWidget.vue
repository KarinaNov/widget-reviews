<script lang="ts">
import { defineComponent, computed } from "vue";
import { useI18n } from "vue-i18n";

import starFull from "@/assets/icons/star_full.svg";
import starHalf from "@/assets/icons/star_half.svg";
import starEmpty from "@/assets/icons/star_empty.svg";

export default defineComponent({
  name: "RatingWidget",
  props: {
    rating: { type: Number, required: true },
    reviews: { type: Number, required: true },
  },
  setup(props) {
    const { t } = useI18n();

    const stars = computed(() => {
      const result = [];
      const r = props.rating;

      for (let i = 1; i <= 5; i++) {
        const diff = r - (i - 1);

        if (diff >= 1) {
          result.push(starFull);
        } else if (diff > 0) {
          const fraction = diff;

          if (fraction >= 0.8) {
            result.push(starFull);
          } else {
            result.push(starHalf);
          }
        } else {
          result.push(starEmpty);
        }
      }

      return result;
    });

    return {
      t,
      stars,
    };
  },
});
</script>

<template>
  <div class="rating-widget">
    <span class="rating-widget__score">{{ rating.toFixed(1) }}</span>

    <div class="rating-widget__stars">
      <img
        v-for="(src, index) in stars"
        :key="index"
        :src="src"
        alt="star"
        class="rating-star"
      />
    </div>

    <span class="rating-widget__count"> {{ reviews }} {{ t("reviews") }} </span>
  </div>
</template>
