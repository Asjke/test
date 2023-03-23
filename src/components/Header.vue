<template lang="pug">
  .container
    .header
      .header__logo
        router-link(to="/main")
          .main-nav__logo-img
            img(:src="require('../assets/img/etton-logo.svg')")
      .header_main-nav
        ul.main-nav__list
          li.main-nav__item(
            v-for="item in navItem"
            :key="item.link"
          )
            router-link.main-nav__link(:to="item.link") {{ item.label }}


</template>
<script>
export default {
  data () {
    return {
      navItem: [
        {
          label: 'Главная',
          link: '/main'
        },
        {
          label: 'Каталог',
          link: '/catalog'
        },
      ]
    }
  }
}
</script>