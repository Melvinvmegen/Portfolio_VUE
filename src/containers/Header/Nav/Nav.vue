<template lang="pug">
  .main-header-center
    .nav-item(v-for="item in mains" :key="item.name" :class="{'nav-anim': item.active}" @click="handleClick(item)")
      a(:href="'#'+ item.href" :data-target="item.id")
        i.icon.fab.fa-search-dollar
        span.text(:data-target="item.id") {{ item.name }}
        span.line.-bottom
</template>

<script>
export default {
  data () {
    return {
      mains: [
        { id: 1, name: 'Developpeur Front-end', active: false, href: 'Developpeur-Front-end' },
        { id: 2, name: 'Back-end', active: false, href: 'Developpeur-Back-end' },
        { id: 3, name: 'Marketeur Digital', active: false, href: 'Marketeur-Digital' },
        { id: 4, name: 'Mes Projets', active: false, href: 'Mes-Projets' }
      ]
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleClick (item) {
      this.NoDuplicateActive()
      item.active = true
    },
    handleScroll () {
      const sectionOnePos = document.getElementById('section-one').offsetTop
      const sectionTwoPos = document.getElementById('section-two').offsetTop
      const sectionThreePos = document.getElementById('section-three').offsetTop
      const sectionGalleryPos = document.querySelector('.section-gallery').offsetTop
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      this.NoDuplicateActive()
      if (currentScrollPosition >= (sectionOnePos - 106) && currentScrollPosition <= sectionTwoPos) {
        this.NoDuplicateActive()
        this.mains[0].active = true
      }
      if (currentScrollPosition >= (sectionTwoPos - 106) && currentScrollPosition <= sectionThreePos) {
        this.NoDuplicateActive()
        this.mains[1].active = true
      }
      if (currentScrollPosition >= (sectionThreePos - 106) && currentScrollPosition <= sectionGalleryPos) {
        this.NoDuplicateActive()
        this.mains[2].active = true
      }
      if (currentScrollPosition >= (sectionGalleryPos - 106)) {
        this.NoDuplicateActive()
        this.mains[3].active = true
      }
    },
    NoDuplicateActive () {
      this.mains.forEach(element => {
        if (element.active) {
          element.active = false
        }
      })
    }
  }
}
</script>
