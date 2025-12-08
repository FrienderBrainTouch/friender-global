<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <div class="max-w-4xl mx-auto">
      <div class="flex justify-between items-center mb-8">
        <button
          @click="goBack"
          class="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          ← 목록으로 돌아가기
        </button>
        <button
          @click="handleLogout"
          class="px-4 py-2 text-sm text-gray-600 hover:text-red-600 font-medium"
        >
          로그아웃
        </button>
      </div>

      <div v-if="loading" class="text-center py-12">
        <p class="text-gray-500">로딩 중...</p>
      </div>

      <div v-else-if="inquiry" class="bg-white shadow rounded-lg overflow-hidden">
        <div class="p-8">
          <!-- 헤더 -->
          <div class="border-b border-gray-200 pb-6 mb-6">
            <h1 class="text-3xl font-bold text-friender-darkest mb-6">{{ inquiry.subject }}</h1>
            <div class="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div class="flex items-center gap-2">
                <User :size="16" class="text-gray-400" />
                <span class="font-medium text-gray-700">보낸 사람:</span>
                <span class="text-gray-900">{{ inquiry.name }}</span>
              </div>
              <span class="text-gray-300">|</span>
              <div class="flex items-center gap-2">
                <Mail :size="16" class="text-gray-400" />
                <span class="font-medium text-gray-700">이메일:</span>
                <a
                  :href="`mailto:${inquiry.email}`"
                  class="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {{ inquiry.email }}
                </a>
              </div>
              <span class="text-gray-300">|</span>
              <div class="flex items-center gap-2">
                <Calendar :size="16" class="text-gray-400" />
                <span class="font-medium text-gray-700">날짜:</span>
                <span class="text-gray-900">{{ formatDate(inquiry.created_at) }}</span>
              </div>
            </div>
          </div>

          <!-- 내용 -->
          <div class="prose max-w-none">
            <h2 class="text-xl font-bold text-friender-darkest mb-4">문의 내용</h2>
            <div class="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {{ inquiry.message }}
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-12">
        <p class="text-gray-500">문의를 찾을 수 없습니다.</p>
        <button
          @click="goBack"
          class="mt-4 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 underline"
        >
          목록으로 돌아가기
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User, Mail, Calendar } from 'lucide-vue-next';

// 미들웨어 설정: 로그인 안 된 사람은 튕겨냄
definePageMeta({
  middleware: 'auth',
  layout: false,
});

const route = useRoute();
const router = useRouter();
const localePath = useLocalePath();

// 타입 정의
interface Inquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

const inquiry = ref<Inquiry | null>(null);
const loading = ref(true);

// 문의 상세 정보 가져오기
const inquiryId = computed(() => {
  const id = route.params.id;
  return Array.isArray(id) ? id[0] : id;
});

// 클라이언트 사이드에서만 데이터 로드
onMounted(async () => {
  console.log('=== Page Mounted ===');
  console.log('Route params:', route.params);
  console.log('Inquiry ID:', inquiryId.value);

  const id = inquiryId.value;

  if (!id || typeof id !== 'string') {
    console.error('Invalid inquiry ID:', id);
    loading.value = false;
    router.push(localePath('/admin/inquiries'));
    return;
  }

  try {
    loading.value = true;
    const client = useSupabaseClient();
    const { data, error } = await client.from('inquiries').select('*').eq('id', id).single();

    if (error) {
      console.error('Error fetching inquiry:', error);
      inquiry.value = null;
      router.push(localePath('/admin/inquiries'));
      return;
    }

    if (!data) {
      console.log('No inquiry found');
      inquiry.value = null;
      router.push(localePath('/admin/inquiries'));
      return;
    }

    console.log('Inquiry loaded:', data);
    inquiry.value = data as Inquiry;
  } catch (err) {
    console.error('Unexpected error:', err);
    inquiry.value = null;
    router.push(localePath('/admin/inquiries'));
  } finally {
    loading.value = false;
  }
});

// 목록으로 돌아가기
const goBack = () => {
  router.push(localePath('/admin/inquiries'));
};

// 로그아웃 기능
const handleLogout = async () => {
  const client = useSupabaseClient();
  await client.auth.signOut();
  router.push(localePath('/admin'));
};

const formatDate = (ts: string) => new Date(ts).toLocaleString('ko-KR');
</script>
