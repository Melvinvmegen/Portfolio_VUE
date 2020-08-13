<template lang='pug'>
  .component-footer
    .footer-full-row
      .footer-inner
        .footer-header
          .footer-header-inner
            .footer-header-inner-left
              Logo(color='white')
            .footer-header-inner-right
              SocialLinks
          .footer-main
            //- Newsletter
            .footer-nav
              nav.nav-footer-nav
                FooterNav
          .footer-bottom
            p Copyright @2020 Mvmegen. All rights reserved
</template>

<script>
import Logo from '@/components/Logo/Logo'
import SocialLinks from '@/components/SocialLinks/SocialLinks'
// import Newsletter from '@/components/Newsletter/Newsletter'
import FooterNav from './FooterNav/FooterNav'

export default {
  components: {
    Logo,
    SocialLinks,
    // Newsletter,
    FooterNav
  }
}
</script>

<style>
  .component-footer {
    background-color: #254A5D;
  }

  .footer-full-row {
    margin: 40px 0 auto;
    max-width: none;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .footer-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding-right: 20px;
    padding-left: 20px;
  }

  .footer-header {
    padding-bottom: 40px;
    padding-top: 60px;
  }

  .footer-header-inner {
    width: 100%;
    min-height: 100px;
    display: flex;
    margin-bottom: 50px;
  }

  .footer-header-inner-left {
    width: 40%;
  }

  .footer-header-inner-right {
    width: 58%;
  }

  .footer-main {
    padding-bottom: 40px;
    padding-top: 60px;
  }

  .footer-nav {
    width: 100%;
    font-size: 16px;
    color: rgb(35, 82, 124);
    padding-bottom: 20px;
  }

  .nav-footer-nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .footer-bottom {
    text-align: center;
    margin-top: 30px;
    color: #fff;
  }

  @media (max-width: 425px) {
    .footer-header-inner {
      flex-direction: column;
    }

    .footer-header-inner-left {
      width: 70%;
      margin: 0 auto;
    }

    .footer-header-inner-right {
      width: 100%;
    }
  }
</style>
