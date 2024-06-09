<template lang="pug">
button.action-button.font-inter.uppercase(
  @click="$emit('click', $event)"
  :disabled="props.disable"
)
  Loader(v-if="props.loading")

  slot(v-else)

</template>

<script setup lang="ts">
type Props = {
  disable: boolean,
  loading: boolean,
}

const props = defineProps<Props>()
</script>

<style lang="scss">
.action-button {
  background-color: var(--accent-text-color);
  border-radius: 10px;
  height: 64px;
  width: 100%;
  color: #fff;
  font-weight: 700;
  transition: background-color .2s ease-in;

  &:hover:not(:disabled),
  &:focus-visible:not(:disabled) {
    background-color: var(--accent-color-hover);
  }

  &:disabled {
    background-color: var(--accent-color-disabled);
  }
}
</style>