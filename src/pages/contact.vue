<template>
  <div class="bg-white min-h-screen py-16">
    <!-- 제목 -->
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
      <div class="text-center">
        <h1 class="text-4xl lg:text-5xl font-bold text-friender-darkest mb-6">
          {{ t('contact_us') }}
        </h1>
        <p class="text-lg text-gray-600 leading-relaxed">
          {{ t('contact_friendly_message') }}
        </p>
      </div>
    </div>

    <!-- 폼 -->
    <div class="w-full py-12">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <form @submit.prevent="submitForm" class="space-y-6">
          <!-- 이름과 이메일 (2열 레이아웃) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                {{ t('name') }}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                v-model="form.name"
                :placeholder="t('name_placeholder')"
                class="block w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-friender-primary focus:border-friender-primary transition-colors"
                required
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                {{ t('email_address') }}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                v-model="form.email"
                placeholder="you@example.com"
                class="block w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-friender-primary focus:border-friender-primary transition-colors"
                required
              />
            </div>
          </div>

          <!-- 제목 -->
          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
              {{ t('subject') }}
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              v-model="form.subject"
              :placeholder="t('subject_placeholder')"
              class="block w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-friender-primary focus:border-friender-primary transition-colors"
              required
            />
          </div>

          <!-- 메시지 -->
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
              {{ t('message') }}
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              v-model="form.message"
              :placeholder="t('message_placeholder')"
              class="block w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-friender-primary focus:border-friender-primary transition-colors resize-y"
              required
            ></textarea>
          </div>

          <!-- 제출 버튼 -->
          <div class="flex justify-center pt-4">
            <button
              type="submit"
              :disabled="isLoading"
              class="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-medium text-white bg-friender-primary hover:bg-friender-dark transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isLoading ? '전송 중...' : t('submit_inquiry') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from '#imports';

const { t } = useI18n();

// 2. 폼 데이터 상태 관리
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

// 3. 로딩 상태 (중복 제출 방지용)
const isLoading = ref(false);

// 4. 제출 핸들러 함수
const submitForm = async () => {
  // 간단한 유효성 검사 (HTML required 속성으로도 1차 커버 가능)
  if (!form.value.name || !form.value.email || !form.value.message) {
    alert('이름, 이메일, 내용은 필수 입력 항목입니다.');
    return;
  }

  try {
    isLoading.value = true; // 로딩 시작

    // Supabase 클라이언트 가져오기 (클라이언트 사이드에서만)
    const client = useSupabaseClient();

    // Supabase에 데이터 INSERT
    const { error } = await client.from('inquiries').insert({
      name: form.value.name,
      email: form.value.email,
      subject: form.value.subject,
      message: form.value.message,
    } as any);

    if (error) throw error;

    // 성공 처리
    alert('문의가 성공적으로 접수되었습니다. 담당자가 확인 후 연락드리겠습니다.');

    // 폼 초기화
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  } catch (error) {
    console.error('문의 전송 실패:', error);
    alert('오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
  } finally {
    isLoading.value = false; // 로딩 끝
  }
};
</script>
