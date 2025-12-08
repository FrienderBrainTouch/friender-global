<template>
  <footer
    class="w-full bg-friender-darkest border-t border-friender-dark"
    style="padding-top: 3rem; padding-bottom: 3rem"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="space-y-4 text-sm text-gray-300">
        <!-- 회사 정보 -->
        <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <div class="space-y-2">
            <p>{{ t('footer_company') }}</p>
            <p>{{ t('footer_contact') }}</p>
            <p>
              {{ t('footer_business') }} |
              <a :href="`mailto:${t('footer_email')}`" class="text-gray-300 hover:text-white">{{
                t('footer_email')
              }}</a>
            </p>
            <p>{{ t('footer_address') }}</p>
          </div>
        </div>

        <!-- 통신판매중개자 안내 -->
        <div class="pt-4 border-t border-gray-700">
          <p class="text-xs text-gray-400 leading-relaxed">
            {{ t('footer_notice') }}
          </p>
        </div>

        <!-- 저작권 -->
        <div class="pt-4 border-t border-gray-700">
          <p class="text-center text-xs text-gray-400">
            {{ t('footer_copyright') }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from '#imports';

const { t } = useI18n();
</script>
