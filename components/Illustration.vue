<template lang="pug">
.illustration
  img.illustration__img(
    :src="`/img/${nameImg}.svg`"
    :alt="`${nameImg} illustration`"
  )
</template>

<script setup lang="ts">
type Props = {
  nameImg?: string
}
const props = withDefaults(defineProps<Props>(),{
  nameImg: 'login',
})
</script>

<style lang="scss">
.illustration {
  width: 606px;
  height: 606px;

  &__img {
    max-width: 100%;
    height: auto;
  }
}
</style>