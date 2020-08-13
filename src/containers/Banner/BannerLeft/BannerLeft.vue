<template lang="pug">
  .header
    .typed-container
      vue-typed-js(:strings="strings" :typeSpeed="40" :backSpeed="50" :loop="true")
        h1
          span.typing
    .cta-wrapper-home
      .home-text
        p Développeur Web passionné, je suis constamment à la recherche d'améliorations, que ce soit à des fins personnelles ou professionnelles. Dans un monde poussé par l'innovation, la lecture quotidienne et la curiosité semblent obligatoires mais, pour moi c'est inné. J'ai toujours aimé plonger au plus profond des sujets qui me passionnent.
      CTA(:className="true")

</template>

<script>
import CTA from '@/containers/Header/CTA/CTA.vue'

export default {
  components: {
    CTA
  },
  data () {
    return {
      strings:
        [
          'Je fais du Front-end sur React.js',
          'Je fais du Back-end sur Rails',
          'Je fais du PostgreSQL',
          'Je fais du Marketing Digital',
          'Je fais du SEO',
          'Mais aussi du SEA'
        ]
    }
  }
}
</script>

<style>

  .header {
    width: 60%;
    position: relative;
    text-align: justify;
  }

  .typed-container {
    height: 20%;
    min-height: 120px;
  }

  .cta-wrapper-home {
    height: 80%;
  }

  .typing {
    position: relative;
    color: #254a5d!important;
    font-size: 39px;
    text-decoration: none;
    margin-top: 5px;
    font-weight: 700;
  }

  .typed-cursor {
    position: relative;
    font-size: 2.5em;
    color: #254a5d!important;
    font-size: 41px;
    text-decoration: none;
    margin-top: 5px;
  }

  .home-text {
    margin: 50px 0;
    line-height: 2;
    font-size: 16px;
  }

  @media (max-width: 1250px) {
    .typing {
      line-height: initial !important;
    }
  }

  @media (max-width: 960px) {
    .typed-container {
      min-height: 80px !important;
    }
  }

  @media (max-width: 769px) {
    .typed-container {
      min-height: 100px !important;
    }

    .home-text p {
      text-align: justify
    }
  }

  @media (max-width: 650px) {
    .typed-container {
      min-height: 120px !important;
    }

    .home-text p {
      text-align: justify
    }
  }

  @media (max-width: 500px) {
    .typing {
      font-size: 35px !important;
    }
  }
</style>
