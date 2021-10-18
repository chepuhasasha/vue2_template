<template lang='pug'>
  component(:is='tag' :style='getStyle')
    slot
     .item
     .item
     .item
     .item
</template>

<script>
export default {
  name: 'Flex',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    col: {
      type: Boolean,
      default: false
    },
    gap: {
      type: Number,
      default: 10
    },
    width: {
      type: String,
      default: 'hug',
      validator: (value) => {
			  return ['hug', 'fill'].includes(value)
		  }
    },
    height: {
      type: String,
      default: 'hug',
      validator: (value) => {
			  return ['hug', 'fill'].includes(value)
		  }
    },
    justifyContent: {
      type: String,
      default: 'start',
      // validator: (value) => {
			//   return ['hug', 'fill'].includes(value)
		  // }
    },
    alignItems: {
      type: String,
      default: 'start'
    },
  },
  computed: {
    getStyle() {
      let map = { 
        hug: 'max-content',
        fill: '100%'
      }
      let result = {}
      result.width = map[this.width]
      result.height = map[this.height]
      return result
    }
  }
}
</script>

<style lang='scss' scoped>
.item {
  width: 40px;
  height: 40px;
  background: rgb(37, 37, 37);
}
</style>