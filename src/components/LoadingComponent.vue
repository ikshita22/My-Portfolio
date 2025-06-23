<template>
  <div v-if="isLoading" class="loading-overlay">
    <div class="loading-content">
      <p class="loading-text text-[14px] font-inter">Making it look presentable...</p>
      <div class="loading-progress-container">
        <div class="loading-progress-bar" :style="{ width: progress + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: true,
  },
})

const progress = ref(0)
let interval = null

onMounted(() => {
  interval = setInterval(() => {
    if (progress.value < 90) {
      progress.value += Math.random() * 10
    } else {
      progress.value += Math.random() * 0.5
    }

    if (progress.value >= 99) {
      progress.value = 99
      clearInterval(interval)
    }
  }, 200)
})

watch(
  () => props.isLoading,
  (newVal) => {
    if (!newVal) {
      progress.value = 100
      if (interval) clearInterval(interval)
    }
  },
  { immediate: true }
)
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  inset: 0;
  background-color: #030303;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.5s ease;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 90%;
}

.loading-text {
  font-family: 'Inter', sans-serif;
  color: rgb(194, 91, 253);
  letter-spacing: 0.1rem;
  text-align: center;
}

.loading-progress-container {
  width: 250px;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
}

.loading-progress-bar {
  height: 100%;
  background-color: rgb(210, 91, 253);
  border-radius: 2px;
  transition: width 0.3s ease;
  position: relative;
  box-shadow: 0 0 6px rgba(253, 91, 98, 0.6);
}

.loading-progress-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: -50px;
  width: 20px;
  height: 100%;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.8), transparent);
  animation: progress-shine 2s linear infinite;
  box-shadow: 0 0 10px 3px rgba(255, 255, 255, 0.5);
}

@keyframes progress-shine {
  0% {
    left: -25px;
  }
  100% {
    left: calc(100% + 25px);
  }
}

@media (max-width: 768px) {
  .loading-text {
    font-size: 1rem;
  }

  .loading-progress-container {
    width: 200px;
  }
}
</style>

