<template lang="pug">
  .logo
    img(:src="whitelogo" alt="" class="" v-if="color")
    img(:src="defaultlogo" alt="" class="" v-else)
</template>

<script>
import Logo from './LOGO.svg'
import WhiteLogo from './logo blanc.svg'

export default {
  props: {
    color: String
  },
  data () {
    return {
      defaultlogo: Logo,
      whitelogo: WhiteLogo
    }
  }

}
</script>

<style>
  .logo {
    width: 100px;
    height: 100px;
    margin-left: 10px;
  }
</style>
