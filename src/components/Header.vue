<!-- html -->
<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="gradient-animation"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink
              :to="localePath('/')"
              class="logo-link text-2xl font-bold text-friender-primary"
            >
              Friender
            </NuxtLink>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NuxtLink
              v-for="link in links"
              :key="link.to"
              :to="localePath(link.to)"
              class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
              :class="[
                $route.path === localePath(link.to)
                  ? 'border-friender-primary text-friender-darkest'
                  : 'border-transparent text-gray-600 hover:border-friender-primary hover:text-friender-dark',
              ]"
            >
              {{ t(link.key) }}
            </NuxtLink>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <div class="hidden sm:flex items-center relative">
            <button
              @click.stop="languageDropdownOpen = !languageDropdownOpen"
              class="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              <span class="text-xl">{{ currentLocaleData.flag }}</span>
              <span>{{ currentLocaleData.name }}</span>
              <svg
                class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': languageDropdownOpen }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <!-- Dropdown Menu -->
            <div
              v-show="languageDropdownOpen"
              @click.stop
              class="absolute left-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50"
            >
              <button
                v-for="localeOption in availableLocales"
                :key="localeOption.code"
                @click="selectLocale(localeOption.code)"
                class="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                :class="{
                  'bg-green-50 text-friender-primary': currentLocale === localeOption.code,
                }"
              >
                <span class="text-xl">{{ localeOption.flag }}</span>
                <span>{{ localeOption.name }}</span>
              </button>
            </div>
          </div>
          <div class="-mr-2 flex items-center sm:hidden">
            <!-- Mobile menu button -->
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-friender-primary"
              aria-controls="mobile-menu"
              :aria-expanded="mobileMenuOpen"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 모바일 메뉴 -->
    <ClientOnly>
      <div class="sm:hidden" id="mobile-menu" v-show="mobileMenuOpen">
        <div class="pt-2 pb-3 space-y-1">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="localePath(link.to)"
            class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200"
            :class="[
              $route.path === localePath(link.to)
                ? 'bg-green-50 border-friender-primary text-friender-darkest'
                : 'border-transparent text-gray-600 hover:bg-green-50 hover:border-friender-primary hover:text-friender-dark',
            ]"
            @click="mobileMenuOpen = false"
          >
            {{ t(link.key) }}
          </NuxtLink>
        </div>
        <div class="px-4 pb-4">
          <div class="space-y-2">
            <button
              v-for="localeOption in availableLocales"
              :key="localeOption.code"
              @click="selectLocale(localeOption.code)"
              class="w-full flex items-center space-x-3 px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
              :class="{
                'bg-green-50 text-friender-primary': currentLocale === localeOption.code,
              }"
            >
              <span class="text-xl">{{ localeOption.flag }}</span>
              <span>{{ localeOption.name }}</span>
            </button>
          </div>
        </div>
      </div>
    </ClientOnly>
  </header>
</template>

<!-- script -->
<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n, useLocalePath } from '#imports';

const localePath = useLocalePath();
const mobileMenuOpen = ref(false);
const languageDropdownOpen = ref(false);
const { locale, locales, setLocale, t } = useI18n();

const links = [
  { to: '/', key: 'home' },
  { to: '/dreamPath', key: 'dreamPath' },
  { to: '/innoWorks', key: 'innoWorks' },
  { to: '/story', key: 'story' },
  { to: '/contact', key: 'contact' },
];

const localeFlags: Record<string, string> = {
  en: '🇺🇸',
  ko: '🇰🇷',
};

const localeNameKeys: Record<string, string> = {
  en: 'lang_en',
  ko: 'lang_ko',
};

const availableLocales = computed(() =>
  locales.value.map((entry) => {
    const code = typeof entry === 'string' ? entry : entry.code;
    return {
      code,
      name: t(localeNameKeys[code] || 'lang_en'),
      flag: localeFlags[code] || '🌐',
    };
  })
);

const currentLocale = computed(() => locale.value);

const currentLocaleData = computed(() => {
  const current = availableLocales.value.find((l) => l.code === currentLocale.value);
  return current || { code: 'en', name: 'English', flag: '🌐' };
});

const selectLocale = (code: string) => {
  if (code !== locale.value) {
    setLocale(code as 'en' | 'ko');
  }
  languageDropdownOpen.value = false;
  mobileMenuOpen.value = false;
};

// Close dropdown when clicking outside
const closeDropdown = () => {
  languageDropdownOpen.value = false;
};

onMounted(() => {
  document.addEventListener('click', closeDropdown);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', closeDropdown);
});
</script>

<!-- style -->
<style scoped>
/* 로고 관련 애니메이션 */
.logo-link {
  background: linear-gradient(135deg, #395e00 0%, #28b485 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 그라데이션 애니메이션 - 애플 스타일 */
.gradient-animation {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 8px;
  overflow: hidden;
  z-index: 10;
}

.gradient-animation::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  right: -100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(126, 213, 111, 0.3) 10%,
    rgba(40, 180, 133, 0.5) 20%,
    rgba(85, 197, 122, 0.7) 30%,
    rgba(94, 184, 214, 0.5) 40%,
    rgba(79, 195, 247, 0.3) 50%,
    transparent 60%
  );
  background-size: 50% 100%;
  animation: gradientSlide 4s ease-in-out infinite;
  filter: blur(8px);
}

@keyframes gradientSlide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
