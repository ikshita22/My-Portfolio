<template>
  <section id="projects" class="project-container">
    <!-- Background color blobs container -->
    <div class="blobs-container">
      <!-- Blobs for Project 1 -->
      <div
        class="blob-group"
        :class="{
          active: activeProjectIndex === 0,
          transitioning: isTransitioning && (activeProjectIndex === 0 || activeProjectIndex === 1),
        }"
      >
        <div class="blob blob-1" :style="{ background: projectColors[0].blob1Color }"></div>
        <div class="blob blob-2" :style="{ background: projectColors[0].blob2Color }"></div>
        <div class="blob blob-3" :style="{ background: projectColors[0].blob3Color }"></div>
      </div>

      <!-- Blobs for Project 2 -->
      <div
        class="blob-group"
        :class="{
          active: activeProjectIndex === 1,
          transitioning: isTransitioning && (activeProjectIndex === 1 || activeProjectIndex === 2),
        }"
      >
        <div class="blob blob-1" :style="{ background: projectColors[1].blob1Color }"></div>
        <div class="blob blob-2" :style="{ background: projectColors[1].blob2Color }"></div>
        <div class="blob blob-3" :style="{ background: projectColors[1].blob3Color }"></div>
      </div>

      <!-- Blobs for Project 3 -->
      <div
        class="blob-group"
        :class="{
          active: activeProjectIndex === 2,
          transitioning: isTransitioning && activeProjectIndex === 2,
        }"
      >
        <div class="blob blob-1" :style="{ background: projectColors[2].blob1Color }"></div>
        <div class="blob blob-2" :style="{ background: projectColors[2].blob2Color }"></div>
        <div class="blob blob-3" :style="{ background: projectColors[2].blob3Color }"></div>
      </div>
    </div>

    <div class="projects-wrapper">
      <!-- Project heading that only shows within this section -->
      <div class="projects-heading w-full">
        <div class="heading-container">
          <div class="relative">
            <p class="heading-text">
              my projects
            </p>
          </div>
        </div>
      </div>

      <!-- Project 1 -->
      <div
        class="project-section"
        :data-bg-color="projectColors[0].bg"
        :data-text-color="projectColors[0].text"
        :data-shadow-color="projectColors[0].shadow"
        data-project-index="0"
      >
        <div class="project-content">
          <div class="project-image">
            <img src="/Fitfy.jpg" alt="Fitness app using ML" />
          </div>
          <div class="project-info">
            <h2 class="project-title">Fitify</h2>
            <p class="project-description">
              An app where one can keep a track of the exercises live using machine learning and computer vision.
            </p>
            <div class="tech-stack">
              <span>ML</span>
              <span>Python</span>
              <span>OpenCV</span>
            </div>
            <div class="project-links">
              <a href="#" class="project-link">Go to GitHub →</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Project 2 -->
      <div
        class="project-section"
        :data-bg-color="projectColors[1].bg"
        :data-text-color="projectColors[1].text"
        :data-shadow-color="projectColors[1].shadow"
        data-project-index="1"
      >
        <div class="project-content reverse">
          <div class="project-info">
            <h2 class="project-title">Peer-to-peer notes</h2>
            <p class="project-description">
              A serverless note sharing app that enables real-time collaboration without traditional servers.
            </p>
            <div class="tech-stack">
              <span>CSS</span>
              <span>TypeScript</span>
              <span>Python</span>
              <span>WebRTC</span>
            </div>
            <div class="project-links">
              <a href="#" class="project-link">Go to GitHub →</a>
              <a href="#" class="project-link">Check it out →</a>
            </div>
          </div>
          <div class="project-image">
            <img src="/peertopeer.png" alt="Note sharing app" />
          </div>
        </div>
      </div>

      <!-- Project 3 -->
      <div
        class="project-section"
        :data-bg-color="projectColors[2].bg"
        :data-text-color="projectColors[2].text"
        :data-shadow-color="projectColors[2].shadow"
        data-project-index="2"
      >
        <div class="project-content">
          <div class="project-image">
            <img src="/ensemble.webp" alt="Wardrobe app" />
          </div>
          <div class="project-info">
            <h2 class="project-title">Ensemble</h2>
            <p class="project-description">
              A platform where AI suggests outfits based on your available clothes, weather, and personal style preferences.
            </p>
            <div class="tech-stack">
              <span>Tailwind CSS</span>
              <span>Node.js</span>
              <span>AI/ML</span>
            </div>
            <div class="project-links">
              <a href="#" class="project-link">Go to GitHub →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Define project color schemes with blob colors (only first 3 projects)
const projectColors = ref([
  {
    bg: '#030303', // dark gray
    text: '#DF97C0',
    shadow: '0 0 8px #cd348b',
    blob1Color:
      'radial-gradient(circle at center, rgba(223, 151, 192, 0.8) 10%, rgba(223, 151, 192, 0) 70%)',
    blob2Color:
      'radial-gradient(circle at center, rgba(205, 52, 139, 0.7) 10%, rgba(205, 52, 139, 0) 70%)',
    blob3Color:
      'radial-gradient(circle at center, rgba(255, 0, 64, 0.6) 10%, rgba(255, 0, 64, 0) 70%)',
  },
  {
    bg: '#75272C', // red
    text: '#64FFDA',
    shadow: '0 0 8px #00C7B7',
    blob1Color:
      'radial-gradient(circle at center, rgba(239, 177, 101, 0.85) 10%, rgba(239, 177, 101, 0) 70%)',
    blob2Color:
      'radial-gradient(circle at center, rgba(255, 140, 0, 0.75) 10%, rgba(255, 140, 0, 0) 70%)',
    blob3Color:
      'radial-gradient(circle at center, rgba(100, 255, 218, 0.7) 10%, rgba(100, 255, 218, 0) 70%)',
  },
  {
    bg: '#4D3F5F', // purple
    text: '#FFA07A',
    shadow: '0 0 8px #FF7F50',
    blob1Color:
      'radial-gradient(circle at center, rgba(255, 160, 122, 0.85) 10%, rgba(255, 160, 122, 0) 70%)',
    blob2Color:
      'radial-gradient(circle at center, rgba(255, 127, 80, 0.75) 10%, rgba(255, 127, 80, 0) 70%)',
    blob3Color:
      'radial-gradient(circle at center, rgba(221, 120, 255, 0.65) 10%, rgba(221, 120, 255, 0) 70%)',
    nextColor: '#030303', // Fade to dark gray at the end
  },
])

// Current text color and shadow for the heading
const currentTextColor = ref(projectColors.value[0].text)
const currentTextShadow = ref(projectColors.value[0].shadow)

// Current active project index for animations
const activeProjectIndex = ref(0)
const isTransitioning = ref(false)

// Setup scroll-based animation and color transitions
onMounted(() => {
  const projectSections = document.querySelectorAll('.project-section')
  const projectContainer = document.querySelector('.project-container')
  const blobGroups = document.querySelectorAll('.blob-group')

  // Check if device is mobile
  const isMobile = () => window.innerWidth < 768
  const isTablet = () => window.innerWidth >= 768 && window.innerWidth < 1024

  // Randomly position blobs within each group
  blobGroups.forEach((group) => {
    const blobs = group.querySelectorAll('.blob')

    blobs.forEach((blob) => {
      // Adjust blob positioning based on screen size
      let topPos, leftPos, size

      if (isMobile()) {
        // More spread out positioning for mobile to avoid clustering
        topPos = Math.random() * 60 + 10 // 10% to 70% from top
        leftPos = Math.random() * 60 + 10 // 10% to 70% from left
        size = Math.random() * 200 + 250 // Smaller blobs for mobile
      } else if (isTablet()) {
        topPos = Math.random() * 50 + 15 // 15% to 65% from top
        leftPos = Math.random() * 50 + 15 // 15% to 65% from left
        size = Math.random() * 250 + 300 // Medium blobs for tablet
      } else {
        // Desktop positioning (original)
        topPos = Math.random() * 50 + 20 // 20% to 70% from top
        leftPos = Math.random() * 50 + 20 // 20% to 70% from left
        size = Math.random() * 300 + 400 // Large blobs for desktop
      }

      // Apply random position and size
      blob.style.top = `${topPos}%`
      blob.style.left = `${leftPos}%`
      blob.style.width = `${size}px`
      blob.style.height = `${size}px`
    })
  })

  // Set initial background color
  projectContainer.style.backgroundColor = projectColors.value[0].bg
  currentTextColor.value = projectColors.value[0].text
  currentTextShadow.value = projectColors.value[0].shadow

  // Activate the first blob group
  document.querySelector('.blob-group').classList.add('active')

  // Helper function to interpolate between colors
  const lerpColor = (a, b, amount) => {
    const ah = parseInt(a.replace(/#/g, ''), 16)
    const ar = ah >> 16
    const ag = (ah >> 8) & 0xff
    const ab = ah & 0xff

    const bh = parseInt(b.replace(/#/g, ''), 16)
    const br = bh >> 16
    const bg = (bh >> 8) & 0xff
    const bb = bh & 0xff

    const rr = ar + amount * (br - ar)
    const rg = ag + amount * (bg - ag)
    const rb = ab + amount * (bb - ab)

    return `#${(((1 << 24) + (rr << 16) + (rg << 8) + rb) | 0).toString(16).slice(1)}`
  }

  // Function to handle scroll event
  const handleScroll = () => {
    // Skip complex animations on mobile for performance
    if (isMobile()) {
      // Simplified mobile scroll handling
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const projectsContainerRect = projectContainer.getBoundingClientRect()
      const projectsContainerTop = window.scrollY + projectsContainerRect.top

      if (scrollPosition < projectsContainerTop - windowHeight / 2) return

      // Simple section detection for mobile
      projectSections.forEach((section, index) => {
        const sectionTop = projectsContainerTop + section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollPosition >= sectionTop - windowHeight / 2 && scrollPosition < sectionTop + sectionHeight) {
          if (activeProjectIndex.value !== index) {
            activeProjectIndex.value = index
            projectContainer.style.backgroundColor = projectColors.value[index].bg
            currentTextColor.value = projectColors.value[index].text
            currentTextShadow.value = projectColors.value[index].shadow

            // Update blob visibility
            blobGroups.forEach((group, groupIndex) => {
              group.style.opacity = groupIndex === index ? 1 : 0
            })
          }
        }
      })
      return
    }

    // Full desktop scroll handling (original logic)
    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight
    const projectsContainerRect = projectContainer.getBoundingClientRect()
    const projectsContainerTop = window.scrollY + projectsContainerRect.top

    if (scrollPosition < projectsContainerTop - windowHeight / 2) return

    projectSections.forEach((section, index) => {
      const sectionTop = projectsContainerTop + section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionBottom = sectionTop + sectionHeight
      const scrollProgress = (scrollPosition - sectionTop) / sectionHeight

      if (scrollPosition >= sectionTop - windowHeight / 2 && scrollPosition < sectionBottom) {
        activeProjectIndex.value = index
        isTransitioning.value = scrollProgress > 0.2 && scrollProgress < 0.8

        const currentColor = projectColors.value[index].bg
        const curTextColor = projectColors.value[index].text
        const curShadowColor = projectColors.value[index].shadow

        let nextColor = currentColor
        let nextTextColor = curTextColor
        let nextShadowColor = curShadowColor

        if (index < projectSections.length - 1) {
          nextColor = projectColors.value[index + 1].bg
          nextTextColor = projectColors.value[index + 1].text
          nextShadowColor = projectColors.value[index + 1].shadow
        } else if (projectColors.value[index].nextColor) {
          nextColor = projectColors.value[index].nextColor
        }

        if (scrollProgress >= 0 && scrollProgress <= 1) {
          projectContainer.style.backgroundColor = lerpColor(currentColor, nextColor, scrollProgress)

          if (scrollProgress > 0.5) {
            currentTextColor.value = nextTextColor
            currentTextShadow.value = nextShadowColor
          } else {
            currentTextColor.value = curTextColor
            currentTextShadow.value = curShadowColor
          }

          blobGroups.forEach((group, groupIndex) => {
            if (groupIndex === index) {
              group.style.opacity = 1 - scrollProgress
            } else if (groupIndex === index + 1) {
              group.style.opacity = scrollProgress
            } else {
              group.style.opacity = 0
            }
          })
        }
      }
    })
  }

  // Set up scroll event listener with throttling for better performance
  let ticking = false
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll()
        ticking = false
      })
      ticking = true
    }
  })

  // Setup Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.projectIndex)
          activeProjectIndex.value = index
          isTransitioning.value = false

          currentTextColor.value = projectColors.value[index].text
          currentTextShadow.value = projectColors.value[index].shadow

          if (index === 0) {
            projectContainer.style.backgroundColor = projectColors.value[0].bg
          }

          blobGroups.forEach((group, groupIndex) => {
            if (groupIndex === index) {
              group.style.opacity = 1
            } else {
              group.style.opacity = 0
            }
          })
        }
      })
    },
    {
      threshold: isMobile() ? 0.1 : 0.2,
      rootMargin: isMobile() ? '-5% 0px -5% 0px' : '-10% 0px -10% 0px',
    },
  )

  // Observe all project sections
  projectSections.forEach((section) => {
    observer.observe(section)
  })

  // Initial call to handle the scroll position on page load
  handleScroll()

  // Make sure projects take up appropriate height
  const adjustProjectHeight = () => {
    const vh = window.innerHeight
    projectSections.forEach((section) => {
      // On mobile, allow natural content height with minimum
      if (isMobile()) {
        section.style.minHeight = `${Math.max(vh * 0.8, 600)}px`
        section.style.height = 'auto'
      } else {
        section.style.height = `${vh}px`
      }
    })
  }

  // Initial height adjustment
  adjustProjectHeight()

  // Adjust on window resize with debouncing
  let resizeTimeout
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
      adjustProjectHeight()
      // Reposition blobs on resize
      blobGroups.forEach((group) => {
        const blobs = group.querySelectorAll('.blob')
        blobs.forEach((blob) => {
          let topPos, leftPos, size

          if (isMobile()) {
            topPos = Math.random() * 60 + 10
            leftPos = Math.random() * 60 + 10
            size = Math.random() * 200 + 250
          } else if (isTablet()) {
            topPos = Math.random() * 50 + 15
            leftPos = Math.random() * 50 + 15
            size = Math.random() * 250 + 300
          } else {
            topPos = Math.random() * 50 + 20
            leftPos = Math.random() * 50 + 20
            size = Math.random() * 300 + 400
          }

          blob.style.top = `${topPos}%`
          blob.style.left = `${leftPos}%`
          blob.style.width = `${size}px`
          blob.style.height = `${size}px`
        })
      })
    }, 250)
  })

  // Add enhanced floating animation to the blobs
  document.querySelectorAll('.blob').forEach((blob) => {
    // Reduce animation intensity on mobile for performance
    const duration = isMobile() ? 15 + Math.random() * 5 : 12 + Math.random() * 10
    const delay = Math.random() * 3

    blob.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`
  })
})
</script>

<style scoped>
.project-container {
  position: relative;
  transition: background-color 0.5s ease;
  min-height: 100vh;
  overflow-x: hidden;
  z-index: 1;
  margin: 0;
  padding: 0;
  margin-top: -15px;
  padding-top: 60px;
}

/* Mobile adjustments */
@media (max-width: 767px) {
  .project-container {
    margin-top: -10px;
    padding-top: 40px;
  }
}

.project-container::before {
  content: '';
  position: absolute;
  top: -100px;
  left: 0;
  right: 0;
  height: 100px;
  background-color: #030303;
  z-index: -1;
}

/* Blob styling */
.blobs-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
}

.blob-group {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease;
}

.blob-group.active {
  opacity: 1;
}

.blob-group.transitioning {
  opacity: 0.5;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(50px);
  z-index: 1;
  mix-blend-mode: screen;
  opacity: 1;
}

/* Reduce blur on mobile for performance */
@media (max-width: 767px) {
  .blob {
    filter: blur(30px);
  }
}

@keyframes float {
  0% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(30px, -30px) scale(1.1);
  }
  100% {
    transform: translate(-30px, 30px) scale(0.95);
  }
}

/* Reduce float animation on mobile */
@media (max-width: 767px) {
  @keyframes float {
    0% {
      transform: translate(0, 0) scale(1);
    }
    50% {
      transform: translate(15px, -15px) scale(1.05);
    }
    100% {
      transform: translate(-15px, 15px) scale(0.98);
    }
  }
}

.projects-wrapper {
  position: relative;
  width: 100%;
  overflow: visible;
  z-index: 2;
}

.projects-heading {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
  pointer-events: none;
  transition: color 0.8s ease, text-shadow 0.8s ease;
  padding: 1rem;
}

@media (min-width: 768px) {
  .projects-heading {
    padding: 2rem 1rem;
  }
}

.heading-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 1rem;
}

@media (min-width: 1024px) {
  .heading-container {
    padding: 0 2rem;
  }
}

.heading-text {
  font-size: 2rem;
  font-weight: 600;
  color: #ebebea;
  text-align: left;
  line-height: 1.2;
  margin: 0;
}

@media (min-width: 480px) {
  .heading-text {
    font-size: 2.5rem;
  }
}

@media (min-width: 768px) {
  .heading-text {
    font-size: 3rem;
  }
}

@media (min-width: 1024px) {
  .heading-text {
    font-size: 3.5rem;
  }
}

.project-section {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  transition: opacity 0.5s ease;
  margin: 0;
  border: none;
}

@media (min-width: 768px) {
  .project-section {
    padding: 2rem;
  }
}

/* Mobile: stack content vertically */
.project-content {
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  z-index: 5;
  text-align: center;
}

/* Tablet and up: side by side layout */
@media (min-width: 768px) {
  .project-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    text-align: left;
  }
  
  .project-content.reverse {
    direction: rtl;
  }
  
  .project-content.reverse > * {
    direction: ltr;
  }
}

@media (min-width: 1024px) {
  .project-content {
    gap: 3rem;
  }
}

/* Project info styling */
.project-info {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
}

@media (min-width: 768px) {
  .project-info {
    max-width: none;
  }
}

.project-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ebebea;
}

@media (min-width: 768px) {
  .project-title {
    font-size: 3.25rem;
    margin-bottom: 1.2rem;
  }
}

@media (min-width: 1024px) {
  .project-title {
    font-size: 4rem;
  }
}

.project-description {
  font-size: 1.5rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #ebebea;
}

@media (min-width: 768px) {
  .project-description {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  justify-content: center;
}

@media (min-width: 768px) {
  .tech-stack {
    gap: 0.8rem;
    margin-bottom: 2rem;
    justify-content: flex-start;
  }
}

.tech-stack span {
  background-color: #ebebea;
  color: #030303;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1.25rem;
  font-weight: 500;
  white-space: nowrap;
}

@media (min-width: 768px) {
  .tech-stack span {
    padding: 0.6rem 1.2rem;
    font-size: 1.4rem;
  }
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

@media (min-width: 768px) {
  .project-links {
    gap: 1.5rem;
    justify-content: flex-start;
  }
}

.project-link {
  color: white;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 600;
  transition: all 0.3s ease;
  white-space: nowrap;
}

@media (min-width: 768px) {
  .project-link {
    font-size: 1.6rem;
  }
}

.project-link:hover {
  transform: translateX(5px);
}

/* Project image styling */
.project-image {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  width: 100%;
  max-width: 400px;
}

@media (min-width: 768px) {
  .project-image {
    max-width: none;
  }
}

.project-image img {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.5s ease;
  display: block;
  vertical-align: top;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

@media (min-width: 768px) {
  .project-image img {
    max-width: 500px;
    border-radius: 10px;
  }
}

/* Disable hover effects on touch devices */
@media (hover: hover) {
  .project-section:hover .project-image img {
    transform: translateY(-5px);
  }
}

/* Performance optimizations for mobile */
@media (max-width: 767px) {
  .project-container {
    transform: translateZ(0);
    backface-visibility: hidden;
  }
  
  .blob {
    will-change: transform;
  }
  
  .project-image img {
    will-change: auto;
  }
}

/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .blob {
    animation: none !important;
  }
}
</style>