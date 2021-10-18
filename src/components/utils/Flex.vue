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
    dev: {
      type: Boolean,
      default: false
    },
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
    fixWidth: {
      type: Number,
      default: null,
      validator: (value) => {
			  return typeof value === 'number'
		  }
    },
    height: {
      type: String,
      default: 'hug',
      validator: (value) => {
        return ['hug', 'fill'].includes(value)
		  }
    },
    fixheight: {
      type: Number,
      default: null,
      validator: (value) => {
        return typeof value === 'number'
      }
    },
    justifyContent: {
      type: String,
      default: 'start',
      validator: (value) => {
			  return [
          'start',
          'center',
          'space-around',
          'space-between',
          'end'
        ].includes(value)
		  }
    },
    justifySelf: {
      type: String,
      default: 'start',
      validator: (value) => {
			  return [
          'start',
          'center',
          'end'
        ].includes(value)
		  }
    },
    alignItems: {
      type: String,
      default: 'start',
      validator: (value) => {
			  return [
          'start',
          'center',
          'end'
        ].includes(value)
		  }
    },
    alignSelf: {
      type: String,
      default: 'start',
      validator: (value) => {
			  return [
          'start',
          'center',
          'end'
        ].includes(value)
		  }
    },
  },
  computed: {
    getStyle() {
      const map = { 
        hug: 'max-content',
        fill: '100%',
      }
      return {
        width: this.fixWidth || map[this.width],
        height: this.fixheight || map[this.height],
        justifyContent: this.justifyContent,
        justifySelf: this.justifySelf,
        alignItems: this.alignItems,
        alignSelf: this.alignSelf,
        border: this.dev ? '1px solid black' : 'none'
      }
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