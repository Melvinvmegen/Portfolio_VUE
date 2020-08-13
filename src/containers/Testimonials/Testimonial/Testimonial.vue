<template lang="pug">
  .testimonials-list
    .testimonials-slide(class="pr-4 w-1_3" v-for="testimonial in testimonials" :key="testimonial.id" :class="{isvisible : showTestimonial}")
      .slide-container.card-testimonial.testimonial
        .testimonials-content
          .testimonial-infos
            .testimonial-bloc-image
              .testimonial-picture
                img.avatar-large(:alt="testimonial.alt", :src="testimonial.avatar")
            .testimonial-text
              p {{testimonial.name}}
              span {{testimonial.company}}
          .testimonial-quote
            blockquote {{testimonial.quote}}
</template>

<script>
export default {
  props: {
    testimonials: Array
  },
  data () {
    return {
      showTestimonial: false,
      ScrollPosition: 4100
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < this.ScrollPosition) {
        return
      }
      this.showTestimonial = currentScrollPosition > this.ScrollPosition
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
}
</script>

<style>
  .testimonials-slide {
    height: 100%;
    min-height: 1px;
    width: 33%;
    max-width: 380px;
    opacity: 0;
    transition: transform 5s .25s cubic-bezier(0, 1, .3, 1), opacity .3s .25s ease-out;
    transform: translateY(4em) rotateZ(-5deg);
  }

  .slide-container {
    height: 100%;
    padding: 0 12px;
  }

  .card-testimonial {
    display: flex !important;
    border-radius: 3%;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, .125);
  }

  .testimonial {
    height: 100%;
    position: relative;
    box-shadow: 0 8px 16px 0 rgba(140, 151, 161, 0.24);
  }

  .testimonials-content {
    padding: 2.5rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .testimonial-infos {
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px
  }

  .testimonial-bloc-images {
    position: relative;
  }

  .testimonial-picture {
    flex: 0 0 20%;
  }

  .testimonial-picture img {
    max-height: 50px;
    max-width: 50px;
  }

  .testimonial-text {
    padding-left: 1.2rem;
  }

  .testimonial-text p {
    font-size: 1.1rem;
    font-weight: 600;
  }

  .testimonial-text span {
    font-size: 0.8rem;
    display: flex;
    font-weight: 400;
  }

  .testimonial-quote {
    font-style: italic;
    line-height: 2;
    display: flex;
    height: 100%;
  }

  blockquote {
    text-align: center;
  }

  @media (max-width: 769px) {
    .testimonials-slide:first-child {
      display: none;
    }

    .testimonials-slide:nth-child(2) {
      display: none;
    }

    .testimonials-slide:nth-child(3) {
      width: 100%;
      padding-right: 0 !important;
    }
  }

  @media (max-width: 480px) {
    .testimonials-slide:nth-child(3) {
      max-height: 400px;
    }
  }

  @media (max-width: 375px) {
    .testimonials-slide:nth-child(3) {
      max-height: 450px;
    }
  }
</style>
