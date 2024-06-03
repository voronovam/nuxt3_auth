<template lang="pug">
.otp-page
  .container.mx-auto
    .otp-page__content
      .otp-page__left.pr-32
        .otp-page__left-content
          PageHeadline.mb-5(headline="Enter OTP")

          .otp-page__subtitle Sent OTP on {{' '}}
            a(href="mailto:johndoe@gmail.com") johndoe@gmail.com

          nuxt-link.font-bold(to="") Change email

          .otp-page__form
            ConfirmForm

      .otp-page__right.grid.gap-y-12.pl-14
        Illustration(name-img="otp")

        .otp-page__description.text-center
          h3.font-bold.text-xl It's just OTP verification
          p.font-medium You are one step away from recovering your password.
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth-layout',
})
</script>

<style lang="scss">
.otp-page {
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
    width: 484px;
  }

  &__subtitle {
    font-size: 20px;
    color: var(--gray-text-color);
  }

  &__description {
    color: var(--light-color);
  }
}
</style>