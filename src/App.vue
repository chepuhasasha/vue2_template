<template lang='pug'>
  #app(:class='theme')
    .bg
      img(:src='require("./assets/circle.png")')
    router-view
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState({
      theme: (state) => [state.theme],
    }),
  },
};
</script>

<style lang="less">
#app {
  background: var(--bg_0_1);
  width: 100vw;
  height: 100vh;
  display: flex;
  // align-items: center;
  justify-content: center;
}
.bg {
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
}
</style>
