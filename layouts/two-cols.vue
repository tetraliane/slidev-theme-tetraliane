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
  display: flex;
}
.two-cols > div {
  flex: 0 0 50%;
}
</style>
