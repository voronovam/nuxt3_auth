<template lang="pug">
.loader
</template>

<style lang="scss">
.loader {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: block;
  margin: 12px auto;
  position: relative;
  box-sizing: border-box;
  animation: zeroRotation 1s linear infinite alternate;

  &::after,
  &::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    background: var(--light-color);
    width: 16px;
    height: 16px;
    transform: translate(-50%, 50%);
    border-radius: 50%;
  }

  &::before {
    left: auto;
    right: 0;
    transform: translate(50%, 100%);
  }
}

@keyframes zeroRotation {
  0% {
    transform: scale(1) rotate(0deg);
  }
  100% {
    transform: scale(0) rotate(360deg);
  }
}
</style>