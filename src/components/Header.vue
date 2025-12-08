<!-- html -->
<template>
  <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 relative">
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink :to="localePath('/')" class="flex items-center gap-3">
            <img src="/logo/friender-logo.svg" alt="Friender" class="h-12 w-auto" />
            <div class="flex flex-col">
              <span class="text-xs font-medium text-friender-primary leading-tight">
                {{ t('logo_tagline') }}
              </span>
              <span class="text-xl font-bold text-friender-primary leading-tight">
                {{ t('logo_brand') }}
              </span>
            </div>
          </NuxtLink>
        </div>
        <div class="hidden sm:flex sm:space-x-8 absolute left-1/2 transform -translate-x-1/2">
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
        <div class="flex items-center space-x-4">
          <div class="hidden sm:flex items-center relative">
            <button
              @click.stop="languageDropdownOpen = !languageDropdownOpen"
              class="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              <span class="text-xl">{{ currentLocaleData.flag }}</span>
              <span>{{ currentLocaleData.name }}</span>
              <ChevronDown
                class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': languageDropdownOpen }"
              />
            </button>

            <!-- Dropdown Menu -->
            <div
              v-show="languageDropdownOpen"
              @click.stop
              class="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 py-1 z-50"
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
              class="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors"
              aria-controls="mobile-menu"
              :aria-expanded="mobileMenuOpen"
            >
              <span class="sr-only">Open main menu</span>
              <Menu class="block h-6 w-6" aria-hidden="true" />
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
      </div>
    </ClientOnly>
  </header>
</template>

<!-- script -->
<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n, useLocalePath } from '#imports';
import { ChevronDown, Menu } from 'lucide-vue-next';

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

// 동적으로 로케일 정보 가져오기 (확장 가능)
const availableLocales = computed(() =>
  locales.value.map((entry) => {
    const locale = typeof entry === 'string' ? { code: entry } : entry;
    const code = locale.code;
    // 로케일 설정에서 flag와 name 가져오기
    const flag = (locale as any).flag || '🌐';
    const name = (locale as any).name || code;
    return {
      code,
      name,
      flag,
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
<style scoped></style>
