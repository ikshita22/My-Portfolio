<template>
  <section id="experience" class="bg-[#ebebeb] relative pt-0 mt-0 pb-16" ref="experienceSection">
    <div class="relative">
      <div class="px-6 mx-auto max-w-6xl lg:px-8">
        <div class="flex flex-col md:flex-row md:items-start py-10">
          <!-- Heading -->
          <div class="md:w-1/3 mb-8 md:mb-0">
            <p class="font-inter text-[25px] md:text-[45px] font-semibold text-[#030303] md:sticky md:top-8">
              my experience
            </p>
          </div>

          <!-- Experience timeline -->
          <div class="md:w-2/3 mt-16">
            <!-- Experience 1 -->
            <div class="mb-10 experience-item" ref="expItem1">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl font-semibold text-[#030303]">Intern at DRDO</h3>
                <span class="text-sm text-[#030303] font-light">June 2025 - Present</span>
              </div>
              <p class="text-[#030303] mb-6">
                Working on a research project on Automatic Tracking and firing on Humans using thermal edge detection
              </p>
              <div class="h-[2px] bg-gradient-to-r from-transparent via-[#B57EDC] to-transparent w-full mt-6"></div>
            </div>

            <!-- Experience 2 -->
            <div class="mb-10 experience-item" ref="expItem2">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl font-semibold text-[#030303]">Associate at Pausch Lab</h3>
                <span class="text-sm text-[#030303] font-light">Jun 2024 - Aug 2024</span>
              </div>
              <p class="text-[#030303] mb-6">
                Learning about game development in a college run lab.
              </p>
              <div class="h-[2px] bg-gradient-to-r from-transparent via-[#B57EDC] to-transparent w-full mt-6"></div>
            </div>

            <!-- Experience 3 -->
            <div class="mb-10 experience-item" ref="expItem3">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl font-semibold text-[#030303]">Technical member in Qwiklabs Developer club</h3>
                <span class="text-sm text-[#030303] font-light">Feb 2024 - May 2024</span>
              </div>
              <p class="text-[#030303] mb-6">
                Designed and developed user interfaces for websites and learned more about web development and machine learning.
              </p>
              <div class="h-[2px] bg-gradient-to-r from-transparent via-[#B57EDC] to-transparent w-full mt-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Refs only for 3 items
const expItem1 = ref(null)
const expItem2 = ref(null)
const expItem3 = ref(null)

onMounted(() => {
  const expItems = [expItem1.value, expItem2.value, expItem3.value]

  expItems.forEach((item, index) => {
    if (item) {
      item.style.opacity = '0'
      item.style.transform = 'translateY(30px)'
      item.style.transition = `opacity 0.6s ease-out, transform 0.6s ease-out ${index * 0.2}s`
    }
  })

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  expItems.forEach((item) => {
    if (item) observer.observe(item)
  })
})
</script>

<style scoped>
.experience-item {
  will-change: opacity, transform;
}
</style>
