<template lang="pug">
  form(ref="form")
    span.error-message(v-if="error") {{ error }}
    div.form-group(:class="{invalid: $v.userData.name.$error}")
      input(type="text" id="name" placeholder="Nom" class="form-control" v-model.lazy="nameValue" @blur="$v.userData.name.$touch()")
    div.form-group(:class="{invalid: $v.userData.company.$error}")
      input(type="text" id="company" placeholder="Entreprise" class="form-control" v-model.lazy="companyValue" @blur="$v.userData.company.$touch()")
    div.form-group(:class="{invalid: $v.userData.email.$error}")
      input(type="text" id="email" placeholder="Email" class="form-control" v-model.lazy="emailValue" @blur="$v.userData.email.$touch()")
      span.error-message(v-if="!$v.userData.email.email") Veuillez soumettre un email valide
    div.form-group
      input(type="text" id="ville" placeholder="Ville" class="form-control" v-model.lazy="cityValue" @focus="scrollAgainstKeyboard($event)")
    div.form-group(:class="{invalid: $v.query.$error}")
      textarea.input-large(type="text" id="demande" placeholder="Formuler votre demande" class="form-control" v-model.lazy="queryValue" @input="$v.query.$touch()" @focus="scrollAgainstKeyboard($event)")
    div.form-button
      button.button-form(type="submit" :disabled="$v.$invalid" @click.prevent="onSubmit" ref="button") Prendre contact
</template>

<script>
import axios from 'axios'
import { required, email } from 'vuelidate/lib/validators'
export default {
  data: function () {
    return {
      userData: {
        name: '',
        company: '',
        email: '',
        city: ''
      },
      query: '',
      error: ''
    }
  },
  validations: {
    userData: {
      name: {
        required
      },
      company: {
        required
      },
      email: {
        required,
        email
      }
    },
    query: {
      required
    }
  },
  computed: {
    nameValue: {
      get () {
        return this.$store.state.userData.name
      },
      set (value) {
        this.userData.name = value
        this.$store.commit('setName', value)
      }
    },
    companyValue: {
      get () {
        return this.$store.state.userData.company
      },
      set (value) {
        this.userData.company = value
        this.$store.commit('setCompany', value)
      }
    },
    emailValue: {
      get () {
        return this.$store.state.userData.email
      },
      set (value) {
        this.userData.email = value
        this.$store.commit('setEmail', value)
      }
    },
    cityValue: {
      get () {
        return this.$store.state.userData.city
      },
      set (value) {
        this.userData.city = value
        this.$store.commit('setCity', value)
      }
    },
    queryValue: {
      get () {
        return this.$store.state.query
      },
      set (value) {
        this.query = value
        this.$store.commit('setQuery', value)
      }
    }
  },
  methods: {
    scrollAgainstKeyboard (event) {
      this.$refs.button.scrollIntoView({behavior: 'smooth'})
    },
    onSubmit () {
      const formData = {
        name: this.userData.name,
        entreprise: this.userData.entreprise,
        email: this.userData.email,
        city: this.userData.city,
        query: this.query
      }
      axios.post('/contacts', formData)
        .then((response) => {
          if (response) {
            var self = this
            Object.keys(this.userData).forEach(function (key, index) {
              self.userData[key] = ''
            })
            this.query = ''
            this.error = ''
            this.$emit('closeModal')
          }
        })
        .catch(error => {
          if (error) {
            this.setError(error, "Une erreur s'est produite")
          }
        })
    },
    setError (error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text
    }
  }
}
</script>

<style>
  .form-group {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }

  .form-group input {
    margin: 0;
    padding: 5px 20px;
    height: 54px;
    border-radius: 0;
    color: #0b0c11;
    display: block;
    width: 80%;
    margin: 0 auto!important;
    box-sizing: border-box;
    background: #fff!important;
    box-shadow: 2px 2px 5px rgba(0,0,0,.1)!important;
    border-radius: 8px!important;
    border: 1px solid #e7e7e7!important;
  }

  .form-group textarea {
    margin: 0;
    padding: 5px 20px;
    height: 54px;
    border-radius: 0;
    color: #0b0c11;
    display: block;
    width: 80%;
    margin: 0 auto!important;
    box-sizing: border-box;
    background: #fff!important;
    box-shadow: 2px 2px 5px rgba(0,0,0,.1)!important;
    border-radius: 8px!important;
    border: 1px solid #e7e7e7!important;
  }

  .input-large {
    height: 100px !important;
  }

  .form-button {
    margin-top: 30px;
    width: 100%;
    text-align: center;
  }

  .button-form {
    width: 76%;
    padding: 0 1.5rem;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    border: 1px solid transparent;
    border-radius: .325rem;
    background: #f9423a;
    border: 2px solid #fff;
    color: #fff!important;
    height: 54px;
    line-height: 54px;
  }

  .button-form:disabled {
    border: 2px solid #fff;
    color: #ccc!important;
    cursor: not-allowed;
  }

  .invalid input {
    border: 1px solid red !important;
  }

  .invalid textarea {
    border: 1px solid red !important;
  }

  .error-message {
    color: #0b0c11;
    display: block;
    width: 80%;
    margin: 0 auto!important;
    font-style: italic;
  }
</style>
