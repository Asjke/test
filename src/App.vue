<template lang="pug">
  #app
    .wrapper
      .page
        Header
        main.page__content
          router-view
        Footer
      //-   router-link(to="/") Home
      //-   router-link(to="/about") About
</template>
<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss">
</style>
