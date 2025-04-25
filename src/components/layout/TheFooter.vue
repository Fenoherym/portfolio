<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-2xl font-bold mb-4 bg-gradient-to-r from-laravel-primary to-vue-primary bg-clip-text text-transparent">
            Portfolio
          </h3>
          <p class="text-gray-400">
            Full Stack Developer specialized in Laravel and Vue.js
          </p>
        </div>
        
        <div>
          <h4 class="text-xl font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li v-for="item in menuItems" :key="item.link">
              <a :href="item.link" class="text-gray-400 hover:text-white transition-colors">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-xl font-semibold mb-4">Social Media</h4>
          <div class="flex gap-4">
            <a v-for="social in socials" 
               :key="social.name"
               :href="social.link"
               class="text-gray-400 hover:text-white transition-colors">
              <component :is="social.icon" class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} Portfolio. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const menuItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Skills', link: '#skills' },
  { name: 'Contact', link: '#contact' }
]

const socials = [
  { name: 'GitHub', link: '#', icon: 'GitHubIcon' },
  { name: 'LinkedIn', link: '#', icon: 'LinkedInIcon' },
  { name: 'Twitter', link: '#', icon: 'TwitterIcon' }
]
</script>