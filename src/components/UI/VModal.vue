<script lang="ts">
import { defineComponent, computed, onMounted, onBeforeUnmount } from "vue";
import VButton from "@/components/UI/VButton.vue";

export default defineComponent({
  name: "VModal",
  components: { VButton },
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: "Modal Header",
    },
    closeOnEsc: {
      type: Boolean,
      default: true,
    },
    closeOnBackdrop: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["close"],
  setup(props, { emit, slots }) {
    const emitClose = () => {
      emit("close");
    };

    const onKeydown = (event: KeyboardEvent) => {
      if (!props.visible || !props.closeOnEsc) return;
      if (event.key === "Escape" || event.key === "Esc") {
        emitClose();
      }
    };

    const onBackdropClick = () => {
      if (props.closeOnBackdrop) {
        emitClose();
      }
    };

    const hasHeader = computed(() => !!slots.header || !!props.title);
    const hasFooter = computed(() => !!slots.footer || true);
    const titleId = "modal-title";

    const defaultTitle = computed(() => props.title);

    onMounted(() => {
      window.addEventListener("keydown", onKeydown);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("keydown", onKeydown);
    });

    return {
      emitClose,
      onBackdropClick,
      hasHeader,
      hasFooter,
      titleId,
      defaultTitle,
    };
  },
});
</script>

<template>
  <teleport to="body">
    <div
      v-if="visible"
      class="modal-overlay"
      role="presentation"
      @click="onBackdropClick"
    >
      <div
        class="modal-content"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="titleId"
        @click.stop
      >
        <!-- header -->
        <header v-if="hasHeader" class="modal-header">
          <slot name="header">
            <h3 :id="titleId" class="modal-header__title">
              {{ defaultTitle }}
            </h3>
          </slot>
        </header>

        <!-- body -->
        <section class="modal-body">
          <slot>
            <p class="modal-body__text">
              This is the default content of the modal.
            </p>
          </slot>
        </section>

        <!-- footer -->
        <footer v-if="hasFooter" class="modal-footer">
          <slot name="footer">
            <VButton type="primary" @click="emitClose">
              Close
            </VButton>
          </slot>
        </footer>
      </div>
    </div>
  </teleport>
</template>