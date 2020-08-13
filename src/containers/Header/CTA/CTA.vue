<template lang="pug">
  .main-header-right
    .header-user
      HireMe(:text="text", v-on:openModal='openModal', :className="className")
      Modal(ref="modal")
        template(slot="title") Prenons contact

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
  .header-user {
    display: flex;
    margin-top: 10px;
    padding-bottom: 5px;
    vertical-align: middle;
  }
</style>
