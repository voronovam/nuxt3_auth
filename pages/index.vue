<template lang="pug">
.home-page
  .container.mx-auto
    button.home-page__btn( @click="logout" ) Logout
      span.home-page__icon ✖

    PageHeadline(headline="User Data:")

    pre {{ userStore.user }}

</template>

<script setup lang="ts">
const userStore = useUserStore();

definePageMeta({
  middleware: ['auth'],
})

const logout = () => {
  userStore.logout()
  useRouter().go(0) // for trigger the middleware
}
</script>

<style lang="scss">
.home-page {
  &__btn {
    position: absolute;
    top: 24px;
    right: 32px;
    font-size: 24px;
  }

  &__icon {
    margin-left: 8px;
  }
}
</style>