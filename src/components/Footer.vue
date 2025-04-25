<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="py-8 bg-white dark:bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center">
        <!-- Logo -->
        <div class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
          TR.
        </div>

        <!-- Navigation -->
        <nav class="mb-6">
          <ul class="flex space-x-6">
            <li v-for="item in ['About', 'Skills', 'Projects', 'Contact']" :key="item">
              <a 
                :href="`#${item.toLowerCase()}`"
                class="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {{ item }}
              </a>
            </li>
          </ul>
        </nav>

        <!-- Social Links -->
        <div class="flex space-x-6 mb-6">
          <a 
            v-for="social in ['github', 'linkedin', 'twitter']" 
            :key="social"
            :href="`https://${social}.com/yourusername`"
            target="_blank"
            class="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <span class="capitalize">{{ social }}</span>
          </a>
        </div>

        <!-- Copyright -->
        <div class="text-sm text-slate-500 dark:text-slate-400">
          © {{ currentYear }} Trae Razaf. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>