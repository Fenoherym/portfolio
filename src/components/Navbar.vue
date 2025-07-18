<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{
  isDarkMode: boolean
}>()

const emit = defineEmits<{
  (e: 'toggle-theme'): void
}>()

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const activeSection = ref('about')

const navItems = [
  { label: 'À propos', section: 'about' },
  { label: 'Compétences', section: 'skills' },
  { label: 'Projets', section: 'projects' },
  { label: 'Contact', section: 'contact' },
];

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })

  // Add intersection observer for sections
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, { threshold: 0.5 })

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section)
  })
})

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId.toLowerCase())
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    activeSection.value = sectionId.toLowerCase()
  }
}
</script>

<template>
  <nav 
    :class="[
      'fixed w-full z-50 transition-all duration-300',
      isScrolled ? 'py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'py-6'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a href="#" class="text-2xl font-bold text-green-600 dark:text-green-400">
          FM.
        </a>

        <!-- Mobile Menu Button -->
        <div class="flex items-center gap-4 md:hidden">
          <button 
            @click="emit('toggle-theme')"
            class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <svg v-if="isDarkMode" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
            </svg>
            <svg v-else class="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>
          <button 
            @click="toggleMenu"
            class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <svg 
              class="w-6 h-6 text-slate-600 dark:text-slate-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                v-if="!isMenuOpen"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path 
                v-else
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a 
            v-for="item in navItems" 
            :key="item.section"
            @click.prevent="scrollToSection(item.section)"
            class="relative text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors cursor-pointer"
            :class="{ 'text-green-600 dark:text-green-400': activeSection === item.section }"
          >
            <span>{{ item.label }}</span>
            <span 
              class="absolute bottom-0 left-0 h-0.5 bg-green-600 dark:bg-green-400 transition-all duration-300"
              :class="[activeSection === item.section ? 'w-full' : 'w-0']"
            ></span>
          </a>

          <a      
            href="https://mj-stack.com/articles"  
            target="_blank"   
            class="relative text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors cursor-pointer"           
          >
            <span>Blog</span>
            <span 
              class="absolute bottom-0 left-0 h-0.5 bg-green-600 dark:bg-green-400 transition-all duration-300"          
            ></span>
          </a>

          <!-- Added Theme Toggle Button for Desktop -->
          <button 
            @click="emit('toggle-theme')"
            class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <svg v-if="isDarkMode" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
            </svg>
            <svg v-else class="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Panel -->
      <div v-show="isMenuOpen" class="md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1">
              <a 
                v-for="item in ['About', 'Skills', 'Projects', 'Contact']" 
                :key="item"
                @click.prevent="scrollToSection(item.toLowerCase()); isMenuOpen = false"
                class="block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                :class="{ 'text-green-600 dark:text-green-400 bg-slate-100 dark:bg-slate-800': activeSection === item.toLowerCase() }"
              >
                {{ item }}
              </a>
              <a   
                href="https://mj-stack.com/articles"  
                target="_blank" 
                class="block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                
              >
                Blog
              </a>
            </div>
      </div>
    </div>
  </nav>
</template>