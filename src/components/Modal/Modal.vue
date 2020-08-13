<template lang="pug">
  div
    Backdrop(v-if='showModal' v-on:closemodal='hide()')
    .modal.fade.modal--form(v-show="showModal" ref="modal")
      .modal-dialog(role="document")
        .modal-content

          .modal-header
            h2.modal-title
              slot(name="title")

            button.close(aria-label="Close" data-dismiss="modal" type="button")
              span(aria-hidden="true")

          .modal-body
            slot(name="body")

          .modal-footer
            slot(name="footer")
</template>
<script>
import Backdrop from '@/components/Backdrop/Backdrop.vue'

export default {
  components: {
    Backdrop
  },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    show () {
      this.showModal = true
    },
    hide () {
      this.showModal = false
    }
  }
}
</script>
<style>
  .modal {
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 70%;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    padding: 30px;
    left: 15%;
    top: 20%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
  }
  .close {
    font-size: 2em;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    transition: all .35s ease;
  }

  .modal-title {
    text-align: center;
    margin-bottom: 30px;
    font-weight: 700;
  }

  @media (min-width: 600px) {
    .modal {
      width: 500px;
      left: calc(50% - 250px);
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .modal {
      width: 85%;
      left: 8%;
    }
  }
</style>
