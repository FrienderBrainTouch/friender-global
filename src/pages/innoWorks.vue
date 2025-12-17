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
          <div class="flex gap-4 flex-wrap">
            <a
              :href="innoWorksUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-medium text-white bg-friender-primary hover:bg-friender-dark transition-all duration-300 cursor-pointer"
            >
              {{ t('innoWorks_hero_button') }}
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
              src="/images/inno_works.webp"
              alt="Inno Works"
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
            v-for="(feature, index) in innoWorksFeatures"
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
                src="/images/innoworks_4.webp"
                alt="Inno Works for Parents and Teachers"
                class="w-full h-auto object-cover"
              />
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
    <div
      class="w-full bg-gray-50 pt-16 pb-16 relative bg-cover bg-center bg-no-repeat"
      style="background-image: url('/images/cta.webp')"
    >
      <div class="absolute inset-0 bg-white/70"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 class="text-3xl lg:text-4xl font-bold text-friender-darkest mb-6">
          {{ t('innoWorks_cta_title') || t('story_cta_title') }}
        </h2>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          {{ t('innoWorks_cta_desc') || t('story_cta_desc') }}
        </p>
        <a
          :href="innoWorksUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-medium text-white bg-friender-primary hover:bg-friender-dark transition-all duration-300 cursor-pointer"
        >
          {{ t('innoWorks_cta_button') || t('story_cta_button') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n, useLocalePath } from '#imports';
import { Palette, Lightbulb, Video, Sparkles, CheckCircle2 } from 'lucide-vue-next';
import { computed } from 'vue';

const { t, locale } = useI18n();
const localePath = useLocalePath();

// 현재 locale에 따라 InnoWorks URL 생성
const innoWorksUrl = computed(() => {
  const localeMap: Record<string, string> = {
    ko: 'ko',
    en: 'en',
    ja: 'ja',
    'zh-CN': 'zh-hans',
    es: 'es',
  };
  const mappedLocale = localeMap[locale.value] || 'ko';
  return `https://multi.innoworks.kr/${mappedLocale}/`;
});

const ecatalogUrl = computed(() => {
  const l = locale.value === 'zh-CN' ? 'zh' : locale.value;
  return `https://friender-catalog.netlify.app/innoworks/${l}`;
});

const innoWorksFeatures = [
  {
    icon: Palette,
    image: '/images/innoworks_1.webp',
    titleKey: 'innoWorks_ai_tools_title',
    descKey: 'innoWorks_ai_tools_desc',
  },
  {
    icon: Lightbulb,
    image: '/images/innoworks_2.webp',
    titleKey: 'innoWorks_inventor_title',
    descKey: 'innoWorks_inventor_desc',
  },
  {
    icon: Video,
    image: '/images/innoworks_3.webp',
    titleKey: 'innoWorks_presentation_title',
    descKey: 'innoWorks_presentation_desc',
  },
];
</script>
