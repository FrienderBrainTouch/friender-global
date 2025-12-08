<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center">
        <h1 class="text-4xl lg:text-5xl font-bold text-friender-darkest mb-4">
          {{ t('innoWorks_hero_title') }}
        </h1>
        <h2 class="text-2xl lg:text-3xl font-bold text-friender-primary mb-6">
          {{ t('innoWorks_hero_subtitle') }}
        </h2>
        <p class="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {{ t('innoWorks_hero_desc') }}
        </p>
      </div>
    </div>

    <!-- 상상력을 키우는 AI 도구 섹션 -->
    <div class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-friender-darkest mb-6">
              {{ t('innoWorks_ai_tools_title') }}
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              {{ t('innoWorks_ai_tools_desc') }}
            </p>
          </div>
          <div class="flex justify-center lg:justify-end">
            <div class="w-full h-64 bg-gray-100 rounded-2xl flex items-center justify-center">
              <!-- 이미지 영역 - 실제 이미지로 교체 필요 -->
              <Palette :size="80" class="text-friender-primary" stroke-width="1.5" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 문제 해결 척척 발명가 섹션 -->
    <div class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="flex justify-center lg:justify-start order-2 lg:order-1">
            <div class="w-full h-64 bg-gray-100 rounded-2xl flex items-center justify-center">
              <!-- 이미지 영역 - 실제 이미지로 교체 필요 -->
              <Lightbulb :size="80" class="text-friender-primary" stroke-width="1.5" />
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl font-bold text-friender-darkest mb-6">
              {{ t('innoWorks_inventor_title') }}
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              {{ t('innoWorks_inventor_desc') }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 나만의 작품 발표회 섹션 -->
    <div class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-friender-darkest mb-6">
              {{ t('innoWorks_presentation_title') }}
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              {{ t('innoWorks_presentation_desc') }}
            </p>
          </div>
          <div class="flex justify-center lg:justify-end">
            <div class="w-full h-64 bg-gray-100 rounded-2xl flex items-center justify-center">
              <!-- 이미지 영역 - 실제 이미지로 교체 필요 -->
              <Video :size="80" class="text-friender-primary" stroke-width="1.5" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 학부모님과 선생님을 위해 섹션 -->
    <div class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-friender-darkest mb-6">
            {{ t('innoWorks_for_parents_title') }}
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {{ t('innoWorks_for_parents_desc') }}
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div
            v-for="(feature, index) in parentFeatures"
            :key="index"
            class="bg-white p-8 text-center border border-gray-100 transition-all duration-300 hover:border-friender-primary/30 rounded-2xl"
          >
            <div
              class="w-16 h-16 bg-friender-primary rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <component :is="feature.icon" :size="32" class="text-white" stroke-width="2" />
            </div>
            <h3 class="text-xl font-bold text-friender-darkest">
              {{ t(feature.titleKey) }}
            </h3>
          </div>
        </div>
        <div class="text-center">
          <button
            class="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-medium text-white bg-friender-primary hover:bg-friender-dark transition-all duration-300 cursor-pointer"
          >
            {{ t('innoWorks_start_creating') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '#imports';
import { Palette, Lightbulb, Video, Sparkles, CheckCircle2, Monitor } from 'lucide-vue-next';

const { t } = useI18n();

const parentFeatures = [
  {
    icon: Sparkles,
    titleKey: 'innoWorks_creative_thinking',
  },
  {
    icon: CheckCircle2,
    titleKey: 'innoWorks_problem_solving_skills',
  },
  {
    icon: Monitor,
    titleKey: 'innoWorks_digital_literacy',
  },
];
</script>
