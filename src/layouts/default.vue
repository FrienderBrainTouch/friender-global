<template>
  <div class="min-h-screen bg-white flex flex-col font-sans">
    <Header />

    <main class="flex-grow">
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <slot />
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts"></script>
