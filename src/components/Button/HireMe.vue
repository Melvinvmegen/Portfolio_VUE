<template lang="pug">
  div.header-hire-me(@click="openModal")
    span
      a.cta-button(:class="[className ? 'hire-me' : 'sticky-hire-me']" title="hire-me") {{ text }}
</template>

<script>
export default {
  props: {
    text: String,
    className: Boolean
  },
  methods: {
    openModal () {
      this.$emit('openModal')
    }
  }
}
</script>

<style>
  .header-hire-me {
    display: inline-block;
  }

  .hire-me {
    background: #254A5D;
    border: 2px solid #fff;
    color: #fff !important;
  }

  .hire-me:hover {
    background: transparent;
    border: 2px solid #254A5D;
    color: #254A5D !important;
  }

  .sticky-hire-me {
    background: transparent;
    border: 2px solid #254A5D;
    color: #254A5D;
  }

  .sticky-hire-me:hover {
    background: #254A5D;
    color: white !important;
    border: 2px solid white;
  }
</style>
