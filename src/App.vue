<template lang="pug">
  #app
    .wrapper
      .page
        Header
        main.page__content
          router-view
        Footer
</template>
<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
export default {
  components: {
    Header,
    Footer
  },
  mounted () {
    // this.$router.push('/main/')
  }
}
</script>
<style lang="scss">
</style>
