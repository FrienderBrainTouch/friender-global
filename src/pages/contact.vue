<template>
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div class="px-4 py-5 sm:p-6">
      <h1 class="text-3xl font-bold leading-tight text-gray-900 mb-4">
        {{ t('contact_us') }}
      </h1>
      <form @submit.prevent="submitForm" class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">
            {{ t('name') }}
          </label>
          <div class="mt-1">
            <input
              type="text"
              name="name"
              id="name"
              v-model="form.name"
              class="shadow-sm focus:ring-friender-primary focus:border-friender-primary block w-full sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            {{ t('email') }}
          </label>
          <div class="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              v-model="form.email"
              class="shadow-sm focus:ring-friender-primary focus:border-friender-primary block w-full sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gray-700">
            {{ t('message') }}
          </label>
          <div class="mt-1">
            <textarea
              id="message"
              name="message"
              rows="4"
              v-model="form.message"
              class="shadow-sm focus:ring-friender-primary focus:border-friender-primary block w-full sm:text-sm border-gray-300 rounded-md"
              required
            ></textarea>
          </div>
        </div>

        <div class="flex justify-end">
          <button
            type="submit"
            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-friender-primary hover:bg-friender-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-friender-primary"
          >
            {{ t('send') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const { t } = useI18n();

const form = ref({
  name: '',
  email: '',
  message: '',
});

const submitForm = () => {
  // Handle form submission logic here
  console.log('Form submitted:', form.value);
  alert('Form submitted! (Check console)');
};
</script>
