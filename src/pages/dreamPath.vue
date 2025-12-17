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
            {{ t('dreamPath_hero_title') }}
          </h1>
          <p class="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed whitespace-pre-line">
            {{ t('dreamPath_hero_subtitle') }}
          </p>
          <div class="flex gap-4 flex-wrap">
            <a
              :href="dreamPathUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-medium text-white bg-friender-primary hover:bg-friender-dark transition-all duration-300 cursor-pointer"
            >
              {{ t('dreamPath_hero_button') }}
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
              src="/images/dream_path.webp"
              alt="Dream Path"
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
            v-for="(dream, index) in dreamCards"
            :key="index"
            class="bg-white p-8 text-center border border-gray-100 transition-all duration-300 hover:border-friender-primary/30 rounded-2xl"
          >
            <div class="w-full h-48 bg-gray-100 rounded-2xl overflow-hidden mb-6">
              <img
                v-if="dream.image"
                :src="dream.image"
                :alt="t(dream.titleKey)"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-xl font-bold text-friender-darkest mb-4">
              {{ t(dream.titleKey) }}
            </h3>
            <p class="text-base text-gray-600 leading-relaxed">
              {{ t(dream.descKey) }}
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
                src="/images/dreampath_4.webp"
                alt="Dream Path for Parents and Teachers"
                class="w-full h-auto object-cover"
              />
            </div>
          </div>

          <!-- 오른쪽: 텍스트 -->
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl font-bold text-friender-darkest mb-8">
              {{ t('dreamPath_for_parents_title') }}
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
                    {{
                      t('dreamPath_for_parents_feature1_title') || t('dreamPath_ai_mentor_title')
                    }}
                  </h3>
                  <p class="text-base text-gray-600 leading-relaxed">
                    {{ t('dreamPath_for_parents_feature1_desc') || t('dreamPath_ai_mentor_desc') }}
                  </p>
                </div>
              </div>

              <!-- 피처 2 -->
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 bg-friender-primary rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <Users :size="24" class="text-white" stroke-width="2" />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-friender-darkest mb-2">
                    {{ t('dreamPath_for_parents_feature2_title') || t('dreamPath_friends_title') }}
                  </h3>
                  <p class="text-base text-gray-600 leading-relaxed">
                    {{ t('dreamPath_for_parents_feature2_desc') || t('dreamPath_friends_desc') }}
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
          {{ t('dreamPath_cta_title') || t('story_cta_title') }}
        </h2>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          {{ t('dreamPath_cta_desc') || t('story_cta_desc') }}
        </p>
        <a
          :href="dreamPathUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-medium text-white bg-friender-primary hover:bg-friender-dark transition-all duration-300 cursor-pointer"
        >
          {{ t('dreamPath_cta_button') || t('story_cta_button') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n, useLocalePath } from '#imports';
import { Briefcase, PenTool, MessageCircle, Bot, Users, Sparkles } from 'lucide-vue-next';
import { computed } from 'vue';

const { t, locale } = useI18n();
const localePath = useLocalePath();

// 현재 locale에 따라 DreamPath URL 생성
const dreamPathUrl = computed(() => {
  const localeMap: Record<string, string> = {
    ko: 'ko',
    en: 'en',
    ja: 'ja',
    'zh-CN': 'zh-hans',
    es: 'es',
  };
  const mappedLocale = localeMap[locale.value] || 'ko';
  return `https://multi.dreampathai.kr/${mappedLocale}/`;
});

const ecatalogUrl = computed(() => {
  const l = locale.value === 'zh-CN' ? 'zh' : locale.value;
  return `https://friender-catalog.netlify.app/dreampath/${l}`;
});

const dreamCards = [
  {
    icon: Briefcase,
    image: '/images/dreampath_1.webp',
    titleKey: 'dreamPath_career_experience',
    descKey: 'dreamPath_career_experience_desc',
  },
  {
    icon: PenTool,
    image: '/images/dreampath_2.webp',
    titleKey: 'dreamPath_draw_dream',
    descKey: 'dreamPath_draw_dream_desc',
  },
  {
    icon: MessageCircle,
    image: '/images/dreampath_3.webp',
    titleKey: 'dreamPath_mentor_conversation',
    descKey: 'dreamPath_mentor_conversation_desc',
  },
];
</script>
