<template id="tech">
  <section class="isolate overflow-hidden bg-[#EBEBEA] pt-16 pb-0 mb-0 relative" id="tech" style="font-size: 0; margin-bottom: -1px; padding-bottom: 0">
    <div class="relative mx-auto max-w-7xl pt-0 px-6 lg:px-8" style="font-size: 16px">
      <div class="relative px-4 md:px-14" ref="imageContainer">
        <div class="flex items-center mb-8">
          <p class="font-inter text-[25px] md:text-[45px] font-semibold text-[#030303] text-center md:text-left">
            my technical background
          </p>
        </div>

        <!-- Row 1 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:pr-16 mb-12">
          <!-- Software Dev -->
          <div class="tech-box relative animated-skill" :class="{ 'bounce-in': isVisible }" :style="{ animationDelay: '0ms' }">
            <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#B57EDC] to-transparent h-4/5"></div>
            <div class="pl-6">
              <div class="flex items-start mb-3">
                <i class="fas fa-code text-3xl mr-4" style="color: #B57EDC"></i>
                <div class="relative">
                  <h2 class="text-[#030303] text-[25px] font-semibold">Software</h2>
                  <div class="h-[10px] w-24 absolute underline-highlight" style="background-color: #B57EDC; top: 25px; z-index: -1"></div>
                  <h2 class="text-[#030303] text-[25px] font-semibold mb-2">Development</h2>
                </div>
              </div>
              <p class="text-[#B57EDC] text-[14px] mb-4">Python, JavaScript, C++, C</p>
              <div class="flex flex-col">
                <span class="text-[#818181] text-[11px] mb-1">&lt;h3&gt;</span>
                <div class="flex">
                  <div class="w-[1px] bg-[#818181] ml-3 mr-4"></div>
                  <div class="tech-content py-3">
                    <p class="text-[#818181] text-[11px]">I’m comfortable with both object-oriented and functional programming.</p>
                  </div>
                </div>
                <span class="text-[#818181] text-[11px] mt-1">&lt;/h3&gt;</span>
              </div>
            </div>
          </div>

          <!-- Frontend -->
          <div class="tech-box relative animated-skill" :class="{ 'bounce-in': isVisible }" :style="{ animationDelay: '200ms' }">
            <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#C8A2C8] to-transparent h-4/5"></div>
            <div class="pl-6">
              <div class="flex items-start mb-3">
                <i class="fas fa-window-maximize text-3xl mr-4" style="color: #C8A2C8"></i>
                <div class="relative">
                  <h2 class="text-[#030303] text-[25px] font-semibold">Frontend</h2>
                  <div class="h-[10px] w-24 absolute underline-highlight" style="background-color: #C8A2C8; top: 25px; z-index: -1"></div>
                  <h2 class="text-[#030303] text-[25px] font-semibold mb-2">Engineering</h2>
                </div>
              </div>
              <p class="text-[#B57EDC] text-[14px] mb-4">HTML/CSS, React, Node.js</p>
              <div class="flex flex-col">
                <span class="text-[#818181] text-[11px] mb-1">&lt;h3&gt;</span>
                <div class="flex">
                  <div class="w-[1px] bg-[#818181] ml-3 mr-4"></div>
                  <div class="tech-content py-3">
                    <p class="text-[#818181] text-[11px]">I like making interactive UIs to make the web feel alive.</p>
                  </div>
                </div>
                <span class="text-[#818181] text-[11px] mt-1">&lt;/h3&gt;</span>
              </div>
            </div>
          </div>

          <!-- UI/UX -->
          <div class="tech-box relative animated-skill" :class="{ 'bounce-in': isVisible }" :style="{ animationDelay: '400ms' }">
            <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#D8BFD8] to-transparent h-4/5"></div>
            <div class="pl-6">
              <div class="flex items-start mb-3">
                <i class="fas fa-mobile-alt text-3xl mr-4" style="color: #D8BFD8"></i>
                <div class="relative">
                  <h2 class="text-[#030303] text-[25px] font-semibold">UI/UX</h2>
                  <div class="h-[10px] w-24 absolute underline-highlight" style="background-color: #D8BFD8; top: 25px; z-index: -1"></div>
                </div>
              </div>
              <p class="text-[#B57EDC] text-[14px] mb-4">Figma, Spline</p>
              <div class="flex flex-col">
                <span class="text-[#818181] text-[11px] mb-1">&lt;h3&gt;</span>
                <div class="flex">
                  <div class="w-[1px] bg-[#818181] ml-3 mr-4"></div>
                  <div class="tech-content py-3">
                    <p class="text-[#818181] text-[11px]">I like designing intuitive, user-friendly digital experiences.</p>
                  </div>
                </div>
                <span class="text-[#818181] text-[11px] mt-1">&lt;/h3&gt;</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Row 2 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:pl-16">
          <!-- AI / ML -->
          <div class="tech-box relative animated-skill" :class="{ 'bounce-in': isVisible }" :style="{ animationDelay: '600ms' }">
            <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#E6E6FA] to-transparent h-4/5"></div>
            <div class="pl-6">
              <div class="flex items-start mb-3">
                <i class="fas fa-server text-3xl mr-4" style="color: #E6E6FA"></i>
                <div class="relative">
                  <h2 class="text-[#030303] text-[25px] font-semibold">AI &</h2>
                  <div class="h-[10px] w-24 absolute underline-highlight" style="background-color: #E6E6FA; top: 25px; z-index: -1"></div>
                  <h2 class="text-[#030303] text-[25px] font-semibold mb-2">Machine learning</h2>
                </div>
              </div>
              <p class="text-[#B57EDC] text-[14px] mb-4">Numpy, Tensorflow, Opencv</p>
              <div class="flex flex-col">
                <span class="text-[#818181] text-[11px] mb-1">&lt;h3&gt;</span>
                <div class="flex">
                  <div class="w-[1px] bg-[#818181] ml-3 mr-4"></div>
                  <div class="tech-content py-3">
                    <p class="text-[#818181] text-[11px]">Still early in my ML journey, but I’ve done few projects and enjoyed working with real data.</p>
                  </div>
                </div>
                <span class="text-[#818181] text-[11px] mt-1">&lt;/h3&gt;</span>
              </div>
            </div>
          </div>

          <!-- Game Dev -->
          <div class="tech-box relative animated-skill" :class="{ 'bounce-in': isVisible }" :style="{ animationDelay: '800ms' }">
            <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#DDA0DD] to-transparent h-4/5"></div>
            <div class="pl-6">
              <div class="flex items-start mb-3">
                <i class="fas fa-brain text-3xl mr-4" style="color: #DDA0DD"></i>
                <div class="relative">
                  <h2 class="text-[#030303] text-[25px] font-semibold">Game</h2>
                  <div class="h-[10px] w-24 absolute underline-highlight" style="background-color: #DDA0DD; top: 25px; z-index: -1"></div>
                  <h2 class="text-[#030303] text-[25px] font-semibold mb-2">Development</h2>
                </div>
              </div>
              <p class="text-[#B57EDC] text-[14px] mb-4">Unity, Godot, Blender, Maya</p>
              <div class="flex flex-col">
                <span class="text-[#818181] text-[11px] mb-1">&lt;h3&gt;</span>
                <div class="flex">
                  <div class="w-[1px] bg-[#818181] ml-3 mr-4"></div>
                  <div class="tech-content py-3">
                    <p class="text-[#818181] text-[11px]">I'm passionate about game development and love bringing ideas to life through engaging mechanics and storytelling.</p>
                  </div>
                </div>
                <span class="text-[#818181] text-[11px] mt-1">&lt;/h3&gt;</span>
              </div>
            </div>
          </div>

          <!-- Cybersecurity -->
          <div class="tech-box relative animated-skill" :class="{ 'bounce-in': isVisible }" :style="{ animationDelay: '1000ms' }">
            <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#CBAACB] to-transparent h-4/5"></div>
            <div class="pl-6">
              <div class="flex items-start mb-3">
                <i class="fas fa-vial text-3xl mr-4" style="color: #CBAACB"></i>
                <div class="relative">
                  <h2 class="text-[#030303] text-[25px] font-semibold">Cybersecurity</h2>
                  <div class="h-[10px] w-24 absolute underline-highlight" style="background-color: #CBAACB; top: 25px; z-index: -1"></div>
                </div>
              </div>
              <p class="text-[#B57EDC] text-[14px] mb-4">Bash, C++, SQL</p>
              <div class="flex flex-col">
                <span class="text-[#818181] text-[11px] mb-1">&lt;h3&gt;</span>
                <div class="flex">
                  <div class="w-[1px] bg-[#818181] ml-3 mr-4"></div>
                  <div class="tech-content py-3">
                    <p class="text-[#818181] text-[11px]">CTFs sparked my curiosity for cybersecurity, and now I’m hooked on exploring how systems work, and how they break.</p>
                  </div>
                </div>
                <span class="text-[#818181] text-[11px] mt-1">&lt;/h3&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wave-bottom">
      <img src="/purple-wave.png" alt="Wave Background" class="w-full h-auto object-bottom object-cover" style="display: block; margin-bottom: -2px; vertical-align: bottom" />
    </div>
  </section>
</template>
