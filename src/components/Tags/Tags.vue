<template lang="pug">
  ul.tag-list
    li.tag(v-for='(tag, i) in tags' :key='tag.id') {{ tag.name }}
</template>

<script>
export default {
  props: {
    tags: Array
  }
}
</script>

<style>
  .tag-list {
    position: relative;
    list-style-type: none;
    padding-right: 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 20px 0;
  }

  .tag {
    min-height: 27px;
    padding: 3.38px 13.5px;
    font-size: 12px;
    border-radius: 13.5px;
    background-color: #D1DDE6;
    margin: 1px;
    color: #484848;
  }

  @media (max-width: 768px) {
    .tag-list {
      padding: 0;
    }
  }
</style>
