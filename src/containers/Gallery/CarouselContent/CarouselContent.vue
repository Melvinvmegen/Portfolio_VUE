<template lang="pug">
  .gallery-left(class="gallery-left w-full xl:w-4/12")
    h2.title-slide {{ title }}
    p.description-slide {{ desc }}
    Tags(:tags="tags")
    ButtonProject(:text="text", :href="href")
</template>

<script>
import ButtonProject from '@/components/Button/ButtonProject'
import Tags from '@/components/Tags/Tags'

export default {
  components: {
    ButtonProject,
    Tags
  },
  props: {
    title: String,
    desc: String,
    text: String,
    href: String,
    tags: Array
  }
}
</script>

<style>
  .gallery-left {
    padding: 0 2%
  }

  .gallery-left .line-anim a .text {
      color: #fff;
  }
</style>
