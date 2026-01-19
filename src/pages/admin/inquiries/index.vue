<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <div class="max-w-6xl mx-auto">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-2xl font-bold text-gray-800">📨 문의 내역</h1>
        <button
          @click="handleLogout"
          class="px-4 py-2 text-sm text-gray-600 hover:text-red-600 font-medium"
        >
          로그아웃
        </button>
      </div>
      <div class="bg-white shadow rounded-lg overflow-hidden">
        <table class="w-full text-sm text-left">
          <thead class="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th class="px-6 py-3 text-left">번호</th>
              <th class="px-6 py-3 text-left">날짜</th>
              <th class="px-6 py-3 text-left">보낸 사람</th>
              <th class="px-6 py-3 text-left">이메일</th>
              <th class="px-6 py-3 text-left">제목</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr
              v-for="(item, index) in list"
              :key="item.id"
              class="hover:bg-gray-50 cursor-pointer transition-colors"
              @click="goToDetail(item.id)"
            >
              <td class="px-6 py-4 text-gray-500 whitespace-nowrap">
                {{ index + 1 }}
              </td>
              <td class="px-6 py-4 text-gray-500 whitespace-nowrap">
                {{ formatDate(item.created_at) }}
              </td>
              <td class="px-6 py-4 font-medium text-gray-900">
                {{ item.name }}
              </td>
              <td class="px-6 py-4 text-blue-600">
                <a :href="`mailto:${item.email}`" @click.stop>{{ item.email }}</a>
              </td>
              <td class="px-6 py-4 text-gray-700">
                <p class="font-bold">{{ item.subject }}</p>
              </td>
            </tr>
            <tr v-if="!list || list.length === 0">
              <td colspan="5" class="px-6 py-10 text-center text-gray-400">
                아직 접수된 문의가 없습니다.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 미들웨어 설정: 로그인 안 된 사람은 튕겨냄
definePageMeta({
  middleware: 'auth',
  layout: false,
});

const router = useRouter();
const localePath = useLocalePath();

// 상세 페이지로 이동
const goToDetail = (id: string) => {
  router.push(localePath(`/admin/inquiries/${id}`));
};

// 타입 정의
interface Inquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

// 데이터 가져오기
const { data: list, refresh } = await useAsyncData<Inquiry[]>(
  'admin-inquiries',
  async () => {
    // 클라이언트 사이드에서만 실행
    if (process.server) {
      return [];
    }

    const client = useSupabaseClient();
    const { data, error } = await client
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching inquiries:', error);
      return [];
    }

    return data || [];
  },
  {
    server: false, // 서버 사이드 렌더링 비활성화
  }
);

// 로그아웃 기능
const handleLogout = async () => {
  const client = useSupabaseClient();
  await client.auth.signOut();
  router.push(localePath('/admin'));
};

const formatDate = (ts: string) => new Date(ts).toLocaleString('en-US');
</script>
