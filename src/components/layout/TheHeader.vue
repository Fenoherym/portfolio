<template>
  <header class="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <a href="#" class="text-2xl font-bold bg-gradient-to-r from-laravel-primary to-vue-primary bg-clip-text text-transparent">
          Portfolio
        </a>
        
        <div class="flex items-center gap-6">
          <a v-for="item in menuItems" 
             :key="item.link" 
             :href="item.link"
             class="text-gray-600 hover:text-laravel-primary dark:text-gray-300 dark:hover:text-vue-primary transition-colors">
            {{ item.name }}
          </a>
          <ThemeToggle @toggle-theme="$emit('toggle-theme')" />
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const menuItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Skills', link: '#skills' },
  { name: 'Contact', link: '#contact' }
]
</script>