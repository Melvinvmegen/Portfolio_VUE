<template lang="pug">
  div
    Backdrop(v-if='showModal' v-on:closemodal='hide()')
    .modal.fade.modal--form(v-show="showModal" ref="modal")
      .close-modal(@click='hide')
        .line
        .line
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
      document.body.style.height = '100vh'
      document.body.style.overflowY = 'hidden'
    },
    hide () {
      this.showModal = false
      document.body.style.height = ''
      document.body.style.overflowY = ''
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
    transition: all 0.3s ease-out;
    height: 700px;
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

  .close-modal:hover {
    cursor: pointer;
  }

  .close-modal .line:nth-child(1) {
    transform: rotate(-45deg);
    opacity: 1;
    position: absolute;
    right: 30px;
  }

  .close-modal .line:nth-child(2) {
    transform: rotate(45deg);
    opacity: 1;
    position: absolute;
    right: 30px;
  }

  .line {
    width: 30px;
    height: 2px;
    margin: 10px 0;
    background-color: #000;
  }

  @media (min-width: 600px) {
    .modal {
      width: 500px;
      left: calc(50% - 250px);
    }
  }

  @media (max-width: 600px) {
    .modal {
      top: 5% !important;
      width: 90% !important;
      left: 5% !important;
      height: 100%;
      overflow-y: scroll;
    }
  }
</style>
