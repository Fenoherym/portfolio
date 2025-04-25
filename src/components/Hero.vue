<script setup lang="ts">
import { onMounted, ref } from 'vue'

const scrollToAbout = () => {
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
}

const text = "Bonjour, Je suis"
const displayText = ref('')

onMounted(() => {
  const elements = document.querySelectorAll('.animate-on-mount')
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('slide-up')
    }, index * 200)
  })

  // New typewriter animation
  let i = 0
  const typeWriter = () => {
    if (i < text.length) {
      displayText.value += text.charAt(i)
      i++
      setTimeout(typeWriter, 100)
    }
  }
  typeWriter()
})
</script>

<template>
  <section class="min-h-screen relative flex items-center">
    <!-- Background Pattern -->
    <div class="absolute inset-0 dark:opacity-20 opacity-5">
      <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="text-center space-y-8">
        <!-- Greeting with typewriter effect -->
        <div class="animate-on-mount opacity-0">
          <span class="text-[#42b883] dark:text-[#a3e4d7] text-lg font-medium typewriter">
            {{ displayText }}<span class="cursor">|</span>
          </span>
        </div>

        <!-- Name -->
        <h1 class="animate-on-mount opacity-0 text-5xl md:text-7xl font-bold text-slate-900 dark:text-white">
          <span class="inline-block">Fenohery</span>
          <span class="inline-block ml-4 text-[#42b883] dark:text-[#a3e4d7]">Manjaka</span>
        </h1>

        <!-- Title -->
        <div class="animate-on-mount opacity-0">
          <h2 class="text-2xl md:text-3xl text-slate-600 dark:text-slate-300">
             Développeur Web Fullstack 
          </h2>
        </div>

        <!-- Description -->
        <p class="animate-on-mount opacity-0 max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
          Crafting digital experiences with clean code and creative design. 
          Specialized in building modern web applications that make a difference.
        </p>

        <!-- CTA Buttons -->
        <div class="animate-on-mount opacity-0 flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <button 
            @click="scrollToAbout"
            class="group px-8 py-3 bg-[#42b883] text-white rounded-full hover:bg-[#3aa876] transition-all duration-300"
          >
            Explore My Work
            <span class="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
          <a 
            href="#contact"
            class="px-8 py-3 border-2 border-[#42b883] dark:border-[#a3e4d7] text-[#42b883] dark:text-[#a3e4d7] rounded-full hover:bg-[#42b883]/5 dark:hover:bg-slate-800 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-slate-600 dark:text-[#a3e4d7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
.slide-up {
  animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes slideUp {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.cursor {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  from, to { opacity: 1; }
  50% { opacity: 0; }
}
</style>