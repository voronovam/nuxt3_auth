<template lang="pug">
h1.page-headline.font-bold
  | {{ props.headline }}

</template>

<script setup lang="ts">
type Props = {
  headline?: string
}
const props = withDefaults(defineProps<Props>(),{
  headline: 'Login to your Account',
})
</script>

<style lang="scss">
.page-headline {
  font-size: 40px;
}
</style>