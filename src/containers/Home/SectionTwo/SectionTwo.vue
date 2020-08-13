<template lang="pug">
  .section.section-two(id="section-two")
    a.section-anchor(id='Developpeur-Back-end')
    .section-main
      .section-wrapper
        .section-right
          .section-wrapper-right
            Polygons(:inputs="inputs")
        .section-left
          BlaBla(:blabla="blabla")
          ButtonProject(:text="text" :href="href")
</template>

<script>
import BlaBla from '@/components/BlaBla/BlaBla'
import ButtonProject from '@/components/Button/ButtonProject'
import Polygons from '@/components/Polygons/Polygons'
import PostGreSQL from './PostGreSQL.png'
import Rails from './Rails.png'
import Ruby from './RUBY.png'

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
        title: 'DEVELOPPEUR BACK-END',
        subtitle: 'Ruby on Rails, Freelance',
        text: "Certifié du Wagon après un bootcamp de deux mois, où j'ai pu compléter mes compétences par un language supplémentaire, <strong>Ruby</strong> et son framework, <strong>Rails</strong>. Le Wagon m'a également initié à la gestion de base de données avec son language SQL et des outils tel que MongoDB ou encore <strong>PostgreSQL</strong>. Actuellement en mission pour Reflex Osteo avec pour référent technique Studio HB agence web spécialisé sur rails."
      },
      inputs: [
        { id: 1, alt: 'Ruby', img: Ruby },
        { id: 2, alt: 'Rails', img: Rails },
        { id: 3, alt: 'PostgreSQL', img: PostGreSQL }
      ],
      text: 'Découvrez mes projets',
      href: '#Mes-Projets'
    }
  }
}
</script>

<style>
  .section-two {
  }

  .section-two .clipped-border {
    background: #254A5D;
  }
</style>
