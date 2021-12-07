<template lang='pug'>
  #app(:class='theme')
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
}
</style>
