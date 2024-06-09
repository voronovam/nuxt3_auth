<template lang="pug">
form.auth-form(
  @submit.prevent="handleAuth"
)
  .auth-form__field.mb-2
    UiIcon.auth-form__icon._left(name="person")
    label(for="username" hidden) Username:
    input.auth-form__input(id="username" v-model="username" type="text" placeholder="Username")

  p.auth-form__error(v-if="errors.username") {{ errors.username }}

  .auth-form__field.mb-2(
    v-if="mode === 'signup'"
  )
    UiIcon.auth-form__icon._left(name="envelope")
    label(for="email" hidden) Email:
    input.auth-form__input(id="email" v-model="email" type="text" placeholder="Email")

  .auth-form__field.mb-2
    UiIcon.auth-form__icon._left(name="shield")
    label(for="password" hidden) Password:
    input.auth-form__input(id="password" v-model="password" type="password" placeholder="Password")

    UiIcon.auth-form__icon._right(name="eye")

  p.auth-form__error(v-if="errors.password") {{ errors.password }}

  template(
    v-if="mode === 'signup'"
  )
    .auth-form__field.mb-2
      UiIcon.auth-form__icon._left(name="shield")
      label(for="passwordConfirm" hidden) Confirm Password:
      input.auth-form__input(id="passwordConfirm" v-model="passwordConfirm" type="password" placeholder="Confirm Password")
      UiIcon.auth-form__icon._right(name="eye")

    .auth-form__field-check.mb-6.flex.gap-2
      input(type="checkbox" id="checkbox" name="checkbox")
      label(for="checkbox") Accept {{' '}}
        nuxt-link(to="") terms and conditions

  ActionButton(
    type="submit"
    :disable="!isFormValid"
    :loading="isLoading"
  )
    template(v-if="mode === 'signup'") sign up
    template(v-else) log in

  p.auth-form__error.mt-2(v-if="loginError") {{ loginError }}

</template>

<script setup lang="ts">
const userStore = useUserStore();

type Props = {
  mode?: string
}
const props = withDefaults(defineProps<Props>(),{
  mode: 'login',
})

const username = ref('')
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')

const errors = ref({})
const isValid = ref(true)
const isLoading = ref(false)
const loginError = ref('')

const validateFields = (fields: Record<string, string>): Record<string, string> => {
  const errors: Record<string, string> = {}

  for (const [field, value] of Object.entries(fields)) {
    const error = validateValue(value)
    if (error) {
      errors[field] = error
    }
  }

  return errors
}

const isFormValid = computed(() => {
  return username.value && password.value
})

const handleAuth = async () => {
  const fields = {
    username: username.value,
    password: password.value,
    //email: email.value,
    //passwordConfirm: passwordConfirm.value
  }
  //errors.value = validateFields(fields)
  isValid.value = validateFields(fields)

  if (!isValid.value) {
    return
  }

  isLoading.value = true

  try {
    const errorMessage = await userStore.signIn({
      username: username.value,
      password: password.value,
    })

    isLoading.value = false

    await navigateTo('/')

    if (errorMessage) {
      loginError.value = errorMessage.error
      return
    }

  } catch (error) {
    console.error(error)
  }
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

  &__error {
    color: tomato;
  }
}
</style>