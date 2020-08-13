<template lang="pug">
  .section.section-one(id="section-one")
    a.section-anchor(id='Developpeur-Front-end')
    .section-main
      .section-wrapper
        .section-left
          BlaBla(:blabla="blabla")
          ButtonProject(:text="text" :href="href")
        .section-right
          .section-wrapper-right
            Polygons(:inputs="inputs")

</template>

<script>
import BlaBla from '@/components/BlaBla/BlaBla'
import ButtonProject from '@/components/Button/ButtonProject'
import Polygons from '@/components/Polygons/Polygons'
import JS from './JS.png'
import REACT from './react.png'

export default {
  components: {
    BlaBla,
    ButtonProject,
    Polygons
  },
  data () {
    return {
      blabla: {
        id: 1,
        title: 'DEVELOPPEUR FRONT-END',
        subtitle: 'React.js, Vue.js, Freelance',
        text: "Grâce à mon expérience professionnelle, j'ai pu suivre de multiples cours sur les languages suivants : HTML, CSS, Javascript. Et ainsi étendre mes compétences digitale. Certifié du Wagon après deux mois de bootcamp, j'ai décider d'étendre mes compétences en <strong>Javascript</strong>. Language à l'aide duquel je me suis spécialisé dans le front-end avec pour framework : <strong>React.js</strong>. Dans la continuité et au vu d'une opportunité professionelle j'en suis venu à découvrir et apprécier le framework <strong>Vue.js</strong>"
      },
      inputs: [
        { id: 1, alt: 'Javascript', img: JS },
        { id: 2, alt: 'React', img: REACT },
        { id: 3, alt: 'Vue', img: 'https://www.ambient-it.net/wp-content/uploads/2017/03/Vue.JS2-Logo-200.jpg' }
      ],
      text: 'Découvrez mes projets',
      href: '#Mes-Projets'
    }
  }
}
</script>

<style>
  .section-one {
    background: #254A5D;
  }

  .section-one .title-bold {
    color: #D1DDE6;
  }

  .section-one .line-anim a .text {
    color: #D1DDE6;
  }

  .section-one .featured-item-subheader {
    color: #D1DDE6;
  }

  .section-one .featured-item-body {
    color: white;
  }

  /* .featured-item-body strong {
    font-size: 1em;
    color: #fff;
  }

  .featured-item-body strong:hover {
    animation: neon 1.5s ease-in-out infinite alternate;
  }

  .featured-item-body strong:active {
    animation: neon 1.5s ease-in-out infinite alternate;
  }

  @keyframes neon {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #254A5D, 0 0 70px #254A5D, 0 0 80px #254A5D, 0 0 100px #254A5D, 0 0 150px #254A5D;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #254A5D, 0 0 35px #254A5D, 0 0 40px #254A5D, 0 0 50px #254A5D, 0 0 75px #254A5D;
  }
} */
</style>
