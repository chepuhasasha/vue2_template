<template lang='pug'>
  component(:is='tag')
    slot
</template>

<script>
export default {
  name: 'Flex',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  }
}
</script>

<style lang='scss'>

</style>