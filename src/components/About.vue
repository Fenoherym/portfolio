<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    })
  }, { threshold: 0.1 })

  const section = document.querySelector('#about')
  if (section) observer.observe(section)
})

const stats = [
  { label: 'Years Experience', value: '4+' },
  { label: 'Projects Completed', value: '50+' },
  { label: 'Satisfied Clients', value: '30+' }
]
</script>

<template>
  <section id="about" class="py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 
          :class="['text-3xl md:text-4xl font-bold mb-4 dark:text-white transition-all duration-700 delay-100',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
        >
          About Me
        </h2>
        <div 
          :class="['w-20 h-1 bg-[#42b883] dark:bg-[#a3e4d7] mx-auto rounded-full transition-all duration-700 delay-200',
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0']"
        ></div>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Image Section -->
        <div 
          :class="['relative transition-all duration-700 delay-300',
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10']"
        >
          <div class="aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="../assets/images/fenohery.png" 
              alt="Profile"
              class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            >
          </div>
          <!-- Stats Cards -->
          <div class="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl">
            <div class="grid grid-cols-3 gap-4">
              <div v-for="stat in stats" :key="stat.label" class="text-center">
                <p class="text-2xl font-bold text-[#42b883] dark:text-[#a3e4d7]">{{ stat.value }}</p>
                <p class="text-sm text-slate-600 dark:text-slate-300">{{ stat.label }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Content Section -->
        <div 
          :class="['space-y-6 transition-all duration-700 delay-400',
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10']"
        >
          <h3 class="text-2xl font-semibold text-slate-900 dark:text-white">
            Passionate Full Stack Developer
          </h3>
          
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
            With a strong foundation in both front-end and back-end development, I create seamless digital experiences that combine aesthetic appeal with technical excellence. My approach focuses on writing clean, efficient code while ensuring exceptional user experiences.
          </p>

          <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
            I specialize in building modern web applications using cutting-edge technologies and best practices. My goal is to deliver solutions that not only meet current needs but are also scalable and maintainable for the future.
          </p>

          <div class="flex gap-4 pt-4">
            <a 
              href="#contact" 
              class="px-6 py-2 bg-[#42b883]  text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              class="px-6 py-2 border border-green-600 text-green-600 dark:text-green-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-slate-800 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>