<template lang='pug'>
  component.container(
    :is='tag'
    :class='[$style[mode]]'
    :style='castom'
  )
    slot
</template>

<script>
export default {
  name: 'container',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    mode: {
      type: String,
      default: 'default',
    },
    castom: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang='less'>
.container {
  position: relative;
  display: flex;
}
</style>

<style lang='less' module>
.default {
  flex-direction: column;

  width: max-content;
  height: max-content;

  background: var(--bg_0_05);
  border: var(--border_0);
  backdrop-filter: blur(5px);

  padding: 20px;
}
</style>
