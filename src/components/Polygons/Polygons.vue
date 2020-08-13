<template lang="pug">
  div
    span.circle
    .image-show-off
      .clipped-border(v-for="input in propsInputs" :key="input.id")
        img(:src="input.img" :alt="input.alt" id='clipped')
</template>

<script>
export default {
  props: {
    inputs: Array
  },
  data () {
    return {
      propsInputs: this.inputs
    }
  }
}
</script>

<style>
  .image-show-off {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .image-show-off:after {
    content: '';
  }

  .image-show-off img {
    width: 150px;
    height: 150px;
  }

  .circle {
    float: left;
    height: 300px;
    width: 300px;
    shape-outside: circle();
    background-color: transparent;
    border: 2px solid #254A5D;
    border-radius: 50%;
  }

  .section-one .circle {
    border: 2px solid #D1DDE6;
  }

  .clipped-border {
    -webkit-clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
    padding: 5px;
    background: #D1DDE6;
    width: 150px;
    height: 150px;
    max-height: 250px;
    max-width: 250px;
    height: var(--height);
    transition: transform 0.2s;
    position: absolute;
    cursor: pointer;
  }

  .clipped-border:before {
    content: '';
    position: absolute;
    opacity: 0.5;
    width: 350px;
    height: 70px;
    background: white;
    top: 0;
    left: 0;
    z-index: 1;
    transform: rotate(45deg);
    transition: transform 0.5s;
  }

  .clipped-border:hover:before {
    transform: translate(-100px, 400%) rotate(45deg);
    transition: transform 0.5s;
  }

  .clipped-border:first-child {
    left: -90px;
  }

  .clipped-border:nth-child(2) {
    top: 210px;
    left: 80px;
  }

  .clipped-border:nth-child(3) {
    top: 0;
    left: 230px;
  }

  #clipped {
    -webkit-clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);

  }

  .clipped-border:hover {
    transform: scale(1.2);
    transition: transform 0.2s;
    z-index: 1;
  }

  @media (max-width: 640px) {
    .circle {
      height: 250px!important;
      width: 250px!important;
    }
    .clipped-border:nth-child(3) {
      left: 190px!important;
    }
    .clipped-border:nth-child(2) {
      top: 190px !important;
      left: 50px !important;
    }
  }

  @media (max-width: 425px) {
    .circle {
      height: 200px!important;
      width: 200px!important;
    }
    .clipped-border:first-child {
      left: -70px;
    }
    .clipped-border:nth-child(3) {
      left: 150px!important;
    }
    .clipped-border:nth-child(2) {
      top: 160px !important;
      left: 40px !important;
    }
    .clipped-border {
      width: 120px;
      height: 120px;
    }
    .image-show-off img {
      width: 110px;
      height: 110px;
    }
  }
</style>
