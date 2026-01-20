<script setup lang="ts">
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <NuxtLink class="brand" to="/" aria-label="首頁" @click="closeMenu">
        <span class="logo-dot" aria-hidden="true"></span>
        <i class="fa-solid fa-chalkboard-user brand-icon" aria-hidden="true"></i>
        <span class="brand-text">Tutor AI</span>
      </NuxtLink>
      <nav class="nav" aria-label="主導覽">
        <button
          class="nav-toggle"
          :aria-expanded="isMenuOpen"
          aria-controls="nav-menu"
          @click="toggleMenu"
        >
          選單
        </button>
        <ul id="nav-menu" class="nav-menu" :class="{ 'show': isMenuOpen }">
          <li><NuxtLink to="/#features" @click="closeMenu">功能</NuxtLink></li>
          <li><NuxtLink to="/#how" @click="closeMenu">流程</NuxtLink></li>
          <li><NuxtLink to="/#pricing" @click="closeMenu">方案</NuxtLink></li>
          <li><NuxtLink to="/#faq" @click="closeMenu">常見問題</NuxtLink></li>
          <li><NuxtLink to="/integration-and-enrollment" @click="closeMenu">導入與招生</NuxtLink></li>
          <li>
            <NuxtLink class="btn btn-primary btn-sm" to="/#contact" @click="closeMenu">預約演示</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
