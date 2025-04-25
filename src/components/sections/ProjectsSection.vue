<template>
  <section id="projects" class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-laravel-primary to-vue-primary bg-clip-text text-transparent">
        My Projects
      </h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.id" 
             class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
          <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 dark:text-white">{{ project.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ project.description }}</p>
            <div class="flex gap-2">
              <span v-for="tech in project.technologies" :key="tech"
                    class="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A web application built with Laravel and Vue.js',
    image: '@/assets/project1.jpg',
    technologies: ['Laravel', 'Vue.js', 'Tailwind']
  },
  // Add more projects here
]
</script>