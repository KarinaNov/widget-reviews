import { defineStore } from "pinia";

interface ReviewStats {
  rating: number;
  reviewsCount: number;
}

const API_URL = import.meta.env.VITE_REVIEWS_API_URL as string;

export const useReviewsStore = defineStore("reviews", {
  state: () => ({
    rating: 4.9 as number,
    reviews: 233 as number,
    isLoading: false as boolean,
    error: null as string | null,
  }),

  actions: {
    async fetchReviews() {
      if (!API_URL) {
        console.warn("VITE_REVIEWS_API_URL is not set");
        return;
      }

      this.isLoading = true;
      this.error = null;

      try {
        const res = await fetch(API_URL);
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }

        const data: ReviewStats = await res.json();
        this.reviews = data.reviewsCount;

        this.rating = data.rating;
      } catch (e) {
        console.error(e);
        this.error = "Failed to load data";
      } finally {
        this.isLoading = false;
      }
    },
  },
});