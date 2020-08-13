<template lang="pug">
  .footer-newsletter
    p.menu-item-newsletter Rejoignez ma newsletter
    form
      div.text-red(v-if="error") {{ error }}
      div.row
        div.col-xs-12
          div.form-group
            label(for="Email")
            input(type="text" id="email" placeholder="Email" class="form-control" :class="{invalid: $v.email.$error}" v-model.lazy="userData.email" @input="$v.email.$touch()")
            span(v-if="!$v.email.email") Veuillez soumettre un email valide
            span(v-if="!$v.email.required") Ce champs doit être rempli.
      div.row
        div.col-xs-12
          div.form-group
            button(type="submit" @click.prevent="onSubmit") S'inscrire

</template>

<script>
export default {
  data () {
    return {
      userData: {
        email: ''
      },
      error: ''
    }
  },
  validations: {
    email: {
      required,
      email
    }
  },
  methods: {
    onSubmit () {
      const formData = {
        email: this.userData.email
      }
      axios.post('/contacts', formData)
        .then((response) => {
          if (response) {
            var self = this
            Object.keys(this.userData).forEach(function (key, index) {
              self.userData[key] = ''
            })
            this.error = ''
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
  .footer-newsletter {
    width: 38%;
    float: right;
  }

  .menu-item-newsletter {
    font-size: 16px;
    color: #e0e2e4;
    font-weight: bold;
  }

  .newsletter-form p {
    color: rgb(35, 82, 124);
  }

  .newsletter-input {
    width: 70%;
    float: left;
  }

  [type="submit"],
  [value="Submit"],
  input[type="email"],
  input[type="number"],
  input[type="password"],
  input[type="tel"],
  input[type="text"],
  select,
  textarea {
    background-color: #f1f1f1;
    margin: 0;
    padding: 0 20px;
    height: 54px;
    line-height: 54px;
    border-radius: 0;
    -webkit-transition: all .15s ease-in-out;
    transition: all .15s ease-in-out;
    color: #0b0c11;
    border: none;
    resize: none;
  }

  .newsletter-form {
    display: flex !important;
  }

  .newsletter-input {
    border-radius: 0 !important;
    margin: 0 !important;
    width: 100%;
  }

  .newsletter-div {
    display: flex;
    padding: 0;
    flex-direction: column;
  }

  .btn-newsletter {
    width: 100%;
    margin-left: -2%;
    background: #f9423a;
    color: #fff;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
  }

  .flash {
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    margin-top: 8px;
    border: 2px solid #1EDD88;
    width: 95%;
  }

  .validation-class {
    color: red;
    margin: 5px;
    width: 100%;
  }
</style>