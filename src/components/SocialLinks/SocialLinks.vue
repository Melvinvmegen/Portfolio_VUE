<template lang='pug'>
  ul.social-links
    li(v-for="link in socialLinks" :key='link.id')
      a(:href="link.href")
        i(:class='"icon fab " + link.icon')
        p.social-link {{link.name}}
</template>

<script>
export default {
  data () {
    return {
      socialLinks: [
        { id: 1, name: 'LinkedIn', icon: 'fa-linkedin-in', href: 'https://www.linkedin.com/in/melvin-van-megen/' },
        { id: 2, name: 'Twitter', icon: 'fa-twitter', href: '' },
        { id: 3, name: 'Skype', icon: 'fa-skype', href: '' },
        { id: 4, name: 'Github', icon: 'fa-github', href: 'https://github.com/Melvinvmegen' }
      ]
    }
  }
}
</script>

<style>
  .social-links {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 600px;
    margin: 0 0 auto;
    max-width: 100%;
  }

  .fa:hover {
    opacity: 0.7;
  }

  .social-links .icon {
    padding-top: 20px;
    font-size: 25px;
    width: 70px;
    text-decoration: none;
    color: white !important;
  }

  .icon:hover {
    color: white;
  }

  .social-link {
    color: white;
  }
</style>
