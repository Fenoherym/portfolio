<template>
  <section id="contact" class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-laravel-primary to-vue-primary bg-clip-text text-transparent">
        Contact Me
      </h2>
      
      <div class="max-w-2xl mx-auto">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label class="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
            <input type="text" v-model="form.name" 
                   class="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
          </div>
          
          <div>
            <label class="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input type="email" v-model="form.email" 
                   class="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
          </div>
          
          <div>
            <label class="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
            <textarea v-model="form.message" rows="5"
                      class="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700 dark:text-white"></textarea>
          </div>
          
          <button type="submit" 
                  class="w-full bg-gradient-to-r from-laravel-primary to-vue-primary text-white py-3 rounded-lg hover:opacity-90 transition-opacity">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  // Handle form submission
  console.log(form)
}
</script>