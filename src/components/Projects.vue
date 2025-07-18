<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import axiosClient from '../axios/axios'
import { API_BASE_URL } from '../config'

type Stack = {
  id: number,
  name: string,
}

type Project = {
    id: number,
    name: string,
    slug: string,
    description: string,
    url: string,
    repository: string,
    image: string,
    stacks: Stack[],
} 



const isVisible = ref(false)
const projects = ref<Project[]>([])

const error = ref('')

onMounted(() => {
  getProjects()
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

const getProjects = async() => {
  try {
    const response = await axiosClient.get('/api/projects')
    projects.value = response.data.data
  } catch (e) {
    projects.value = []
    error.value = 'Impossible de charger les projets. Veuillez réessayer ultérieurement.'
  }
}

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


</script>

<template>
  <section id="projects" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
           Projets sélectionnés
        </h2>
        <p class="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Voici quelques-unes de mes réalisations qui mettent en valeur mes compétences et mon expérience.
        </p>
        <p v-if="error !== ''" class="mt-4 text-red-500 dark:text-red-400">{{ error }}</p>
        <div class="mt-4 flex justify-center items-center p-10" v-if="projects.length === 0 && error === ''">
            <!-- Loading Spinner -->
            <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin h-32 w-32 text-blue-500" viewBox="0 0 24 24">
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
                fill="none"
              />
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg> 
         
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div 
          v-for="(project, index) in projects" 
          :key="project.id"
          :class="['group transform transition-all duration-500',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
          `delay-[${index * 200}ms]`]"
        >
          <div class="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <!-- Project Image -->
            <div class="relative overflow-hidden aspect-video">
              <img 
                :src="`${API_BASE_URL}/images/${project.image}`"
                :alt="project.name"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <!-- Hover Links -->
              <div class="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a 
                  :href="project.url"
                  class="px-4 py-2 bg-[#42b883] text-white rounded-lg hover:bg-[#3aa876] transition-colors"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a 
                  :href="project.repository"
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
                {{ project.name }}
              </h3>
              <p class="text-slate-600 dark:text-slate-300 mb-4">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in project.stacks" 
                  :key="tech.id"
                  class="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                >
                  {{ tech.name }}
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
