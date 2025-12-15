<template>
  <div class="min-h-screen bg-white flex flex-col font-sans">
    <Header />

    <main class="flex-grow">
      <slot />
    </main>

    <Footer />
    <Chatbot />
  </div>
</template>

<script setup lang="ts"></script>
