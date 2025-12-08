<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center">
        <h1 class="text-4xl lg:text-5xl font-bold text-friender-darkest mb-6">
          {{ t('dreamPath_hero_title') }}
        </h1>
        <p class="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {{ t('dreamPath_hero_subtitle') }}
        </p>
      </div>
    </div>

    <!-- 나의 꿈은 무엇일까? 섹션 -->
    <div class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-friender-darkest text-center mb-4">
          {{ t('dreamPath_what_is_my_dream_title') }}
        </h2>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {{ t('dreamPath_what_is_my_dream_desc') }}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(dream, index) in dreamCards"
            :key="index"
            class="bg-white p-8 text-center border border-gray-100 transition-all duration-300 hover:border-friender-primary/30 rounded-2xl"
          >
            <div class="w-16 h-16 bg-friender-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <component
                :is="dream.icon"
                :size="32"
                class="text-white"
                stroke-width="2"
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

    <!-- AI 멘토와 함께하는 탐험 섹션 -->
    <div class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-friender-darkest mb-6">
              {{ t('dreamPath_ai_mentor_title') }}
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              {{ t('dreamPath_ai_mentor_desc') }}
            </p>
          </div>
          <div class="flex justify-center lg:justify-end">
            <div class="w-48 h-48 bg-friender-primary rounded-full flex items-center justify-center">
              <Bot :size="96" class="text-white" stroke-width="1.5" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 친구들과 함께 꿈 만들기 섹션 -->
    <div class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="flex justify-center lg:justify-start order-2 lg:order-1">
            <div class="w-48 h-48 bg-friender-primary rounded-full flex items-center justify-center">
              <Users :size="96" class="text-white" stroke-width="1.5" />
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl font-bold text-friender-darkest mb-6">
              {{ t('dreamPath_friends_title') }}
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              {{ t('dreamPath_friends_desc') }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 학부모님과 선생님을 위해 섹션 -->
    <div class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-friender-darkest mb-6">
          {{ t('dreamPath_for_parents_title') }}
        </h2>
        <p class="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          {{ t('dreamPath_for_parents_desc') }}
        </p>
        <button
          class="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-medium text-white bg-friender-primary hover:bg-friender-dark transition-all duration-300 cursor-pointer"
        >
          {{ t('dreamPath_learn_more') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '#imports';
import { Briefcase, PenTool, MessageCircle, Bot, Users } from 'lucide-vue-next';

const { t } = useI18n();

const dreamCards = [
  {
    icon: Briefcase,
    titleKey: 'dreamPath_career_experience',
    descKey: 'dreamPath_career_experience_desc',
  },
  {
    icon: PenTool,
    titleKey: 'dreamPath_draw_dream',
    descKey: 'dreamPath_draw_dream_desc',
  },
  {
    icon: MessageCircle,
    titleKey: 'dreamPath_mentor_conversation',
    descKey: 'dreamPath_mentor_conversation_desc',
  },
];
</script>
