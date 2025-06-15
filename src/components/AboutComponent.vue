<template id="about">
  <section
    class="isolate overflow-hidden bg-[#EBEBEA] pt-0 pb-0 -mt-6 md:-mt-8 lg:-mt-10"
    id="about"
  >
    <div class="relative mx-auto max-w-7xl pt-0 px-6 mb-32 lg:px-8">
      <figure class="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
        <!-- Heading and Image Section -->
        <div class="relative px-4 md:px-14" ref="imageContainer">
          <p
            class="font-inter font-semibold text-[25px] md:text-[45px] text-[#030303] text-center md:text-left mb-6"
          >
            about me
          </p>

          <div class="flex justify-start">
            <img
              src="/ikshita.png"
              alt="Ikshita"
              class="w-64 h-64 object-cover rounded-[5%] shadow-lg"
            />
          </div>
        </div>

        <!-- Text Section -->
        <div class="lg:max-w-9xl lg:mt-16">
          <blockquote
            class="font-inter text-right text-[14px] lg:text-[14px] text-[#F1F1F1] py-4 relative"
            ref="paragraphsContainer"
          >
            <!-- Paragraph 1 -->
            <div class="relative">
              <div
                class="absolute right-0 top-0 bottom-0 w-[2px] bg-[#9370DB] h-full"
                :style="{ opacity: paragraphOpacity[0] }"
              ></div>
              <p
                class="pb-16 text-[#030303] transition-opacity duration-700 ease-in-out pr-6"
                :style="{ opacity: paragraphOpacity[0] }"
                ref="firstParagraph"
              >
                Having grown up between bustling cities and quiet corners of India, I’ve picked up more than just souvenirs, I’ve 
                absorbed a mosaic of cultures, perspectives, and experiences that now shape my creativity and approach to problem-solving.
              </p>
            </div>

            <!-- Paragraph 2 -->
            <div class="relative">
              <div
                class="absolute right-0 top-0 bottom-0 w-[2px] bg-[#9370DB] h-full"
                :style="{ opacity: paragraphOpacity[1] }"
              ></div>
              <p
                class="pb-16 text-[#030303] transition-opacity duration-700 ease-in-out pr-6"
                :style="{ opacity: paragraphOpacity[1] }"
                ref="secondParagraph"
              >
               My passions bounce between UI/UX design, cybersecurity, AI, 
               and the occasional game dev rabbit hole because why stick to one world when you can explore them all?
              </p>
            </div>

            <!-- Paragraph 3 -->
            <div class="relative">
              <div
                class="absolute right-0 top-0 bottom-0 w-[2px] bg-[#9370DB] h-full"
                :style="{ opacity: paragraphOpacity[2] }"
              ></div>
              <p
                class="transition-opacity text-[#030303] duration-700 ease-in-out pr-6"
                :style="{ opacity: paragraphOpacity[2] }"
                ref="thirdParagraph"
              >
                Now I'm here, trying to blend logic with imagination, and create things that aren’t just functional but feel
                <span class="text-[#FD5B62]">alive.</span>
              </p>
            </div>
          </blockquote>
        </div>
      </figure>
    </div>

    <!-- Spinner at bottom -->
    <div class="spinner-container">
      <img src="/spin.png" alt="Spinning icon" class="spinner" />
    </div>
  </section>
</template>

<style scoped>
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -40px;
  position: relative;
  z-index: 20;
}

.spinner {
  width: 80px;
  height: 80px;
  animation: spin 8s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const imageContainer = ref(null)
const paragraphsContainer = ref(null)
const firstParagraph = ref(null)
const secondParagraph = ref(null)
const thirdParagraph = ref(null)
const paragraphOpacity = ref([1, 1, 1])

const handleScroll = () => {
  const aboutSection = document.getElementById('about')
  if (!aboutSection || !imageContainer.value) return

  const paragraphs = [firstParagraph.value, secondParagraph.value, thirdParagraph.value]
  const viewportHeight = window.innerHeight
  const visibilityStart = viewportHeight * 0.9
  const visibilityEnd = viewportHeight * 0.5

  paragraphs.forEach((paragraph, index) => {
    if (paragraph) {
      const paragraphTop = paragraph.getBoundingClientRect().top
      if (paragraphTop < visibilityStart) {
        const visibilityRatio = Math.min(
          1,
          Math.max(0, (visibilityStart - paragraphTop) / (visibilityStart - visibilityEnd)),
        )
        paragraphOpacity.value[index] = visibilityRatio
      } else {
        paragraphOpacity.value[index] = 0
      }
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
