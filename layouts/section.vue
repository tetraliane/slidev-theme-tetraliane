<template>
  <div class="tetraliane-layout section">
    <slot />
    <slot name="info" />
  </div>
</template>

<style scoped>
.section {
  @apply grid content-center;
}

:deep(h1) {
  @apply text-6xl;
}
</style>
