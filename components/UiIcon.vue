<template lang="pug">
component.ui-icon(
  :is="icon"
  :style="`--uiIconSize: ${size}`"
)

</template>

<script setup lang="ts">
type Props = {
  size?: number
  name: string
}
const props = withDefaults(defineProps<Props>(),{
  size: 30,
})

const icons: Record<string, Component> = {
  envelope: defineAsyncComponent(() => import('./assets/icons/envelope.svg?component')),
  eye: defineAsyncComponent(() => import('./assets/icons/eye.svg?component')),
  person: defineAsyncComponent(() => import('./assets/icons/person.svg?component')),
  shield: defineAsyncComponent(() => import('./assets/icons/shield.svg?component')),
}

const icon = computed(() => icons[props.name]);

</script>

<style lang="scss">
.ui-icon {
  width: calc(var(--uiIconSize) * 1px);
  height: calc(var(--uiIconSize) * 1px);
}
</style>
