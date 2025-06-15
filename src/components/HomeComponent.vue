<template>
  <div
    ref="landingSection"
    class="relative flex flex-col justify-start overflow-x-hidden min-h-screen bg-cover bg-center"
    style="background-image: url('/abstract.jpg');"
  >
    <!-- Gradient overlay for smooth fade to #EDEDEC -->
    <div class="absolute inset-0 pointer-events-none z-20" style="background: linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(237, 237, 236, 0.8) 80%, #EDEDEC 100%);"></div>
    
    <!-- Spline 3D Design - Interactive layer -->
    <div class="absolute inset-0 z-30">
      <spline-viewer
        style="transform: translateX(150px);"
        url="https://prod.spline.design/xasNHxiOYC-TbjEe/scene.splinecode"
      ></spline-viewer>
    </div>
    
    <!-- Navigation Header -->
    <header class="absolute top-0 left-0 right-0 z-50 flex w-full">
      <nav
        class="items-center px-6 py-6 w-full flex justify-between"
        aria-label="Global"
      >
        <template v-for="item in navigation" :key="item.name">
          <a
            :href="item.href"
            @click="(e) => scrollToSection(e, item.href)"
            class="text-[18px] font-inter text-[#4B0082] hover:text-black transition-colors duration-300 drop-shadow-[0_0_5px_#ff69b4] drop-shadow-[0_0_10px_#ff69b4] drop-shadow-[0_0_20px_#ff69b4]"

          >
            {{ item.name }}
          </a>
        </template>
      </nav>
    </header>

    <!-- Landing content -->
    <div class="relative w-full flex flex-col items-start mt-32 z-40 pointer-events-none">
      <div class="px-6 lg:px-12 mt-20 z-20 relative">
        <div class="text-left">
          <p class="text-[64px] font-serif text-purple-600" style="font-family: 'Georgia', 'Times New Roman', serif; text-shadow: 2px 2px 4px rgba(128, 0, 128, 0.3); letter-spacing: 2px;">Hello,</p>
          <p class="text-[56px] text-purple-500 italic" style="font-family: 'Playfair Display', 'Times New Roman', serif; font-weight: 300; text-shadow: 2px 2px 6px rgba(128, 0, 128, 0.4); letter-spacing: 3px; transform: skew(-8deg, 0deg);">I'm Ikshita</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

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
</script>