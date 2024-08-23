<template>
  <div class="tetraliane-layout intro">
    <div>
      <slot />
    </div>
    <div class="info">
      <slot name="info" />
    </div>
  </div>
</template>

<style scoped>
.intro {
  @apply h-full grid;
  grid-template-rows: repeat(2, 1fr);
}

.intro > :first-child {
  @apply self-end;
}

.intro :deep(h1) {
  @apply text-6xl mb-0;
}

.info :deep(p) {
  @apply opacity-50 m-0;
}
</style>
