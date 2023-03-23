<template lang="pug">
  .container.animate__animated.animate__fadeIn
    .cat__back
      button.cat__back-btn(@click="$router.go(-1)")
        img(:src="require('../assets/image/back.svg')")
      p.cat__back-btn-title Вернуться в каталог
    transition(name="card-anim", :key="catId")
      .cat__card.animated.fadeInUp
        .cat__card-img
          img(:src="cat.image ? cat.image : defaultImg")
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
import { mapState } from 'vuex';
export default {
  data() {
    return {
      cats: [],
      catId: null,
      defaultImg: 'https://catherineasquithgallery.com/uploads/posts/2021-12/1639688886_146-catherineasquithgallery-com-p-kotiki-rozovii-fon-467.jpg',
    };
  },
  computed: {
    ...mapState(['products']),
    cat() {
      return this.products.find((el) => el.id === this.catId);
    },
  },
  created() {
    this.fetch();
  },
  beforeRouteEnter({ params }, from, next) {
    const catId = parseInt(params.id);
    if (!isNaN(catId)) {
      next(vm => {
        vm.catId = catId;
      });
    } else {
      next('/');
    }
  },
  methods: {
    async fetch() {
      this.cats = await this.$store.state.products;
    },
  },
};
</script>
