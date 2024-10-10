<template>
  <div class="tetraliane-layout two-cols">
    <div>
      <slot />
    </div>
    <div>
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
.two-cols {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
