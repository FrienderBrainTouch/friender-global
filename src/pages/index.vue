<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div class="text-center">
        <!-- 메인 타이틀: AI 기반 창의 교육으로 학습의 힘을 키우세요 -->
        <h1 class="text-4xl lg:text-6xl font-bold text-friender-darkest mb-6">
          {{ t('hero_title') }}
        </h1>
        <!-- 회전 텍스트: 지금 바로 [Dream Path/Inno Works/AI Storybook] 이용해 보세요! -->
        <div
          class="text-2xl lg:text-4xl font-bold mb-8 flex items-center justify-center flex-wrap gap-x-2"
        >
          <span class="text-gray-600">{{ t('hero_rotating_prefix') }}</span> <!-- 지금 바로 -->
          <span class="rotating-text-container inline-block">
            <span
              v-for="(service, index) in services"
              :key="index"
              class="rotating-text"
              :class="{ active: currentServiceIndex === index }"
            >
              {{ t(service) }} <!-- Dream Path / Inno Works / AI Storybook -->
            </span>
          </span>
          <span class="text-gray-600">{{ t('hero_rotating_suffix') }}</span> <!-- 이용해 보세요! -->
        </div>
        <!-- 부제목: 프랜더는 학습을 더욱 흥미롭고... -->
        <p class="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          {{ t('hero_subtitle') }}
        </p>

        <!-- 서비스 쇼케이스: Dream Path, Inno Works, AI Storybook -->
        <div class="my-16">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div
              v-for="(service, index) in serviceShowcase"
              :key="index"
              class="service-showcase-card text-center p-8 rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div class="text-7xl mb-6">{{ service.icon }}</div>
              <h3 class="text-2xl font-semibold text-friender-darkest mb-3">
                {{ t(service.titleKey) }} <!-- Dream Path / Inno Works / AI Storybook -->
              </h3>
              <p class="text-base text-gray-600">
                {{ t(service.descKey) }} <!-- 각 서비스 설명 -->
              </p>
            </div>
          </div>
        </div>

        <!-- CTA 버튼: 프로그램 둘러보기 / 작동 방식 보기 -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/dreamPath"
            class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-friender-primary hover:bg-friender-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-friender-primary transition-colors"
          >
            {{ t('explore_programs') }} <!-- 프로그램 둘러보기 -->
          </NuxtLink>
          <NuxtLink
            to="#how-it-works"
            class="inline-flex items-center justify-center px-8 py-3 border-2 border-friender-primary text-base font-medium rounded-md text-friender-primary hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-friender-primary transition-colors"
          >
            {{ t('see_how_it_works') }} <!-- 작동 방식 보기 -->
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- 가치 기둥 섹션: AI 기반 학습, 창의적 표현, 글로벌 접근성 등 -->
    <div class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div class="text-5xl mb-4">{{ feature.icon }}</div>
            <h3 class="text-lg font-semibold text-friender-darkest mb-2">
              {{ t(feature.titleKey) }} <!-- AI 기반 학습 / 창의적 표현 / 글로벌 접근성 / 교사 역량 강화 / 지속 가능한 교육 -->
            </h3>
            <p class="text-sm text-gray-600">{{ t(feature.descKey) }} <!-- 각 가치 설명 --></p>
          </div>
        </div>
      </div>
    </div>

    <!-- AI 교육 프로그램 섹션 -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-friender-darkest mb-4">
          {{ t('programs_title') }} <!-- AI 교육 프로그램 -->
        </h2>
        <p class="text-lg text-gray-700 max-w-2xl mx-auto">
          {{ t('programs_subtitle') }} <!-- 프로그램 부제목 -->
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(program, index) in programs"
          :key="index"
          class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          <div class="text-4xl mb-4">{{ program.icon }}</div>
          <h3 class="text-xl font-semibold text-friender-darkest mb-3">
            {{ t(program.titleKey) }} <!-- AI 토론 프로그램 / AI 동화책 프로그램 / 개인 맞춤 학습 -->
          </h3>
          <p class="text-gray-600 mb-6">{{ t(program.descKey) }} <!-- 각 프로그램 설명 --></p>
          <NuxtLink
            :to="program.link"
            class="inline-flex items-center text-friender-primary font-medium hover:text-friender-dark transition-colors"
          >
            {{ t('learn_more') }} <!-- 더 알아보기 -->
            <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- 작동 방식 섹션: 4단계 프로세스 -->
    <div id="how-it-works" class="bg-gray-50 py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl lg:text-4xl font-bold text-friender-darkest text-center mb-12">
          {{ t('how_it_works_title') }} <!-- 어떻게 작동하나요? -->
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(step, index) in howItWorks" :key="index" class="text-center">
            <div
              class="w-16 h-16 bg-friender-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"
            >
              {{ index + 1 }}
            </div>
            <h3 class="text-lg font-semibold text-friender-darkest mb-2">
              {{ t(step.titleKey) }} <!-- 1단계 제목 / 2단계 제목 / 3단계 제목 / 4단계 제목 -->
            </h3>
            <p class="text-gray-600">{{ t(step.descKey) }} <!-- 각 단계 설명 --></p>
          </div>
        </div>
      </div>
    </div>

    <!-- 후기 섹션 -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <h2 class="text-3xl lg:text-4xl font-bold text-friender-darkest text-center mb-12">
        {{ t('testimonials_title') }} <!-- 사용자 후기 -->
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="bg-gray-50 rounded-lg p-8"
        >
          <p class="text-gray-700 mb-6 italic text-lg">"{{ t(testimonial.textKey) }}"</p> <!-- 후기 내용 -->
          <p class="text-friender-dark font-semibold">— {{ t(testimonial.authorKey) }}</p> <!-- 작성자 -->
        </div>
      </div>
    </div>

    <!-- Value Cycle Illustration -->
    <div class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-center items-center">
          <div class="relative w-64 h-64">
            <!-- Central Circle -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div
                class="w-32 h-32 bg-friender-primary text-white rounded-full flex items-center justify-center shadow-lg"
              >
                <div class="text-center">
                  <div class="text-2xl mb-1">👥</div>
                  <div class="text-sm font-bold">Prander</div>
                </div>
              </div>
            </div>
            <!-- Value Labels -->
            <div
              v-for="(value, index) in values"
              :key="index"
              class="absolute w-20 h-20 bg-friender-dark text-white rounded-full flex items-center justify-center text-xs font-medium shadow-lg text-center px-2"
              :style="getValuePosition(index)"
            >
              {{ t(value) }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA(행동 유도) 섹션: 학교/교사/파트너 -->
    <div class="bg-friender-primary py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">
          {{ t('cta_title') }} <!-- 교육을 변화시킬 준비가 되셨나요? -->
        </h2>
        <p class="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
          {{ t('cta_subtitle') }} <!-- 프랜더의 AI 교육 플랫폼을 사용하는... -->
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-friender-primary transition-colors"
          >
            {{ t('cta_schools') }} - {{ t('cta_schedule_demo') }} <!-- 학교용 - 데모 예약 -->
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-friender-primary transition-colors"
          >
            {{ t('cta_teachers') }} - {{ t('cta_start_trial') }} <!-- 교사용 - 무료 체험 시작 -->
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-friender-primary transition-colors"
          >
            {{ t('cta_partners') }} <!-- 파트너용 -->
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- 해시태그 섹션: 예비사회적기업, 벤처기업, 기업부설 연구소 -->
    <div class="bg-white py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center gap-3">
          <span
            v-for="(tag, index) in hashtags"
            :key="index"
            class="px-4 py-2 bg-green-50 text-friender-dark rounded-full text-sm font-medium border border-green-100"
          >
            {{ t(tag) }} <!-- #예비사회적기업 / #벤처기업 / #기업부설 연구소 -->
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const { t } = useI18n();

// 서비스 목록
const services = ['dreamPath', 'innoWorks', 'story'];
const currentServiceIndex = ref(0);
let intervalId: NodeJS.Timeout | null = null;

// 서비스 쇼케이스 (애플 스타일)
const serviceShowcase = [
  {
    icon: '💬',
    titleKey: 'dreamPath',
    descKey: 'program_debate_desc',
  },
  {
    icon: '🎯',
    titleKey: 'innoWorks',
    descKey: 'program_learning_desc',
  },
  {
    icon: '📖',
    titleKey: 'story',
    descKey: 'program_storybook_desc',
  },
];

// 3초마다 서비스 변경
onMounted(() => {
  intervalId = setInterval(() => {
    currentServiceIndex.value = (currentServiceIndex.value + 1) % services.length;
  }, 3000);
});

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});

const features = [
  {
    icon: '🤖',
    titleKey: 'ai_learning',
    descKey: 'ai_learning_desc',
  },
  {
    icon: '✨',
    titleKey: 'creative_expression',
    descKey: 'creative_expression_desc',
  },
  {
    icon: '🌍',
    titleKey: 'global_access',
    descKey: 'global_access_desc',
  },
  {
    icon: '👨‍🏫',
    titleKey: 'teacher_empowerment',
    descKey: 'teacher_empowerment_desc',
  },
  {
    icon: '🌱',
    titleKey: 'sustainable_edu',
    descKey: 'sustainable_edu_desc',
  },
];

const programs = [
  {
    icon: '💬',
    titleKey: 'program_debate_title',
    descKey: 'program_debate_desc',
    link: '/dreamPath',
  },
  {
    icon: '📖',
    titleKey: 'program_storybook_title',
    descKey: 'program_storybook_desc',
    link: '/story',
  },
  {
    icon: '🎯',
    titleKey: 'program_learning_title',
    descKey: 'program_learning_desc',
    link: '/innoWorks',
  },
];

const howItWorks = [
  {
    titleKey: 'step1_title',
    descKey: 'step1_desc',
  },
  {
    titleKey: 'step2_title',
    descKey: 'step2_desc',
  },
  {
    titleKey: 'step3_title',
    descKey: 'step3_desc',
  },
  {
    titleKey: 'step4_title',
    descKey: 'step4_desc',
  },
];

const testimonials = [
  {
    textKey: 'testimonial1_text',
    authorKey: 'testimonial1_author',
  },
  {
    textKey: 'testimonial2_text',
    authorKey: 'testimonial2_author',
  },
];

const hashtags = ['hashtag_social', 'hashtag_venture', 'hashtag_research'];

const values = ['ai_technology', 'education', 'global_impact'];

const getValuePosition = (index: number) => {
  const positions = [
    { top: '10%', left: '50%', transform: 'translateX(-50%)' },
    { top: '50%', right: '10%', transform: 'translateY(-50%)' },
    { bottom: '10%', left: '50%', transform: 'translateX(-50%)' },
  ];
  return positions[index] || {};
};
</script>

<style scoped>
.rotating-text-container {
  position: relative;
  display: inline-block;
  min-width: 250px;
  height: 1.2em;
}

.rotating-text {
  position: absolute;
  left: 0;
  right: 0;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease-in-out;
  color: #395e00;
  background: linear-gradient(135deg, #395e00 0%, #28b485 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.rotating-text.active {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .rotating-text-container {
    min-width: 180px;
  }
}

/* Service Showcase - Grid Layout */
.service-showcase-card {
  background: linear-gradient(to bottom, #ffffff, #f9fafb);
  border: 1px solid #e5e7eb;
}

.service-showcase-card:hover {
  background: linear-gradient(to bottom, #f9fafb, #ffffff);
}

@media (max-width: 768px) {
  .service-showcase-card .text-7xl {
    font-size: 4rem;
  }
}
</style>
