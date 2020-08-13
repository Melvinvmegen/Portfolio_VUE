<template lang="pug">
  .line-anim
    a(:href="href")
      span.text {{ text }}
      span.line.-right
      span.line.-top
      span.line.-left
      span.line.-bottom
</template>

<script>
export default {
  props: {
    text: String,
    href: String
  }
}
</script>

<style>

</style>
