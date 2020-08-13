<template>
  <div class="max-w-sm m-auto my-8">
   <div class="border p-10 border-grey-light shadow rounded">
    <h3 class="text-2xl mb-6 text-grey-light">
     Sign in
    </h3>
    <form @submit.prevent="signin">
     <div class="text-red" v-if="error">{{ error }}</div>
      <div class="mb-6">
       <label for="email" class="input">Email</label>
       <input type="email" v-model="email" class="input" id="email" placeholder="kiki@gmail.com">
      </div>
      <div class="mb-6">
       <label for="password" class="input">Password</label>
       <input type="password" v-model="password" class="input" id="email" placeholder="kiki@gmail.com">
      </div>
      <button type="submit" class="font-sans font-bold px-4 rounded cursor-point no underline bg-green hover:bg-green-dark block w-full py-4 text-wite items-center justify-center">
       Sign in

      </button>
      <div class="my-4">
       <router-link to="/signup"> Sign up</router-link>
      </div>
    </form>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Signin',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  created () {
    console.log('jsuis la')
    this.checkSignIn()
  },
  updated () {
    this.checkSignIn()
  },
  methods: {
    signin () {
      this.$http.plain.post('/signin', {
        email: this.email,
        password: this.password
      })
        .then(response => this.signInSuccesful(response))
        .catch(error => this.signInFailed(error))
    },
    signInSuccesful (response) {
      if (!response.data.csrf) {
        this.signInFailed(response)
        return
      }
      localStorage.csrf = response.data.csrf
      localStorage.signedIn = true
      this.error = ''
      this.$router.replace('/')
    },
    signInFailed (error) {
      this.error = (error.response && error.response.data && error.response.data.error) || ''
      delete localStorage.csrf
      delete localStorage.signedIn
    },
    checkSignedIn () {
      if (localStorage.signedIn) {
        this.$router.replace('/')
      }
    }
  }
}
</script>
