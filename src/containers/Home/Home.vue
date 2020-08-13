<template lang="pug">
  div
    SectionOne
    SectionTwo
    SectionThree
</template>

<script>
import SectionOne from '@/containers/Home/SectionOne/SectionOne'
import SectionTwo from '@/containers/Home/SectionTwo/SectionTwo'
import SectionThree from '@/containers/Home/SectionThree/SectionThree'

export default {
  components: {
    SectionOne,
    SectionTwo,
    SectionThree
  }
}
</script>

<style>
  .section {
    width: 100%;
    display: flex;
    min-height: 90vh;
    position: relative;
    align-items: center;
  }

  .title-bold {
    color: #254A5D;
    font-size: 30px;
    text-decoration: none;
    line-height: 2.5;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-align: center;
  }

  .section-main {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  .section-wrapper {
    width: 100%;
    position: relative;
    display: flex;
    margin-top: 100px
  }

  .section-left {
    padding-right: 5%;
    left: 0;
    max-width: 50%;
    flex: 0 0 50%;
  }

  .section-right {
    flex: 0 0 50%;
    max-width: 50%;
    text-align: center;
  }

  .section-wrapper-right {
    margin-bottom: 160px;
    display: inline-block;
  }

  .section-wrapper-left {
    display: inline-block;
  }

  .featured-item-body {
    line-height: 1.8;
    text-align: justify;
  }

  @media (max-width: 769px) {
    .section-wrapper {
      flex-direction: column;
    }

    .section-left {
      padding-right: 0% !important;
      max-width: 100% !important;
      flex: 0 0 100% !important;
      margin-bottom: 50px;
    }

    .section-right {
      flex: 0 0 100% !important;
      max-width: 100% !important;
      text-align: center;
    }
  }
</style>
