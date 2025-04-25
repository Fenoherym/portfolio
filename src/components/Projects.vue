<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
        animateCards()
      }
    })
  }, { threshold: 0.1 })

  const section = document.querySelector('#projects')
  if (section) observer.observe(section)
})

const animateCards = () => {
  const cards = document.querySelectorAll('.project-card')
  gsap.from(cards, {
    duration: 0.8,
    y: 60,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
  })
}

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with real-time inventory management and secure payment processing.',
    image: 'https://placehold.co/600x400',
    tech: ['Vue.js', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates and team collaboration features.',
    image: 'https://placehold.co/600x400',
    tech: ['React', 'Firebase', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI-powered responses and multi-language support.',
    image: 'https://placehold.co/600x400',
    tech: ['Vue.js', 'Python', 'OpenAI'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  }
]
</script>

<template>
  <section id="projects" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
          Featured Projects
        </h2>
        <p class="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Here are some of my recent works that showcase my skills and experience
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in projects" 
          :key="project.title"
          :class="['group transform transition-all duration-500',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
          `delay-[${index * 200}ms]`]"
        >
          <div class="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <!-- Project Image -->
            <div class="relative overflow-hidden aspect-video">
              <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <!-- Hover Links -->
              <div class="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a 
                  :href="project.liveUrl"
                  class="px-4 py-2 bg-[#42b883] text-white rounded-lg hover:bg-[#3aa876] transition-colors"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a 
                  :href="project.githubUrl"
                  class="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>

            <!-- Project Info -->
            <div class="p-6">
              <h3 class="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                {{ project.title }}
              </h3>
              <p class="text-slate-600 dark:text-slate-300 mb-4">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in project.tech" 
                  :key="tech"
                  class="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.project-card {
  perspective: 1000px;
}

.project-card:hover {
  z-index: 10;
}
</style>
