<template lang="pug">
  .section.section-three(id="section-three")
    a.section-anchor(id='Marketeur-Digital')
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
import Mailchimp from './MailC.jpg'

export default {
  components: {
    BlaBla,
    ButtonProject,
    Polygons
  },
  data () {
    return {
      blabla: {
        id: 1, title: 'MARKETEUR DIGITAL', subtitle: 'Bachelor, spécialisation Marketing', text: "Etudes réalisées à Kedge Business School ou j'ai eu la chance de développer mes compétences numériques à travers de nombreux stages et expériences. Tel que mes 2 années passées en tant que responsable de la transition digitale pour le marché français au sein de l'entreprise, Royal Brinkman. Au cours de cette expérience j'ai appris à maîtriser le <strong>SEO</strong>, le <strong>SEA</strong> ainsi que l'email marketing à l'aide de différents outils tels que <strong>Mailchimp</strong>, Hotjar, <strong>Adwords</strong>, <strong>Google Analytics</strong>, ahrefs et Joomla pour CMS."
      },
      inputs: [
        { id: 1, alt: 'MailChimp', img: Mailchimp },
        { id: 2, alt: 'Ahrefs', img: 'https://3x5yp62s8loz3jw8273enqos16xh-wpengine.netdna-ssl.com/wp-content/uploads/icon360-Analytics.png' },
        { id: 3, alt: 'AdWords', img: 'https://www.pngitem.com/pimgs/m/242-2422855_transparent-google-adwords-logo-png-google-adwords-logo.png' }
      ],
      text: 'Découvrez mes projets',
      href: '#Mes-Projets'
    }
  }
}
</script>

<style>
  .section-three {
    background: #D1DDE6;
  }

  .section-three .clipped-border {
    background: #254A5D;
  }

</style>
