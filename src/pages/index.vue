<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <div class="w-full h-[calc(100vh-4rem)]">
      <div class="grid grid-cols-1 lg:grid-cols-2 h-full">
        <!-- 왼쪽: 텍스트 섹션 (정확히 50%) -->
        <div class="w-full flex items-center px-4 sm:px-6 lg:px-8 xl:px-12">
          <div class="text-left w-full max-w-2xl">
            <!-- 메인 타이틀: AI 친구와 함께 떠나는 신나는 배움 여행! -->
            <h1 class="text-4xl lg:text-6xl font-bold text-friender-primary mb-8 leading-relaxed">
              {{ t('hero_title') }}
            </h1>
            <!-- 부제목 -->
            <p class="text-lg lg:text-xl text-gray-700 mb-10 leading-relaxed">
              {{ t('hero_subtitle') }}
            </p>

            <!-- CTA 버튼: 무료 체험 시작하기 -->
            <div class="flex flex-col sm:flex-row gap-4">
              <button
                @click="scrollToPrograms"
                class="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-medium text-white bg-friender-primary hover:bg-friender-dark transition-all duration-300 cursor-pointer"
              >
                {{ t('cta_button') }}
              </button>
              <a
                :href="getECatalogUrl()"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center px-10 py-4 border border-friender-primary text-base font-medium text-friender-primary hover:bg-friender-primary hover:text-white transition-all duration-300 cursor-pointer"
              >
                {{ t('ecatalog_button') }}
              </a>
            </div>
          </div>
        </div>

        <!-- 오른쪽: 이미지 섹션 (정확히 50%, 패딩 없음) -->
        <div class="relative w-full h-full">
          <img
            src="/images/main.webp"
            alt="Friender 서비스 화면"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    <!-- 서비스 쇼케이스: Dream Path, Inno Works, AI Storybook -->
    <div id="programs" class="w-full bg-gray-50 pt-16 pb-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl lg:text-4xl font-bold text-friender-darkest text-center mb-12">
          {{ t('what_can_you_do_title') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div
            v-for="(service, index) in serviceShowcase"
            :key="index"
            class="service-showcase-card text-left p-10 transition-all duration-300 flex flex-col"
          >
            <div
              class="mb-6 h-48 bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg"
            >
              <!-- 이미지 영역 -->
              <img
                v-if="service.image"
                :src="service.image"
                :alt="t(service.titleKey)"
                class="w-full h-full object-cover"
              />
              <component
                v-else
                :is="service.icon"
                :size="64"
                class="text-friender-primary"
                stroke-width="1.5"
              />
            </div>
            <h3 class="text-2xl font-bold text-friender-darkest mb-4">
              {{ t(service.titleKey) }}
            </h3>
            <p class="text-base text-gray-600 leading-relaxed mb-6 flex-grow">
              {{ t(service.descKey) }}
            </p>
            <a
              :href="getECatalogUrl(service.catalogKey)"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center px-6 py-3 border border-friender-primary text-base font-medium text-friender-primary hover:bg-friender-primary hover:text-white transition-all duration-300 mt-auto"
            >
              {{ t('ecatalog_button') }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 가치 기둥 섹션: 믿고 맡길 수 있는 우리 아이 첫 AI 친구 -->
    <div class="w-full bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl lg:text-4xl font-bold text-friender-darkest text-center mb-12">
          {{ t('trust_section_title') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="bg-white p-4 py-8 text-center border border-gray-100 rounded-2xl min-w-[140px]"
          >
            <div
              class="w-14 h-14 bg-friender-primary rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <component :is="feature.icon" :size="28" class="text-white" stroke-width="2" />
            </div>
            <h3 class="text-base font-bold text-friender-darkest leading-tight whitespace-nowrap">
              {{ t(feature.titleKey) }}
            </h3>
          </div>
        </div>
      </div>
    </div>

    <!-- 문의하기 CTA 섹션 -->
    <div
      class="w-full bg-gray-50 pt-16 pb-16 relative bg-cover bg-center bg-no-repeat"
      style="background-image: url('/images/main_cta.webp')"
    >
      <div class="absolute inset-0 bg-white/70"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 class="text-3xl lg:text-4xl font-bold text-friender-darkest mb-6">
          {{ t('contact_cta_title') }}
        </h2>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          {{ t('contact_cta_desc') }}
        </p>
        <NuxtLink
          :to="localePath('/contact')"
          class="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-medium text-white bg-friender-primary hover:bg-friender-dark transition-all duration-300 cursor-pointer"
        >
          {{ t('contact_cta_button') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n, useLocalePath } from '#imports';
import {
  MessageCircle,
  Target,
  BookOpen,
  Bot,
  Sparkles,
  Globe,
  GraduationCap,
  Sprout,
} from 'lucide-vue-next';

const { t, locale } = useI18n();
const localePath = useLocalePath();

const getECatalogUrl = (programOrType = '') => {
  const l = locale.value === 'zh-CN' ? 'zh' : locale.value;
  const base = 'https://friender-catalog.netlify.app';

  if (!programOrType) {
    return l === 'ko' ? `${base}/` : `${base}/${l}`;
  }
  return `${base}/${programOrType}/${l}`;
};

// 서비스 쇼케이스 - 이미지와 아이콘 사용
const serviceShowcase = [
  {
    icon: MessageCircle,
    image: '/images/dream_path.webp',
    titleKey: 'dreamPath_title',
    descKey: 'dreamPath_desc',
    to: '/dreamPath',
    catalogKey: 'dreampath',
  },
  {
    icon: Target,
    image: '/images/inno_works.webp',
    titleKey: 'innoWorks_title',
    descKey: 'innoWorks_desc',
    to: '/innoWorks',
    catalogKey: 'innoworks',
  },
  {
    icon: BookOpen,
    image: '/images/story_ai.webp',
    titleKey: 'story_title',
    descKey: 'story_desc',
    to: '/story',
    catalogKey: 'story',
  },
];

// 프로그램 섹션으로 스크롤
const scrollToPrograms = () => {
  const programsSection = document.getElementById('programs');
  if (programsSection) {
    const headerHeight = 64; // 헤더 높이 (h-16 = 4rem = 64px)
    const elementPosition = programsSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

const features = [
  {
    icon: Bot,
    titleKey: 'ai_learning',
  },
  {
    icon: Sparkles,
    titleKey: 'creative_expression',
  },
  {
    icon: Globe,
    titleKey: 'global_access',
  },
  {
    icon: GraduationCap,
    titleKey: 'teacher_empowerment',
  },
  {
    icon: Sprout,
    titleKey: 'sustainable_edu',
  },
];
</script>

<style scoped>
/* Service Showcase - Grid Layout */
.service-showcase-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
}

.service-showcase-card:hover {
  border-color: #395e00;
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(57, 94, 0, 0.1);
}
</style>
