<script lang="ts">
import { defineComponent, onMounted } from "vue";
import type { PropType } from "vue";
import { useI18n } from "vue-i18n";
import { storeToRefs } from "pinia";
import { useReviewsStore } from "@/stores/reviewsStore";

import VButton from "@/components/UI/VButton.vue";
import RatingWidget from "@/components/RatingWidget.vue";
import VLogo from "@/components/UI/VLogo.vue";
import VTitle from "@/components/UI/VTitle.vue";
import logo from "@/assets/icons/logo.svg";

export default defineComponent({
  components: {
    VButton,
    RatingWidget,
    VLogo,
    VTitle,
  },
  props: {
    openModal: {
      type: Function as PropType<(event?: Event) => void>,
      required: true,
    },
  },
  setup(props) {
    const { t } = useI18n();
    const reviewsStore = useReviewsStore();

    const { isLoading, rating, reviews } = storeToRefs(reviewsStore);

    onMounted(() => {
      reviewsStore.fetchReviews();
    });

    const viewReviews = () => {
      window.open("https://www.google.com", "_blank");
    };

    return {
      logo,
      isLoading,
      rating,
      reviews,
      t,
      viewReviews,
      openModal: props.openModal,
    };
  },
});
</script>

<template>
  <div class="reviews-widget">
    <div class="reviews-widget__container">
      <div class="reviews-widget__content">
        <div class="reviews-widget__info">
          <div class="reviews-widget__info-wrapper">
            <VLogo :src="logo" alt="Google Logo" customClass="reviews-widget__logo" />
            <VTitle :title="t('pageTitle')" customClass="reviews-widget__title" />
          </div>
          <div v-if="isLoading" class="loading-spinner">
            <div class="spinner"></div>
          </div>
          <RatingWidget v-else :rating="rating" :reviews="reviews" />
        </div>

        <div class="reviews-widget__actions">
          <VButton :text="t('viewButton')" type="secondary" @click="viewReviews" />
          <VButton :text="t('writeButton')" type="primary" @click="openModal" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
