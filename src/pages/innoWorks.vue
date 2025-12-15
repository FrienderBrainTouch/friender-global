<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- 왼쪽: 텍스트 -->
        <div>
          <h1
            class="text-4xl lg:text-5xl font-bold text-friender-darkest mb-6 leading-relaxed whitespace-pre-line"
          >
            {{ t('innoWorks_hero_title') }}
          </h1>
          <p class="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed whitespace-pre-line">
            {{ t('innoWorks_hero_subtitle') }}
          </p>
          <NuxtLink
            :to="localePath('/contact')"
            class="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-medium text-white bg-friender-primary hover:bg-friender-dark transition-all duration-300 cursor-pointer"
          >
            {{ t('innoWorks_hero_button') || t('story_hero_button') }}
          </NuxtLink>
        </div>

        <!-- 오른쪽: 이미지 -->
        <div class="flex justify-center lg:justify-end">
          <div class="w-full h-96 bg-gray-100 rounded-2xl overflow-hidden">
            <img src="/images/inno_works.png" alt="Inno Works" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>

    <!-- 3개 피처 섹션 -->
    <div class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- 피처 1 -->
          <div
            class="bg-white p-8 text-center border border-gray-100 transition-all duration-300 hover:border-friender-primary/30 rounded-2xl"
          >
            <div
              class="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Palette :size="48" class="text-friender-primary" stroke-width="1.5" />
            </div>
            <h3 class="text-xl font-bold text-friender-darkest mb-4">
              {{ t('innoWorks_ai_tools_title') }}
            </h3>
            <p class="text-base text-gray-600 leading-relaxed">
              {{ t('innoWorks_ai_tools_desc') }}
            </p>
          </div>

          <!-- 피처 2 -->
          <div
            class="bg-white p-8 text-center border border-gray-100 transition-all duration-300 hover:border-friender-primary/30 rounded-2xl"
          >
            <div
              class="w-24 h-24 bg-beige-50 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Lightbulb :size="48" class="text-friender-primary" stroke-width="1.5" />
            </div>
            <h3 class="text-xl font-bold text-friender-darkest mb-4">
              {{ t('innoWorks_inventor_title') }}
            </h3>
            <p class="text-base text-gray-600 leading-relaxed">
              {{ t('innoWorks_inventor_desc') }}
            </p>
          </div>

          <!-- 피처 3 -->
          <div
            class="bg-white p-8 text-center border border-gray-100 transition-all duration-300 hover:border-friender-primary/30 rounded-2xl"
          >
            <div
              class="w-24 h-24 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Video :size="48" class="text-friender-primary" stroke-width="1.5" />
            </div>
            <h3 class="text-xl font-bold text-friender-darkest mb-4">
              {{ t('innoWorks_presentation_title') }}
            </h3>
            <p class="text-base text-gray-600 leading-relaxed">
              {{ t('innoWorks_presentation_desc') }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 학부모님과 선생님을 위한 섹션 -->
    <div class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- 왼쪽: 이미지 -->
          <div class="flex justify-center lg:justify-start order-2 lg:order-1">
            <div class="w-64 h-64 bg-beige-50 rounded-2xl flex items-center justify-center">
              <!-- 이미지 영역 -->
              <div class="w-48 h-48 bg-gray-200 rounded-full"></div>
            </div>
          </div>

          <!-- 오른쪽: 텍스트 -->
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl font-bold text-friender-darkest mb-8">
              {{ t('innoWorks_for_parents_title') }}
            </h2>
            <div class="space-y-6">
              <!-- 피처 1 -->
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 bg-friender-primary rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <Sparkles :size="24" class="text-white" stroke-width="2" />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-friender-darkest mb-2">
                    {{ t('innoWorks_creative_thinking') }}
                  </h3>
                  <p class="text-base text-gray-600 leading-relaxed">
                    {{ t('innoWorks_for_parents_desc') }}
                  </p>
                </div>
              </div>

              <!-- 피처 2 -->
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 bg-friender-primary rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <CheckCircle2 :size="24" class="text-white" stroke-width="2" />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-friender-darkest mb-2">
                    {{ t('innoWorks_problem_solving_skills') }}
                  </h3>
                  <p class="text-base text-gray-600 leading-relaxed">
                    {{ t('innoWorks_for_parents_desc') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 하단 CTA 섹션 -->
    <div class="bg-green-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-friender-darkest mb-6">
          {{ t('innoWorks_cta_title') || t('story_cta_title') }}
        </h2>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          {{ t('innoWorks_cta_desc') || t('story_cta_desc') }}
        </p>
        <NuxtLink
          :to="localePath('/contact')"
          class="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-medium text-white bg-friender-primary hover:bg-friender-dark transition-all duration-300 cursor-pointer"
        >
          {{ t('innoWorks_cta_button') || t('story_cta_button') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n, useLocalePath } from '#imports';
import { Palette, Lightbulb, Video, Sparkles, CheckCircle2 } from 'lucide-vue-next';

const { t } = useI18n();
const localePath = useLocalePath();
</script>
