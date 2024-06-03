<template lang="pug">
button.action-button.font-inter.uppercase(
  @click="$emit('click', $event)"
)
  slot
</template>

<style lang="scss">
.action-button {
  background-color: var(--accent-text-color);
  border-radius: 10px;
  height: 64px;
  width: 100%;
  color: #fff;
  font-weight: 700;
  transition: background-color .2s ease-in;

  &:hover,
  &:focus-visible {
    background-color: var(--accent-color-hover);
  }
}
</style>