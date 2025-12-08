<template>
  <div class="bg-white">
    <div class="px-4 py-5 sm:p-6">
      <h1 class="text-3xl font-bold leading-tight text-gray-900 mb-4">
        {{ t('story') }}
      </h1>
      <p class="text-lg text-gray-500 mb-6">
        {{ t('service_intro') }}
      </p>
      <div class="flex justify-center">
        <NuxtLink
          to="#"
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium text-white bg-friender-primary hover:bg-friender-dark transition-colors"
        >
          {{ t('go_to_service') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '#imports';

const { t } = useI18n();
</script>
