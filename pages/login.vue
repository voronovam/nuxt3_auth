<template lang="pug">
.login-page
  .container.mx-auto
    .login-page__content
      .login-page__left.pr-32
        .login-page__left-content
          PageHeadline.mb-5

          .login-page__form
            .login-page__subtitle
              .login-page__subtitle-text with email

            AuthForm

            p.mt-6.text-center Don’t have account? {{' '}}
              nuxt-link.font-bold(to="/signup") Create an account

      .login-page__right.grid.gap-y-12.pl-14
        Illustration

        .login-page__description.text-center
          h3.font-bold.text-xl Connect with any device.
          p.font-medium Everything you need is an internet connection.

</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['signed-in'],
  layout: 'auth-layout',
})
</script>

<style lang="scss">
.login-page {
  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    height: 100vh;
  }

  &__left {
    display: flex;
    flex-direction: row-reverse;
  }

  &__form {
    padding: 0 12px;
    width: 477px;
  }

  &__subtitle {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 25px;

    &:before{
      content: '';
      position: absolute;
      height: 1px;
      background-color: var(--gray-text-color);
      width: 100%;
    }
  }

  &__subtitle-text {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    width: 213px;
    height: 25px;
    background-color: var(--light-color);
    z-index: 1;
  }

  &__description {
    color: var(--light-color);
  }
}
</style>