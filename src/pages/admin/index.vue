<template>
  <div class="flex items-center justify-center min-h-screen bg-white">
    <div class="w-full max-w-sm p-8 bg-white border border-gray-200">
      <h1 class="mb-6 text-2xl font-bold text-center text-friender-darkest">🔒 관리자 접근</h1>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <input
          v-model="password"
          type="password"
          placeholder="Access Code"
          class="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-friender-primary focus:border-friender-primary transition-colors"
          autofocus
        />

        <p v-if="errorMsg" class="text-xs text-red-500 text-center">{{ errorMsg }}</p>
        <button
          type="submit"
          :disabled="isLoading"
          class="w-full py-3 font-bold text-white bg-friender-primary rounded hover:bg-friender-dark transition-all duration-300 disabled:opacity-50"
        >
          {{ isLoading ? '인증 중...' : '접속' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useLocalePath } from '#imports';

definePageMeta({
  layout: false, // 불필요한 레이아웃 제거 (선택사항)
});

const router = useRouter();
const localePath = useLocalePath();
const password = ref('');
const errorMsg = ref('');
const isLoading = ref(false);

// [중요] Supabase에 만들어둔 관리자 계정 이메일 고정
const HIDDEN_EMAIL = 'admin@friender.com';

const handleLogin = async () => {
  isLoading.value = true;
  errorMsg.value = '';

  try {
    // TODO: Supabase 모듈 설치 필요
    // npm install @nuxtjs/supabase
    // 또는
    // npm install @supabase/supabase-js
    const supabase = useSupabaseClient();

    const { error } = await supabase.auth.signInWithPassword({
      email: HIDDEN_EMAIL,
      password: password.value,
    });

    if (error) throw error;

    // 로그인 성공 시 목록 페이지로 이동
    router.push(localePath('/admin/inquiries'));
  } catch (e) {
    errorMsg.value = '비밀번호가 틀렸거나 권한이 없습니다.';
  } finally {
    isLoading.value = false;
  }
};
</script>
