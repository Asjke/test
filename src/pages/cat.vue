<template lang="pug">
  .container
    .cat__back
      button.cat__back-btn(
        @click="$router.go(-1)"
      )
        img( src="../assets/icons/back.svg")
      p.cat__back-btn-title Вернуться в каталог
    .cat__card
      .cat__card-img
        img( :src="cats[this.$route.params.id - 1].img ? cats[this.$route.params.id - 1].img : 'https://catherineasquithgallery.com/uploads/posts/2021-12/1639688886_146-catherineasquithgallery-com-p-kotiki-rozovii-fon-467.jpg' ")
      .cat__card-title
        .cat__card-name {{ cats[this.$route.params.id - 1].title }}
        .cat__card-price(
          v-if="cats[this.$route.params.id - 1].price"
        ) {{ cats[this.$route.params.id - 1].price }}
        .cat__card-price-free(
          v-else
        ) Бесплатно
</template>

<script>
export default {
  data () {
    return {
      catId: '',
      cats: [],
      cat: []
    }
  },
  watch: {
    $route () {
      this.catId = this.$route
    }

  },
  computed: {
  },
  mounted () {
    this.fetch(),
    this.filteringCat()
  },
  methods: {
    async fetch () {
       this.cats = this.$store.state.products
    },
    filteringCat () {
      const id = this.$route.params.id
      this.cat = this.cats.filter((el) => {
        return el.id === id
      })
    }
  }

}
</script>