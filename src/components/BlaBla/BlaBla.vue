<template lang="pug">
  div
    h2.title-bold {{blabla.title}}
    h3.featured-item-subheader.italic.text-center {{blabla.subtitle}}
    p(v-html="blabla.text").featured-item-body
</template>

<script>
export default {
  props: {
    blabla: Object
  }
}
</script>

<style>
  .featured-item-subheader {
    color: #254A5D;
    font-size: 18px;
    text-decoration: none;
    line-height: 2.5;
    text-align: center;
  }
</style>
