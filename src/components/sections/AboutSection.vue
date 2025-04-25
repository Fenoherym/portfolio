<template>
  <section id="about" class="py-32 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 opacity-80"></div>
    <div class="absolute inset-0 bg-[url('/src/assets/grid-pattern.svg')] opacity-5"></div>
    
    <div class="container mx-auto px-4 relative">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-laravel-primary to-vue-primary bg-clip-text text-transparent">
        About Me
      </h2>
      
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div class="order-2 md:order-1 space-y-8">
          <div class="space-y-4">
            <h3 class="text-3xl font-bold dark:text-white">
              Full Stack Developer
              <span class="text-laravel-primary">.</span>
            </h3>
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Passionate about crafting exceptional web experiences with Laravel and Vue.js. 
              I specialize in building modern, efficient, and scalable web applications 
              that deliver real value.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-6">
            <div class="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h4 class="font-semibold text-laravel-primary mb-1">3+ Years</h4>
              <p class="text-gray-600 dark:text-gray-400">Experience</p>
            </div>
            <div class="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h4 class="font-semibold text-vue-primary mb-1">20+ Projects</h4>
              <p class="text-gray-600 dark:text-gray-400">Completed</p>
            </div>
          </div>

          <div class="flex gap-6">
            <a href="#contact" 
               class="px-8 py-3 rounded-xl bg-gradient-to-r from-laravel-primary to-vue-primary text-white font-semibold hover:opacity-90 transition-opacity">
              Contact Me
            </a>
            <a href="#" 
               class="px-8 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-700 hover:border-vue-primary dark:hover:border-vue-primary text-gray-700 dark:text-gray-300 font-semibold transition-colors">
              Download CV
            </a>
          </div>
        </div>

        <div class="order-1 md:order-2">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-br from-laravel-primary to-vue-primary blur-3xl opacity-20"></div>
            <div class="relative aspect-square rounded-2xl bg-gradient-to-br from-laravel-primary to-vue-primary p-2">
              <div class="w-full h-full rounded-xl overflow-hidden bg-white dark:bg-gray-800">
                <img src="https://placehold.co/400" alt="Profile" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-laravel-primary to-vue-primary rounded-full opacity-50 blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>