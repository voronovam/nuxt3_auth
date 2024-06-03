<template lang="pug">
form.auth-form(
  @submit.prevent="handleAuth"
)
  .auth-form__field.mb-2
    UiIcon.auth-form__icon._left(name="person")
    label(for="username" hidden) Username:
    input.auth-form__input(id="username" v-model="username" type="text" placeholder="Username" required)

  .auth-form__field.mb-2(
    v-if="mode === 'signup'"
  )
    UiIcon.auth-form__icon._left(name="envelope")
    label(for="email" hidden) Email:
    input.auth-form__input(id="email" v-model="email" type="text" placeholder="Email" required)

  .auth-form__field.mb-2
    UiIcon.auth-form__icon._left(name="shield")
    label(for="password" hidden) Password:
    input.auth-form__input(id="password" v-model="password" type="password" placeholder="Password" required)
    UiIcon.auth-form__icon._right(name="eye")

  template(
    v-if="mode === 'signup'"
  )
    .auth-form__field.mb-2
      UiIcon.auth-form__icon._left(name="shield")
      label(for="passwordConfirm" hidden) Confirm Password:
      input.auth-form__input(id="passwordConfirm" v-model="password" type="password" placeholder="Confirm Password" required)
      UiIcon.auth-form__icon._right(name="eye")

    .auth-form__field-check.mb-6.flex.gap-2
      input(type="checkbox" id="checkbox" name="checkbox")
      label(for="checkbox") Accept {{' '}}
        nuxt-link(to="") terms and conditions

  ActionButton
    template(v-if="mode === 'signup'") sign up
    template(v-else) log in

</template>

<script setup lang="ts">
const userStore = useUserStore();

type Props = {
  mode?: string
}
const props = withDefaults(defineProps<Props>(),{
  mode: 'login',
})

const username = ref('');
const email = ref('');
const password = ref('');

const handleAuth = async () => {
  await userStore.signIn({
    username: username.value,
    password: password.value,
  })

  await navigateTo('/', { external: true })
}
</script>

<style lang="scss">
.auth-form {
  &__field {
    position: relative;
  }

  &__input {
    border-radius: 10px;
    border: 2px solid #becbfc;
    background-color: #eaefff;
    height: 64px;
    padding: 0 60px 0 50px;
    width: 100%;
    font-size: 18px;
  }

  &__icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &._left {
      left: 10px;
    }

    &._right {
      right: 20px;
    }
  }

  &__field-check {
    color: var(--gray-text-color);
  }
}
</style>