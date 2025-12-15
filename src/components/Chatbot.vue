<template>
  <div class="fixed bottom-6 right-6 z-50">
    <!-- 챗봇 버튼 -->
    <button
      v-if="!isOpen"
      @click="toggleChat"
      class="w-14 h-14 bg-friender-primary hover:bg-friender-dark text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
      aria-label="챗봇 열기"
    >
      <MessageCircle v-if="!isOpen" :size="24" />
      <X v-else :size="24" />
    </button>

    <!-- 챗봇 창 -->
    <div
      v-if="isOpen"
      class="bg-white rounded-lg shadow-2xl w-96 h-[600px] flex flex-col border border-gray-200"
    >
      <!-- 헤더 -->
      <div
        class="bg-friender-primary text-white p-4 rounded-t-lg flex items-center justify-between"
      >
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Bot :size="20" />
          </div>
          <div>
            <h3 class="font-bold text-sm">{{ getTitle() }}</h3>
            <p class="text-xs text-white/80">{{ getSubtitle() }}</p>
          </div>
        </div>
        <button
          @click="toggleChat"
          class="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
          aria-label="챗봇 닫기"
        >
          <X :size="20" />
        </button>
      </div>

      <!-- 메시지 영역 -->
      <div
        ref="messagesContainer"
        class="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
        :class="{ 'flex items-center justify-center': messages.length === 0 }"
      >
        <!-- 초기 환영 메시지 -->
        <div v-if="messages.length === 0" class="text-center text-gray-500">
          <Bot :size="48" class="mx-auto mb-3 text-friender-primary opacity-50" />
          <p class="text-sm">{{ getWelcomeMessage() }}</p>
        </div>

        <!-- 메시지 리스트 -->
        <div
          v-for="(message, index) in messages"
          :key="index"
          class="flex"
          :class="message.sender === 'user' ? 'justify-end' : 'justify-start'"
        >
          <div
            class="max-w-[80%] rounded-lg px-4 py-2"
            :class="
              message.sender === 'user'
                ? 'bg-friender-primary text-white'
                : 'bg-white text-gray-800 border border-gray-200'
            "
          >
            <p class="text-sm whitespace-pre-wrap">{{ message.text }}</p>
            <p class="text-xs mt-1 opacity-70">
              {{ formatTime(message.timestamp) }}
            </p>
          </div>
        </div>

        <!-- 타이핑 인디케이터 -->
        <div v-if="isTyping" class="flex justify-start">
          <div class="bg-white border border-gray-200 rounded-lg px-4 py-2">
            <div class="flex gap-1">
              <span
                class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style="animation-delay: 0s"
              ></span>
              <span
                class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style="animation-delay: 0.2s"
              ></span>
              <span
                class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style="animation-delay: 0.4s"
              ></span>
            </div>
          </div>
        </div>
      </div>

      <!-- 입력 영역 -->
      <div class="p-4 border-t border-gray-200 bg-white rounded-b-lg">
        <form @submit.prevent="sendMessage" class="flex gap-2">
          <input
            v-model="inputMessage"
            type="text"
            :placeholder="t('chatbot_placeholder')"
            class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-friender-primary focus:border-transparent text-sm"
            :disabled="isTyping"
          />
          <button
            type="submit"
            :disabled="!inputMessage.trim() || isTyping"
            class="px-4 py-2 bg-friender-primary text-white rounded-lg hover:bg-friender-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send :size="20" />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, watch, computed } from 'vue';
import { useI18n } from '#imports';
import { MessageCircle, X, Bot, Send } from 'lucide-vue-next';
import { useChatbot, type ChatbotType } from '~/composables/useChatbot';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const props = defineProps<{
  chatbotType?: ChatbotType;
}>();

const { t, locale } = useI18n();
const { isChatbotOpen, chatbotType: globalChatbotType, closeChatbot } = useChatbot();

const isOpen = computed({
  get: () => {
    const open = isChatbotOpen.value;
    const type = globalChatbotType.value;

    if (!open) return false;

    // prop으로 전달된 타입이 있으면 해당 타입일 때만 열림
    // prop이 없으면 (undefined) 플로팅 버튼 챗봇으로 동작 - 전역 상태가 열려있으면 항상 표시
    if (props.chatbotType !== undefined) {
      return type === props.chatbotType;
    }
    // 플로팅 버튼 챗봇 - 전역 상태가 열려있으면 항상 표시 (타입에 관계없이)
    return true;
  },
  set: (value) => {
    if (!value) {
      closeChatbot();
    }
  },
});

const inputMessage = ref('');
const messages = ref<Message[]>([]);
const isTyping = ref(false);
const messagesContainer = ref<HTMLElement | null>(null);

// 현재 활성화된 챗봇 타입
const currentChatbotType = computed(() => {
  return props.chatbotType || globalChatbotType.value || 'home';
});

// 환경변수에서 docId 가져오기
const getDocId = (): string => {
  const config = useRuntimeConfig();
  const docIdMap: Record<ChatbotType, string> = {
    home: config.public.chatbotDocIdHome || '',
    story: config.public.chatbotDocIdStory || '',
    dreamPath: config.public.chatbotDocIdDreamPath || '',
    innoWorks: config.public.chatbotDocIdInnoWorks || '',
  };
  return docIdMap[currentChatbotType.value];
};

// 언어 추출 (URL에서)
const getLanguage = (): string => {
  // locale.value는 'ko', 'en', 'ja', 'zh-CN', 'es' 형식
  return locale.value || 'ko';
};

const toggleChat = () => {
  if (isOpen.value) {
    closeChatbot();
  } else {
    const targetType = props.chatbotType || 'home';
    const { openChatbot } = useChatbot();
    openChatbot(targetType);
  }
};

const sendMessage = async () => {
  if (!inputMessage.value.trim() || isTyping.value) return;

  const userMessage: Message = {
    text: inputMessage.value.trim(),
    sender: 'user',
    timestamp: new Date(),
  };

  messages.value.push(userMessage);
  const messageText = inputMessage.value.trim();
  inputMessage.value = '';

  await nextTick();
  scrollToBottom();

  // API 호출
  isTyping.value = true;
  await nextTick();
  scrollToBottom();

  try {
    const config = useRuntimeConfig();
    const apiUrl = config.public.chatbotApiUrl;

    const response = await $fetch<{ message: string }>(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        docId: getDocId(),
        message: messageText,
        language: getLanguage(),
      },
    });

    const botResponse: Message = {
      text: response.message || t(`chatbot_${currentChatbotType.value}_response_default`),
      sender: 'bot',
      timestamp: new Date(),
    };
    messages.value.push(botResponse);
  } catch (error) {
    console.error('Chatbot API error:', error);
    const errorResponse: Message = {
      text:
        t(`chatbot_${currentChatbotType.value}_response_error`) ||
        '죄송합니다. 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
      sender: 'bot',
      timestamp: new Date(),
    };
    messages.value.push(errorResponse);
  } finally {
    isTyping.value = false;
    nextTick(() => {
      scrollToBottom();
    });
  }
};

// 타입별 제목 가져오기
const getTitle = (): string => {
  return t(`chatbot_${currentChatbotType.value}_title`) || t('chatbot_title');
};

// 타입별 부제목 가져오기
const getSubtitle = (): string => {
  return t(`chatbot_${currentChatbotType.value}_subtitle`) || t('chatbot_subtitle');
};

// 타입별 환영 메시지 가져오기
const getWelcomeMessage = (): string => {
  return t(`chatbot_${currentChatbotType.value}_welcome`) || t('chatbot_welcome');
};

// 전역 상태 변경 감지 - 챗봇이 열릴 때 스크롤
watch(
  () => isOpen.value,
  (open) => {
    if (open) {
      nextTick(() => {
        scrollToBottom();
      });
    }
  }
);

// 챗봇 타입이 변경될 때 메시지 초기화 (선택사항 - 필요시 주석 해제)
// watch(
//   () => currentChatbotType.value,
//   () => {
//     if (isOpen.value) {
//       messages.value = [];
//     }
//   }
// );

const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

const formatTime = (date: Date): string => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

// 메시지가 추가될 때마다 스크롤
watch(
  () => messages.value.length,
  () => {
    nextTick(() => {
      scrollToBottom();
    });
  }
);
</script>

<style scoped>
/* 스크롤바 스타일링 */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
