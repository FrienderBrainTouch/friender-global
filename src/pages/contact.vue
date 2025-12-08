<template>
  <div class="bg-white min-h-screen py-16">
    <!-- 제목 -->
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
      <div class="text-center">
        <h1 class="text-4xl lg:text-5xl font-bold text-friender-darkest mb-6">
          {{ t('contact_us') }}
        </h1>
        <p class="text-lg text-gray-600 leading-relaxed">
          {{ t('contact_friendly_message') }}
        </p>
      </div>
    </div>

    <!-- 폼 -->
    <div class="w-full py-12">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <form @submit.prevent="submitForm" class="space-y-6">
          <!-- 이름과 이메일 (2열 레이아웃) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                {{ t('name') }}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                v-model="form.name"
                :placeholder="t('name_placeholder')"
                class="block w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-friender-primary focus:border-friender-primary transition-colors"
                required
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                {{ t('email_address') }}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                v-model="form.email"
                placeholder="you@example.com"
                class="block w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-friender-primary focus:border-friender-primary transition-colors"
                required
              />
            </div>
          </div>

          <!-- 제목 -->
          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
              {{ t('subject') }}
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              v-model="form.subject"
              :placeholder="t('subject_placeholder')"
              class="block w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-friender-primary focus:border-friender-primary transition-colors"
              required
            />
          </div>

          <!-- 메시지 -->
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
              {{ t('message') }}
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              v-model="form.message"
              :placeholder="t('message_placeholder')"
              class="block w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-friender-primary focus:border-friender-primary transition-colors resize-y"
              required
            ></textarea>
          </div>

          <!-- 제출 버튼 -->
          <div class="flex justify-center pt-4">
            <button
              type="submit"
              class="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-medium text-white bg-friender-primary hover:bg-friender-dark transition-all duration-300 cursor-pointer"
            >
              {{ t('submit_inquiry') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from '#imports';

const { t } = useI18n();

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const submitForm = () => {
  // Handle form submission logic here
  console.log('Form submitted:', form.value);
  alert('Form submitted! (Check console)');
};
</script>
