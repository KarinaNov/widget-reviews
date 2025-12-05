import { createI18n } from "vue-i18n";

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "ua",
  fallbackLocale: "en",
  messages: {
    ua: {
      pageTitle: "Відгуки наших клієнтів",
      viewButton: "Переглянути",
      writeButton: "Написати",
      reviews: "{count} відгуків",
      modalTitle: "Дякуємо за відгук!",
      modalText: "Це демонстраційне модальне вікно.",
    },
    en: {
      pageTitle: "Our clients’ reviews",
      viewButton: "View",
      writeButton: "Write review",
      reviews: "{count} reviews",
      modalTitle: "Thank you for your review!",
      modalText: "This is a demo modal.",
    },
  },
});
