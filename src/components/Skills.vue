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

  const section = document.querySelector('#skills')
  if (section) observer.observe(section)
})

const skills = {
  frontend: [
    { name: 'Vue.js', icon: '⚡', level: 'Avancé' },
    { name: 'React', icon: '⚛️', level: 'Avancé' },
    { name: 'TypeScript', icon: '📘', level: 'Intermédiaire' },
    { name: 'Tailwind CSS', icon: '🎨', level: 'Intermédiaire' }
  ],
  backend: [
    { name: 'Laravel', icon: '🔥', level: 'Expert' },
    { name: 'PHP', icon: '🐘', level: 'Avancé' },
    { name: 'MySQL', icon: '🐬', level: 'Avancé' },
    { name: 'PostgreSQL', icon: '🐘', level: 'Intermédiaire' }
  ],
  tools: [
    { name: 'Git', icon: '📦', level: 'Avancé' },
    { name: 'VS Code', icon: '💻', level: 'Avancé' },
    { name: 'Postman', icon: '🚀', level: 'Intermédiaire' },
    { name: 'npm/Composer', icon: '📦', level: 'Avancé' }
  ]

}
</script>

<template>
  <section id="skills" class="py-20 bg-slate-50/50 dark:bg-slate-800/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
          Ma pile technologique
        </h2>
        <p class="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Technologies et outils que j'utilise pour donner vie à mes idées
        </p>
      </div>

      <!-- Skills Container -->
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Frontend -->
        <div :class="['transform transition-all duration-500',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']">
          <div class="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg h-full hover:shadow-xl transition-shadow">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
                <span class="text-2xl">💻</span>
              </div>
              <h3 class="text-xl font-semibold text-slate-900 dark:text-white">Frontend</h3>
            </div>
            <div class="grid gap-4">
              <div v-for="skill in skills.frontend" :key="skill.name"
                class="group flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <span class="text-2xl">{{ skill.icon }}</span>
                <div>
                  <h4 class="font-medium text-slate-900 dark:text-white">{{ skill.name }}</h4>
                  <p class="text-sm text-slate-500 dark:text-slate-400">{{ skill.level }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Backend -->
        <div :class="['transform transition-all duration-500 delay-200',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']">
          <div class="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg h-full hover:shadow-xl transition-shadow">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
                <span class="text-2xl">⚙️</span>
              </div>
              <h3 class="text-xl font-semibold text-slate-900 dark:text-white">Backend</h3>
            </div>
            <div class="grid gap-4">
              <div v-for="skill in skills.backend" :key="skill.name"
                class="group flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <span class="text-2xl">{{ skill.icon }}</span>
                <div>
                  <h4 class="font-medium text-slate-900 dark:text-white">{{ skill.name }}</h4>
                  <p class="text-sm text-slate-500 dark:text-slate-400">{{ skill.level }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tools -->
        <div :class="['transform transition-all duration-500 delay-300',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']">
          <div class="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg h-full hover:shadow-xl transition-shadow">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
                <span class="text-2xl">🛠️</span>
              </div>
              <h3 class="text-xl font-semibold text-slate-900 dark:text-white">Tools</h3>
            </div>
            <div class="grid gap-4">
              <div v-for="skill in skills.tools" :key="skill.name"
                class="group flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <span class="text-2xl">{{ skill.icon }}</span>
                <div>
                  <h4 class="font-medium text-slate-900 dark:text-white">{{ skill.name }}</h4>
                  <p class="text-sm text-slate-500 dark:text-slate-400">{{ skill.level }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>