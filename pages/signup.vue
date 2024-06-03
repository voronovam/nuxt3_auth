<template lang="pug">
.signup-page
  .container.mx-auto
    .signup-page__content
      .signup-page__left.pr-32
        .signup-page__left-content
          PageHeadline(headline="Create your account")

          .signup-page__subtitle Unlock all Features!

          .signup-page__form.mt-6
            AuthForm(mode="signup")



            p.mt-6.text-center You have account? {{' '}}
              nuxt-link.font-bold(to="/login") Login now

      .signup-page__right.grid.gap-y-12.pl-14
        Illustration(name-img="signup")

        .signup-page__description.text-center
          h3.font-bold.text-xl Join us!
          p.font-medium Just go through the boring process of creating an account.

</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth-layout',
})
</script>

<style lang="scss">
.signup-page {
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
    font-size: 20px;
    color: var(--gray-text-color);
  }

  &__description {
    color: var(--light-color);
  }
}
</style>