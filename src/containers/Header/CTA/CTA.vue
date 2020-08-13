<template lang="pug">
  .main-header-right
    .header-user
      HireMe(:text="text", v-on:openModal='openModal', :className="className")
      Modal(ref="modal")
        template(slot="title")
          .title_underline Prenons contact

        template(slot="body")
          ContactForm(v-on:closeModal='closeModal')
        .form-submit(slot="footer")

</template>

<script>
import HireMe from '@/components/Button/HireMe.vue'
import Modal from '@/components/Modal/Modal.vue'
import ContactForm from '@/components/ContactForm/ContactForm.vue'

export default {
  components: {
    HireMe,
    Modal,
    ContactForm
  },
  props: {
    className: Boolean,
    showMobileNavShown: Boolean
  },
  data () {
    return {
      text: '► Recrutez-moi !',
      title: ''
    }
  },
  methods: {
    openModal () {
      this.$refs.modal.show()
      if (this.showMobileNavShown) {
        console.log(this.$emit('close-mobile-nav'))
        this.$emit('close-mobile-nav')
      }
    },
    closeModal () { this.$refs.modal.hide() }
  }
}
</script>

<style>
  .title_underline::after {
    content: "";
      display: block;
      margin: 1rem auto 1rem;
      height: 15px;
      width: 65px;
      border-bottom: .1rem solid #d8d8d8;
  }

  .header-user {
    display: flex;
    margin-top: 10px;
    padding-bottom: 5px;
    vertical-align: middle;
  }
</style>
