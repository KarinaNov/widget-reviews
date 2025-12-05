<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import ReviewsWidget from "@/components/ReviewsWidget.vue";
import VModal from "@/components/UI/VModal.vue";
import VButton from "@/components/UI/VButton.vue"
import { useReviewsStore } from "@/stores/reviewsStore";

export default defineComponent({
  name: "HomePage",
  components: {
    LanguageSwitcher,
    ReviewsWidget,
    VModal,
    VButton
  },
  setup() {
    const reviewsStore = useReviewsStore();
    const isModalVisible = ref(false);

    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    onMounted(() => {
      reviewsStore.fetchReviews();
    });

    return {
      isModalVisible,
      openModal,
      closeModal,
    };
  },
});
</script>

<template>
  <main class="page">
    <header class="page-header">
      <LanguageSwitcher />
    </header>

    <VModal
      :visible="isModalVisible"
      title="Welcome to the Modal"
      @close="closeModal"
    >
      <template #default>
        <p>
          This is a reusable modal component.
        </p>
      </template>

      <template #footer>
        <VButton type="primary" @click="closeModal">
          Close
        </VButton>
      </template>
    </VModal>

    <section class="page-content">
      <ReviewsWidget :openModal="openModal" />
    </section>
  </main>
</template>