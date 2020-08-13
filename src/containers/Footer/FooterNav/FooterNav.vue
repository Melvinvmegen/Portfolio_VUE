<template lang='pug'>
  ul.menu-items
    li.menu-item-has-children(v-for="link in links" :key='link.id')
      a.menu-item-title(href="/") {{link.title}}
      ul.sub-menu
        li.menu-item-6.menu-item-nav-footer(v-for="sublink in link.sublinks" :key='sublink.id')
          a.footer-link(href="/") {{sublink.name}}
</template>

<script>
export default {
  data () {
    return {
      links: {
        linksfront: {
          id: 1,
          title: 'Développeur Front-End',
          sublinks: [
            { id: 1, name: 'HTML' },
            { id: 2, name: 'CSS' },
            { id: 3, name: 'Javascript' },
            { id: 4, name: 'React' }
          ]
        },
        linksMar: {
          id: 2,
          title: 'Back-End',
          sublinks: [
            { id: 5, name: 'Ruby' },
            { id: 6, name: 'Rails' },
            { id: 7, name: 'SQL' },
            { id: 8, name: 'MongoDB' }
          ]
        },
        linksTra: {
          id: 3,
          title: 'Marketing Digital',
          sublinks: [
            { id: 9, name: 'SEO' },
            { id: 10, name: 'SEA' },
            { id: 11, name: 'Email Marketing' },
            { id: 12, name: 'Marketing de contenu' }
          ]
        }
      }
    }
  }
}
</script>

<style>
  .menu-items {
    list-style-type: none;
    padding: 0;
    width: 100%;
    display: flex;
  }

  .menu-item-has-children {
    float: left;
    vertical-align: top;
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
  }

  .sub-menu {
    margin-top: 24px;
    list-style-type: none;
    padding: 0;
  }

  .footer-link {
    color: white !important;
  }

  .footer-link:hover {
    color: #e0e2e4 !important;
  }

  .menu-item-title {
    color: #e0e2e4 !important;
    font-weight: 700;
  }

  .menu-item-nav-footer {
    letter-spacing: .5px;
    line-height: 1.14;
    margin-bottom: 14px;
    font-weight: 600;
    font-size: 14px;
  }

  .menu-item-nav-footer:hover {
    color: white;
  }
</style>
