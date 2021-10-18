<template lang='pug'>
  Flex.button(
    tag='button'
    padding='6px 10px'
    v-bind='$attrs'
    :class='getClasses'
    @click='$emit("click")
  ) 
    span.button_text {{ text }}
    icon.button_icon(v-if='icon' :icon='icon')
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: 'button',
    },
    icon: {
      type: String,
      default: null,
    },
    active: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    getClasses() {
      return {
        [this.$style.mode.active]: this.active,
        [this.$style.mode.disable]: this.disable
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.button {
  cursor: pointer;
  &:hover {
  }
  &_text {
  }
  &_icon {
  }
}
</style>

<style lang='scss' module='mode'>
.active {
  background: red;
}
.disable {
  background: rgb(71, 71, 71);
}
</style>