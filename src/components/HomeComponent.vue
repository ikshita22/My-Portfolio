<template>
  <div>
    <LoadingScreen :isLoading="isLoading" />

    <div
      v-show="!isLoading"
      ref="landingSection"
      class="relative flex flex-col justify-start overflow-x-hidden min-h-screen bg-cover bg-center"
      :style="backgroundStyle"
    >
      <!-- Gradient Overlay -->
      <div
        class="absolute inset-0 pointer-events-none z-20"
        style="background: linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(237, 237, 236, 0.8) 80%, #EDEDEC 100%);"
      ></div>

      <!-- Spline 3D Viewer (right-aligned but full drag area) -->
      <div class="absolute inset-0 z-30">
        <spline-viewer
          class="absolute right-0 top-0 w-[calc(100%+200px)] h-full translate-x-[160px]"
          url="https://prod.spline.design/xasNHxiOYC-TbjEe/scene.splinecode"
          @load="onSplineLoaded"
        />
      </div>

      <!-- Navigation Header -->
      <header class="absolute top-0 left-0 right-0 z-50">
        <nav class="flex justify-between items-center px-6 py-6 w-full">
          <template v-for="item in navigation" :key="item.name">
            <a
              :href="item.href"
              @click="(e) => scrollToSection(e, item.href)"
              class="text-[20px] sm:text-[22px] font-jetbrains text-[#4B0082] hover:text-black transition-colors duration-300 drop-shadow-[0_0_5px_#ff69b4] drop-shadow-[0_0_10px_#ff69b4] drop-shadow-[0_0_20px_#ff69b4]"
            >
              {{ item.name }}
            </a>
          </template>
        </nav>
      </header>

      <!-- Main Content Image + Animated Text -->
      <div class="relative w-full flex flex-col items-start mt-32 z-40 pointer-events-none">
        <div class="px-6 lg:px-12 mt-36 z-10 relative">
          <img
            :src="helloImagePath"
            alt="Hello Ikshita"
            class="max-w-[80%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[60%] xl:max-w-[60%] transform -translate-x-40 -translate-y-40"
            @load="onImageLoaded"
          />
          <h1
            v-show="showText"
            class="split text-[#030303] mt-[-310px] ml-12 text-[3rem] sm:text-[4rem] md:text-[5rem] font-[600] font-sans pointer-events-none"
          >
            I'm Ikshita
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'
import SplitType from 'split-type'
import LoadingScreen from './LoadingComponent.vue'

const isLoading = ref(true)
const showText = ref(false)

const imageLoaded = ref(false)
const splineLoaded = ref(false)
const backgroundLoaded = ref(false)

const helloImagePath = `${import.meta.env.BASE_URL}Hello1.png`
const backgroundImagePath = `${import.meta.env.BASE_URL}abstract.jpg`

const backgroundStyle = {
  backgroundImage: `url('${backgroundImagePath}')`,
}

const navigation = [
  { name: 'About me', href: '#about' },
  { name: 'My technical background', href: '#tech' },
  { name: 'My projects', href: '#projects' },
  { name: 'My experience', href: '#experience' },
  { name: 'Contact me!', href: '#contact' },
]

const scrollToSection = (e, sectionId) => {
  e.preventDefault()
  const element = document.querySelector(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const preloadBackground = () => {
  const img = new Image()
  img.src = backgroundImagePath
  img.onload = () => {
    backgroundLoaded.value = true
    checkAllReady()
  }
}

const checkAllReady = async () => {
  if (imageLoaded.value && splineLoaded.value && backgroundLoaded.value) {
    await nextTick()
    isLoading.value = false
  }
}

const onImageLoaded = () => {
  imageLoaded.value = true
  checkAllReady()
}

const onSplineLoaded = () => {
  splineLoaded.value = true
  checkAllReady()
}

setTimeout(() => {
  if (!imageLoaded.value || !splineLoaded.value || !backgroundLoaded.value) {
    console.warn('Force-hiding loading screen due to timeout')
    isLoading.value = false
    showText.value = true
    runTextAnimation()
  }
}, 10000)

watch(isLoading, async (newVal) => {
  if (!newVal) {
    await nextTick()
    showText.value = true
    runTextAnimation()
  }
})

function runTextAnimation() {
  const result = new SplitType('.split')
  const chars = result.chars
  const originalText = chars.map((c) => c.textContent)

  chars.forEach((char) => {
    char.style.opacity = 0
  })

  let currentChar = 0
  let glitchCount = 0
  const asciiStart = 65

  const interval = setInterval(() => {
    if (currentChar < chars.length) {
      const randomChar = String.fromCharCode(asciiStart + Math.floor(Math.random() * 26))
      chars[currentChar].textContent = randomChar
      chars[currentChar].style.opacity = 1
      glitchCount++
      if (glitchCount > 7) {
        glitchCount = 0
        chars[currentChar].textContent = originalText[currentChar]
        currentChar++
      }
    } else {
      clearInterval(interval)
    }
  }, 20)
}

onMounted(() => {
  preloadBackground()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&display=swap');

.split {
  font-family: 'JetBrains Mono', monospace;
  line-height: 1;
  letter-spacing: -1px;
  white-space: nowrap;
}

.font-jetbrains {
  font-family: 'JetBrains Mono', monospace;
}
</style>
