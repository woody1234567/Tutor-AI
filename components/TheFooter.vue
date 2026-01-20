<script setup lang="ts">
const year = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <span class="logo-dot" aria-hidden="true"></span>
        <span>Tutor AI</span>
      </div>
      <ul class="footer-links">
        <li><NuxtLink to="/#features">功能</NuxtLink></li>
        <li><NuxtLink to="/#pricing">方案</NuxtLink></li>
        <li><NuxtLink to="/#faq">常見問題</NuxtLink></li>
        <li><NuxtLink to="/#contact">聯繫我們</NuxtLink></li>
      </ul>
      <small>© {{ year }} Tutor AI. 保留所有權利。</small>
    </div>
  </footer>
</template>
