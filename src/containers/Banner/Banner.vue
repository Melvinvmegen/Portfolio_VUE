<template lang="pug">
  .section-home
    .blocks-hero(id="first-child")
      .main-container
        .home-face
          BannerLeft
          BannerRight(v-if="this.$vuetify.breakpoint.lg ||this.$vuetify.breakpoint.md")
</template>

<script>
import BannerLeft from './BannerLeft/BannerLeft'
import BannerRight from './BannerRight/BannerRight'

export default {
  components: {
    BannerLeft,
    BannerRight
  }
}
</script>

<style>
  .section-home {
    padding: 0;
  }

  #first-child {
    padding: 100px;
  }

  .blocks-hero {
    position: relative;
    padding: 0;
    height: 100vh;
    background-color: #D1DDE6 !important;
    box-shadow: inset -4px -10px 50px rgba(76, 189, 184, 0.1);
  }

  .main-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .home-face {
    display: flex;
    width: 100%;
    margin-top: 140px;
    justify-content: space-between;
  }

  @media (min-width: 1250px) {
    .home-face {
      padding-right: 4.7rem;
      padding-left: 4.7rem;
      margin-top: 100px
    }

  }

  @media (max-width: 1024px) {
    .main-container {
      max-width: 900px;
    }
  }

  @media (max-width: 960px) {
    .header {
      width: 100% !important;
    }
  }

  @media (max-width: 769px) {
    .home-face {
      margin-top: 100px !important;
    }
  }

  @media (max-width: 500px) {
    .home-face {
      margin-top: 0 !important;
      padding-right: 2em;
      padding-left: 2em;
    }

    #first-child {
      padding: 50px !important;
    }
  }

  @media (max-width: 400px) {
    #first-child {
      padding: 20px !important;
    }
  }
</style>
