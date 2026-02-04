<template>
  <div 
    class="glass-shell" 
    :class="{ 'is-expanded': isExpanded }"
    :style="shellStyle"
    v-click-outside="close"
    @click="handleContainerClick"
    @mousedown="isPressing = true"
    @mouseup="isPressing = false"
    @mouseleave="isPressing = false"
  >
    <div class="glass-border-highlight"></div>
    <div class="glass-bg"></div>
    <div class="glass-content" :class="{ 'is-pressing': isPressing }">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  expandedWidth: { type: String, default: '140px' },
  expandedHeight: { type: String, default: 'auto' },
  initialSize: { type: String, default: '44px' },
  toggleOnClick: { type: Boolean, default: true }
});

const isExpanded = ref(false);
const isPressing = ref(false);

const toggle = () => { isExpanded.value = !isExpanded.value; };
const close = () => { isExpanded.value = false; };
const handleContainerClick = () => { if (props.toggleOnClick) toggle(); };

const handleGlobalScroll = () => { if (isExpanded.value) close(); };
onMounted(() => window.addEventListener('scroll', handleGlobalScroll, { passive: true }));
onUnmounted(() => window.removeEventListener('scroll', handleGlobalScroll));

const shellStyle = computed(() => ({
  '--size': props.initialSize,
  '--ex-w': props.expandedWidth,
  '--ex-h': props.expandedHeight
}));

const vClickOutside = {
  mounted(el, binding) {
    el.clickOutsideEvent = (e) => {
      if (!(el === e.target || el.contains(e.target))) binding.value();
    };
    document.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent);
  }
};
</script>

<style scoped>
.glass-shell {
  --spring-ease: cubic-bezier(0.5, 1.7, 0.3, 0.8);
  --glass-color: rgba(255, 255, 255, 0.3);
  --glass-border: rgba(255, 255, 255, 0.5);
  position: relative;
  width: var(--size);
  height: var(--size);
  background: var(--glass-color);
  backdrop-filter: blur(45px) saturate(210%);
  -webkit-backdrop-filter: blur(45px) saturate(210%);
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05), 0 12px 32px rgba(0, 0, 0, 0.1);
  transition: width 0.6s var(--spring-ease), height 0.6s var(--spring-ease), border-radius 0.6s var(--spring-ease), transform 0.4s var(--spring-ease);
  overflow: hidden;
  cursor: pointer;
}
@media (prefers-color-scheme: dark) {
  .glass-shell {
    --glass-color: rgba(28, 28, 30, 0.5);
    --glass-border: rgba(255, 255, 255, 0.15);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  }
}
.is-expanded {
  width: var(--ex-w);
  height: var(--ex-h);
  border-radius: 24px;
  transform: translateY(-8px) scale(1.02);
}
.glass-content {
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
  position: relative; z-index: 3;
  transition: transform 0.2s ease;
}
.glass-content.is-pressing { transform: scale(0.92); }
.glass-border-highlight {
  position: absolute; inset: 0; border-radius: inherit; padding: 1px;
  background: linear-gradient(135deg, var(--glass-border), transparent 40%, transparent 60%, var(--glass-border));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out; mask-composite: exclude;
  z-index: 2; pointer-events: none;
}
.glass-bg {
  position: absolute; inset: 0; z-index: 1;
  background: radial-gradient(circle at top left, rgba(255,255,255,0.2), transparent);
}
</style>