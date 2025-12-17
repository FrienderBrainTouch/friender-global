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
            {{ t('story_hero_title') }}
          </h1>
          <p class="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed whitespace-pre-line">
            {{ t('story_hero_subtitle') }}
          </p>
          <div class="flex gap-4 flex-wrap">
            <a
              :href="storyAiUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-medium text-white bg-friender-primary hover:bg-friender-dark transition-all duration-300 cursor-pointer"
            >
              {{ t('story_hero_button') }}
            </a>
            <a
              :href="ecatalogUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center px-10 py-4 border border-friender-primary text-base font-medium text-friender-primary bg-white hover:bg-friender-primary hover:text-white transition-all duration-300 cursor-pointer"
            >
              {{ t('ecatalog_button') }}
            </a>
          </div>
        </div>

        <!-- 오른쪽: 이미지 -->
        <div class="flex justify-center lg:justify-end">
          <div class="w-full h-96 bg-gray-100 rounded-2xl overflow-hidden">
            <img
              src="/images/story_ai.webp"
              alt="AI Storybook"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 3개 피처 섹션 -->
    <div class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(feature, index) in storyFeatures"
            :key="index"
            class="bg-white p-8 text-center border border-gray-100 transition-all duration-300 hover:border-friender-primary/30 rounded-2xl"
          >
            <div class="w-full h-48 bg-gray-100 rounded-2xl overflow-hidden mb-6">
              <img
                v-if="feature.image"
                :src="feature.image"
                :alt="t(feature.titleKey)"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-xl font-bold text-friender-darkest mb-4">
              {{ t(feature.titleKey) }}
            </h3>
            <p class="text-base text-gray-600 leading-relaxed">
              {{ t(feature.descKey) }}
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
          <div class="flex justify-center order-2 lg:order-1">
            <div class="w-full rounded-2xl overflow-hidden">
              <img
                src="/images/story_ai_4.webp"
                alt="AI Storybook for Parents and Teachers"
                class="w-full h-auto object-cover"
              />
            </div>
          </div>

          <!-- 오른쪽: 텍스트 -->
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl font-bold text-friender-darkest mb-8">
              {{ t('story_for_parents_title') }}
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
                    {{ t('story_for_parents_feature1_title') }}
                  </h3>
                  <p class="text-base text-gray-600 leading-relaxed">
                    {{ t('story_for_parents_feature1_desc') }}
                  </p>
                </div>
              </div>

              <!-- 피처 2 -->
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 bg-friender-primary rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <BookOpen :size="24" class="text-white" stroke-width="2" />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-friender-darkest mb-2">
                    {{ t('story_for_parents_feature2_title') }}
                  </h3>
                  <p class="text-base text-gray-600 leading-relaxed">
                    {{ t('story_for_parents_feature2_desc') }}
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
          {{ t('story_cta_title') }}
        </h2>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          {{ t('story_cta_desc') }}
        </p>
        <a
          :href="storyAiUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-medium text-white bg-friender-primary hover:bg-friender-dark transition-all duration-300 cursor-pointer"
        >
          {{ t('story_cta_button') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n, useLocalePath } from '#imports';
import { BookOpen, Lightbulb, Sparkles } from 'lucide-vue-next';
import { computed } from 'vue';

const { t, locale } = useI18n();
const localePath = useLocalePath();

// 현재 locale에 따라 Story AI URL 생성
const storyAiUrl = computed(() => {
  const localeMap: Record<string, string> = {
    ko: 'ko',
    en: 'en',
    ja: 'ja',
    'zh-CN': 'zh-hans',
    es: 'es',
  };
  const mappedLocale = localeMap[locale.value] || 'ko';
  return `https://multi.storyai.kr/${mappedLocale}/`;
});

const ecatalogUrl = computed(() => {
  const l = locale.value === 'zh-CN' ? 'zh' : locale.value;
  return `https://friender-catalog.netlify.app/story/${l}`;
});

const storyFeatures = [
  {
    icon: Lightbulb,
    image: '/images/story_ai_1.webp',
    titleKey: 'story_feature1_title',
    descKey: 'story_feature1_desc',
  },
  {
    icon: BookOpen,
    image: '/images/story_ai_2.webp',
    titleKey: 'story_feature2_title',
    descKey: 'story_feature2_desc',
  },
  {
    icon: Sparkles,
    image: '/images/story_ai_3.webp',
    titleKey: 'story_feature3_title',
    descKey: 'story_feature3_desc',
  },
];
</script>
