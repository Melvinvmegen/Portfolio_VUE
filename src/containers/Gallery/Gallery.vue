<template lang="pug">
  .section.section-gallery
    a.section-anchor(id='Mes-Projets')
    .section-slide
      .section-title
        h2.title-bold.text-center MES PROJETS
        h3.featured-item-subheader.italic.text-center Découvrez un exemple concret de tout ce qui précède
      v-carousel(height=700)
        v-carousel-item(v-for="(item, i) in items" :key='i' delimiter-icon="mdi-minus" show-arrows="true" next-icon="true, fas fa-arrow-right")
          v-flex(class='flex flex-col-reverse xl:flex-row')
            CarouselContent(:title="item.title", :desc="item.desc", :text="item.btnText", :href="item.href" :tags="item.tags")
            v-flex(flex class="flex w-full xl:w-8/12")
              v-img.fill-height(:src="item.img" :alt="item.alt" :href="item.href" contain)

</template>

<script>
import CarouselContent from './CarouselContent/CarouselContent'
import Mindseed from './mindseed.png'
import ThomasKrief from './thomaskrief.png'
import SecuriGard from './Securigard.png'
import ReflexOsteo from './Reflex_osteo.png'
import TimePass from './Timepass.png'

export default {
  components: {
    CarouselContent
  },
  data () {
    return {
      items: {
        reflexosteo: {
          title: 'REFLEX OSTEO',
          desc: "Site de mise en relation entre ostéopathe et patient. Totalisant jusqu'ici 4 mois de travail avec différentes missions, tel que l'implementation de commentaires sur des articles de blog, la création d'un hub blog avec système de recherche (auparavant wordpress), l'amélioration des performances sur mobile, un système de mise en avant des meilleurs ostéopathes en fonction de leurs recommandations, mise en place de téléconsultation et bien d'autres...",
          img: ReflexOsteo,
          alt: 'REFLEX OSTEO',
          href: 'https://www.reflexosteo.com/',
          btnText: '► Se rendre sur le site',
          tags: [
            { id: 1, name: 'HTML5' },
            { id: 2, name: 'CSS3' },
            { id: 3, name: 'Javascript' },
            { id: 4, name: 'Ruby' },
            { id: 5, name: 'Ruby on Rails' },
            { id: 6, name: 'PostGreSQL' },
            { id: 7, name: 'Vue.js' }
          ]
        },
        tpass: {
          title: 'TIME PASS',
          desc: "Site de mise en relation entre expert et personnes ayant besoin d'aide dans un domaine spécifique. Mise en place d'un système de chat à l'attribution d'une mission, d'un système de recherche d'expert par tags, gestion de l'affection et de l'échange de la monnaie virtuelle : le tpass et implémentation de la charte graphique.",
          img: TimePass,
          alt: 'Time Pass',
          href: 'https://timepasse.herokuapp.com/',
          btnText: '► Se rendre sur le site',
          tags: [
            { id: 1, name: 'HTML5' },
            { id: 2, name: 'CSS3' },
            { id: 3, name: 'Javascript' },
            { id: 4, name: 'Ruby' },
            { id: 5, name: 'Ruby on Rails' },
            { id: 6, name: 'PostGreSQL' },
            { id: 7, name: 'Heroku' }
          ]
        },
        securigard: {
          title: 'SECURIGARD',
          desc: "Projet de création d'une application Web de gestion de base de données clients avec partage de documents sécurisés entre administrateurs et utilisateurs, création dynamique de contrats (format pdf) et distribution et remplissage d'enquête clients. Création et mise en place de la charte graphique.",
          img: SecuriGard,
          alt: 'SECURIGARD',
          href: 'https://serene-falls-79228.herokuapp.com/',
          btnText: '► Se rendre sur le site',
          tags: [
            { id: 1, name: 'HTML5' },
            { id: 2, name: 'CSS3' },
            { id: 3, name: 'Javascript' },
            { id: 4, name: 'Ruby' },
            { id: 5, name: 'Ruby on Rails' },
            { id: 6, name: 'PostGreSQL' },
            { id: 7, name: 'Heroku' }
          ]
        },
        thomaskrief: {
          title: 'THOMAS KRIEF',
          desc: "Projet de création d'un site vitrine pour l'ancien skieur professionnel et nouvel artiste : Thomas Krief. L'objectif rechercher, mettre en avant ses dernières créations et inviter les visiteurs à se rediriger vers son compte Artmajeur pour acceder à toute sa collection.",
          img: ThomasKrief,
          alt: 'THOMAS KRIEF',
          href: 'http://www.thomaskrief.fr/',
          btnText: '► Se rendre sur le site',
          tags: [
            { id: 1, name: 'HTML5' },
            { id: 2, name: 'CSS3' },
            { id: 3, name: 'Javascript' },
            { id: 4, name: 'React.js' },
            { id: 5, name: 'Netlify' }
          ]
        },
        mindseed: {
          title: 'MINDSEED',
          desc: "Projet de deux semaines réalisé au cours du Bootcamp proposé par la formation de développeur web Full-Stack, le Wagon. Nous avons créé un site d'aide à l'apprentissage avec un système de flashcards poussé. Celui-ci est à destination des étudiants, professeurs ou simple curieux avare d'apprentissage.",
          img: Mindseed,
          alt: 'MINDSEED',
          href: 'https://www.mindseed.app/',
          btnText: '► Se rendre sur le site',
          tags: [
            { id: 1, name: 'HTML5' },
            { id: 2, name: 'CSS3' },
            { id: 3, name: 'Javascript' },
            { id: 6, name: 'Ruby' },
            { id: 7, name: 'Ruby on Rails' },
            { id: 9, name: 'Heroku' }
          ]
        }
      }
    }
  }
}
</script>

<style>
  .section-gallery {
    background: #254A5D;
    min-height: 1200px !important;
  }

  .section-slide {
    width: 80%;
    max-width: 1200px;
    margin: 100px auto;
    height: 100vh;
  }

  .section-slide .featured-item-subheader {
    color: #D1DDE6;
  }

  .section-slide .title-bold {
    color: #D1DDE6;
  }

  .title-slide {
    font-size: 30px;
    text-decoration: none;
    line-height: 2.5;
    font-weight: 800;
    text-align: center;
    padding-right: 13%;
    color: #D1DDE6;
  }

  .description-slide {
    line-height: 2;
    font-family: 'Open Sans', sans-serif;
    text-align: justify;
    padding-right: 10%;
    color: white;
  }

  .theme--dark.v-btn.v-btn--icon {
    color: #d8dcee;
  }

  .v-window__next, .v-window__prev {
    background: transparent!important;
  }

  .v-window__next button.v-btn {
    color: #F9423A !important;
  }

  .v-window__prev button.v-btn {
    color: #F9423A !important;
  }

  .v-window__prev {
    left: 33.33%;
  }

  .v-carousel__item {
    align-items: center;
  }

  .v-window__next {
    right: 0;
  }

  .v-carousel__controls {
    right: 0!important;
    width: 66.67%!important;
  }

  .v-carousel__controls {
    background: transparent!important;
  }

  @media (max-width: 1281px) {
    .section-slide {
      margin: 50px auto!important;
      height: initial;
    }

    .section-title {
      margin-bottom: 60px;
    }

    .v-window, .v-carousel__item {
      height: 900px!important;
    }

    .v-carousel__item {
      align-items: flex-start!important;
    }

    .v-window__prev {
      left: 0!important;
    }

    .v-window__next, .v-window__prev {
      top: 30%!important;
      transform: translateY(-50%);
    }

    .title-slide {
      padding-right: 0!important;
    }

    .description-slide {
      padding-right: 0!important;
    }

    .tag-list {
      padding-right: 0 !important;
    }

    .v-carousel__controls {
      bottom: 0;
      width: 100% !important;
    }
  }
  @media (max-width: 1024px) {
    .v-window, .v-carousel__item {
      height: 820px!important;
    }
  }

  @media (max-width: 640px) {
    .v-window__next, .v-window__prev {
      top: 35% !important;
    }
  }

  @media (max-width: 540px) {
    .v-window__next, .v-window__prev {
      top: 30% !important;
    }
  }

  @media (max-width: 450px) {
    .v-window__next, .v-window__prev {
      top: 25% !important;
    }
  }


  @media (max-width: 400px) {
    .v-window__next, .v-window__prev {
      top: 20% !important;
    }

    .section-title {
      margin-bottom: 20px;
    }

    .v-window, .v-carousel__item {
      height: 950px!important;
    }
  }

  @media (max-width: 375px) {
    .v-window__next, .v-window__prev {
      margin: 0!important;
    }
  }

</style>
