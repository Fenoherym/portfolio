<template>
  <section id="skills" class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-laravel-primary to-vue-primary bg-clip-text text-transparent">
        Skills
      </h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="category in skillCategories" :key="category.name" 
             class="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
          <h3 class="text-xl font-semibold mb-4 dark:text-white">{{ category.name }}</h3>
          <div class="space-y-4">
            <div v-for="skill in category.skills" :key="skill.name" class="space-y-2">
              <div class="flex justify-between">
                <span class="text-gray-600 dark:text-gray-300">{{ skill.name }}</span>
                <span class="text-gray-600 dark:text-gray-300">{{ skill.level }}%</span>
              </div>
              <div class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                <div class="h-full bg-gradient-to-r from-laravel-primary to-vue-primary rounded-full"
                     :style="{ width: `${skill.level}%` }">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'Vue.js', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 85 }
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Laravel', level: 90 },
      { name: 'PHP', level: 85 },
      { name: 'MySQL', level: 80 }
    ]
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 75 },
      { name: 'VS Code', level: 90 }
    ]
  }
]
</script>