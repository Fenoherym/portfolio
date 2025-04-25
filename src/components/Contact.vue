<script setup lang="ts">
import axios from 'axios'
import { ref, nextTick } from 'vue'

const api = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

const form = ref({
  name: '',
  email: '',
  message: ''
})

const errors = ref({
  name: '',
  email: '',
  message: ''
})

const showMessage = ref(false)
const showAnimation = ref<null | boolean>(null)
const isLoading = ref(false)

const validateForm = () => {
  let isValid = true
  errors.value = {
    name: '',
    email: '',
    message: ''
  }

  // Name validation
  if (form.value.name.length < 3) {
    errors.value.name = 'Le nom doit contenir au moins 3 caractères'
    isValid = false
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.value.email)) {
    errors.value.email = 'Veuillez entrer une adresse email valide'
    isValid = false
  }

  // Message validation
  if (form.value.message.length < 10) {
    errors.value.message = 'Le message doit contenir au moins 10 caractères'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }

  isLoading.value = true
 
  try {
    const response = await api.post('/api/contact', {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message,
    })

    if (response.status === 200) {
      form.value = {
        name: '',
        email: '',
        message: ''
      }
      showMessage.value = true
      nextTick(() => {
        setTimeout(() => {
          showAnimation.value = true
        }, 50)
      })

      setTimeout(() => {
        showAnimation.value = false
        setTimeout(() => {
          showMessage.value = false
          showAnimation.value = null
        }, 300)
      }, 3000)
      console.log(response)
    }
  } catch (error) {
    console.log(error)
  }
  finally {
    isLoading.value = false
  }
}
</script>

<template>
  <section id="contact" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
          Get In Touch
        </h2>
        <p class="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Have a project in mind? Let's work together to create something amazing.
        </p>       
        
        
      </div>
      <div class="fixed top-5 left-1/2 transform -translate-x-1/2 z-50" v-if="showMessage">      

          <div id="toast-simple" 
            :class="[
              'flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse',
              'text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200',
              'rounded-lg shadow-sm dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800',
              'transition-all duration-300 ease-in-out',
               showAnimation === null ? 'opacity-0 translate-y-2' : showAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            ]"
            role="alert">
              <svg class="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
              </svg>
              <div class="ps-4 text-sm font-normal">Votre message a été envoyé avec succès</div>
          </div>
      </div>
      <!-- Contact Form -->
      <div class="max-w-2xl mx-auto">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name"
              class="w-full px-4 py-3 dark:text-white rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-[#42b883] dark:focus:border-[#42b883] focus:ring-2 focus:ring-[#42b883]/20 outline-none transition-colors"
              :class="{ 'border-red-500': errors.name }"
              required
            >
            <p v-if="errors.name" class="mt-1 text-sm text-red-500">{{ errors.name }}</p>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email"
              class="w-full dark:text-white px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-[#42b883] dark:focus:border-[#42b883] focus:ring-2 focus:ring-[#42b883]/20 outline-none transition-colors"
              :class="{ 'border-red-500': errors.email }"
              required
            >
            <p v-if="errors.email" class="mt-1 text-sm text-red-500">{{ errors.email }}</p>
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
            <textarea 
              id="message" 
              v-model="form.message"
              rows="5"
              class="w-full px-4 dark:text-white py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-[#42b883] dark:focus:border-[#42b883] focus:ring-2 focus:ring-[#42b883]/20 outline-none transition-colors"
              :class="{ 'border-red-500': errors.message }"
              required
            ></textarea>
            <p v-if="errors.message" class="mt-1 text-sm text-red-500">{{ errors.message }}</p>
          </div>

          <button 
            type="submit"
            :disabled="isLoading"
            class="cursor-pointer w-full px-6 py-3 bg-[#42b883] hover:bg-[#3aa876] text-white rounded-lg transition-colors"
          >
       
            <span v-if="isLoading" class="inline-flex items-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
          </span>
          <span v-else>Send Message</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>