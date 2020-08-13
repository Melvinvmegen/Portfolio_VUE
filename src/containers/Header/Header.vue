<template lang="pug">
  div.site-header
    div.site-header-wrapper(:class="{'sticky-header': sticky, 'disappear' : disappear}")
      header(:class="{'mobile mobile-menu': showMobileNav, 'main-header' : !showMobileNav}")
        .main-header-left
          Logo(v-if="!showMobileNav")
        .main-header-center
          .nav-menu
            Nav(v-if="this.$vuetify.breakpoint.lg")
        .main-header-right
          CTA(v-if="this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.lg")
          .menu-toggle(v-if="this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs" @click='showMobileNav = !showMobileNav')
            .line
            .line
            .line
        .mobile-nav(v-if="showMobileNav")
          .mobile-header
            Logo
            div(:class="{'menu-toggle-open': showMobileNav, 'menu-toggle' : !showMobileNav}" @click='showMobileNav = !showMobileNav')
              .line
              .line
              .line
          Nav
          .hire-me-mobile
            CTA(:className="true" :showMobileNavShown="showMobileNav" v-on:close-mobile-nav='showMobileNav = !showMobileNav')

</template>

<script>
import Logo from '@/components/Logo/Logo.vue'
import Nav from '@/containers/Header/Nav/Nav.vue'
import CTA from '@/containers/Header/CTA/CTA.vue'

export default {
  components: {
    Logo,
    Nav,
    CTA
  },
  data () {
    return {
      sticky: false,
      disappear: false,
      scrollFrom: 600,
      showMobileNav: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < this.scrollFrom) {
        this.sticky = false
        if (currentScrollPosition > 120) {
          this.disappear = true
        } else {
          this.disappear = false
        }
        return
      }
      this.disappear = false
      this.sticky = currentScrollPosition > this.scrollFrom
    }
  }
}
</script>

<style>
  .site-header {
    background-color: #fff;
    display: block;
    height: auto;
    top: 0;
    width: 100%;
    z-index: 999;
    min-height: 106px;
  }

  .site-header-wrapper {
    background: inherit;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 3;
    border-bottom: 1px solid #eee;
    transition: top .3s ease 0s;
  }

  .sticky-header {
    position: fixed;
    width: 100vw;
    transition: top .5s ease 0s;
    background: #fff;
    z-index: 5;
    border-bottom: 1px solid #eee;
    top: 0;
  }

  .disappear {
    top: -50px
  }

  .main-header {
    max-width: 1200px;
    margin: 0 auto;
    z-index: 999;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .main-header-left {
    width: 10%;
    margin-left: 10px;
    margin-top: 5px;
    max-height: 100%;
  }

  .main-header-center {
    display: flex;
    align-items: center;
    height: 100%;
    text-align: center;
  }

  .main-header-right {
    right: 0;
    top: 0;
    transition: all .5s;
    max-width: 450px;
    display: flex;
  }

  .sticky-header-wrapper {
    top: -500px;
  }

  .sticky-header-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  .sticky-header-left {
    display: block;
    height: 100%;
    margin: 0 auto;
    text-align: center;
    transition: all .5s;
    width: 100%;
    position: relative;
    max-width: 325px;
    float: left;
    margin-top: 20px
  }

  .sticky-header-right {
    right: 0;
    top: 0;
    transition: all .5s;
    max-width: 900px;
    display: flex;
  }

  .header-user {
    display: inline-block;
    margin-top: 10px;
    padding-bottom: 5px;
    vertical-align: middle;
  }

  .header-login {
    display: inline-block;
    margin-right: 20px;
  }

  .header-search {
    display: inline-block;
    padding-bottom: 5px;
    vertical-align: middle;
  }

  .main-header h1 a {
    font-size: 36px;
  }

  .main-header a {
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
  }

  .nav-bar {
    flex-direction: row;
    justify-content: space-between;
  }

  .nav-bar-container {
    border-bottom: 1px solid #eee;
  }

  .nav-menu {
    justify-content: space-around;
    margin: 0 auto;
    display: flex;
  }

  .nav-menu div {
    list-style: none;
    padding: 0px;
    margin: 0;
  }

  .nav-item:hover a {
    color: #547f96 !important;
  }

  .nav-menu div {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    height: 90px;
    font-weight: 600;
    font-size: 14px;
  }

  .nav-menu div a {
    padding: 0 20px;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
  }

  .sticky-header-right .nav-menu div a {
    padding: 0px 20px;
    font-size: 12px;
    font-weight: bold;
    text-decoration: none;
  }

  .menu-dropdowns {
    position: static;
    float: right;
    margin-top: -7px;
  }

  .button-dropdowns {
    border: none;
    display: inline-block;
    padding: 27px 20px;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    color: #254A5D !important;
    font-size: 16px;
    font-weight: 700;
  }

  .button-dropdowns:hover {
    color: #254A5D !important;
  }

  .dropdown-content {
    cursor: auto;
    color: #000;
    background-color: #fff;
    display: none;
    min-width: 160px;
    margin: 0;
    padding: 0.5rem;
    z-index: 1;
    flex-wrap: wrap;
    position: absolute;
    box-shadow: 0 24px 32px 0 rgba(0, 0, 0, 0.03), 0 8px 32px 0 rgba(0, 0, 0, 0.06);
    border-radius: 1.6rem;
    width: 180px;
  }

  .dropdown-content::before {
    content: " ";
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 6px 6px 6px 6px;
    border-color: #fff #fff transparent transparent;
    position: absolute;
    right: 50%;
    top: -6px;
    transform: translateX(50%) rotate(-45deg);
    box-shadow: 0 24px 32px 0 rgba(0, 0, 0, 0.03), 0 8px 32px 0 rgba(0, 0, 0, 0.06);
  }

  .menu-dropdowns:hover .dropdown-content {
    display: flex;
  }

  .dropdown-item {
    width: 100%;
    display: block;
    padding: 0.75rem 1.5rem !important;
    text-align: left;
    border: none;
    white-space: normal;
    float: none;
    outline: 0;
    text-align: center !important;
  }

  .ref {
    background: blueviolet;
  }

  @media (max-width: 1250px) {
    .main-header {
      max-width: 1000px;
    }
  }

  @media (max-width: 960px) {
    .mobile {
      width: 100%;
      position: relative;
      display: block;
    }

    .mobile-header {
      display: flex;
      height: 100px;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      border-bottom: 1px solid #eee;
    }

    .main-header-center {
      flex-grow: initial;
      height: auto;
      display: flex;
      flex-direction: column;
    }

    .main-header-center .nav-item {
      text-align: left;
      padding: 20px 10px;
      font-size: 20px;
      font-weight: 700;
      border-bottom: 1px solid #eee;
      width: 100%;
    }

    .mobile .header {
      background-color: #254A5D;
      color: #fff;
      padding: 10px;
    }

    .menu-toggle:hover {
      cursor: pointer;
    }

    .menu-toggle-open .line:first-child {
      display: none;
    }

    .menu-toggle-open .line:nth-child(2) {
      transform: rotate(-45deg);
      opacity: 1;
      position: absolute;
    }

    .menu-toggle-open .line:nth-child(3) {
      transform: rotate(45deg);
      opacity: 1;
    }

    .line {
      width: 30px;
      height: 2px;
      margin: 10px 0;
      background-color: #000;
    }

    .main-header-right {
      margin-right: 30px !important;
    }

    .hire-me-mobile .main-header-right {
      max-width: 100% !important;
    }

    .menu-logo {
      width: 40%;
    }

    .menu-toggle:hover {
      cursor: pointer;
    }

    .mobile-nav ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }

    .mobile-menu {
      background: transparent;
    }

    .mobile-menu .mobile-nav {
      background-color: #fff;
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      padding: 20px 40px;
      flex-direction: column;
    }

    .mobile-menu .mobile-nav li a {
      color: #000 !important;
      display: block;
      padding: 15px 20px;
      font-size: 20px;
    }

    .mobile-menu .mobile-nav li a:hover {
      background-color: #D9CA93;
      color: #000;
    }

    .mobile-nav-menu {
      display: flex;
      flex-direction: column;
      width: 80%;
      margin: 0 auto;
    }

    .mobile-nav-title {
      color: #000;
      text-decoration: underline #D9CA93;
      margin-bottom: 50%;
    }

    .line-active {
      width: 30px;
      height: 2px;
      margin: 10px 0;
      background-color: white;
    }

    .nav-menu-mobile {
      width: 100%;
    }

    .nav-menu-mobile .nav-menu-item {
      padding: 20px 40px;
      font-size: 20px;
      font-weight: 700;
      border-bottom: 1px solid #eee;
    }

    .hire-me-mobile {
      margin: 0 auto;
    }

    .hire-me-mobile .header-hire-me {
      margin: 20px 20px;
    }

    .hire-me-mobile .header-hire-me .cta-button {
      padding: 1rem 15rem;
      font-size: 19px;
    }
  }

  @media (max-width: 805px) {
    .hire-me-mobile .header-hire-me .cta-button {
      padding: 1rem 13rem;
      font-size: 16px;
    }
  }

  @media (max-width: 715px) {
    .hire-me-mobile .header-hire-me .cta-button {
      padding: 1rem 10rem;
    }
  }

  @media (max-width: 620px) {
    .hire-me-mobile .header-hire-me .cta-button {
      padding: 1rem 8rem;
    }
  }

  @media (max-width: 450px) {
    .hire-me-mobile .header-hire-me .cta-button {
      padding: 1rem 3rem !important;
    }
  }

  @media (max-width: 375px) {
    .nav-menu-mobile .nav-menu-item {
      padding: 20px 30px !important;
      font-size: 18px !important;
    }

    .hire-me-mobile .header-hire-me .cta-button {
      padding: 1rem 1.5rem !important;
    }
  }

  @media (max-width: 320px) {
    .nav-menu-mobile .nav-menu-item {
      font-size: 14px !important;
    }
  }
</style>
