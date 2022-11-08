<template lang="pug">
  .container
    .catalog
      .catalog__container
        .div
        h1 Каталог
        button.btn.btn--main.catalog-btn-filter(
          @click='showFilter = !showFilter'
        ) Фильтры
        .catalog__filter(
          v-if="showFilter"
        )
          input.catalog__filter-input-name(
            placeholder="Поиск"
            v-model="name"
          )
          select.catalog__filter-input-select(
            v-model="breed"
            placeholder=""
            )
            option.catalog__filter-input-options(
              value="all"
            ) Все породы
            option(
              v-for="item in options"
              :key="item.id"
              :label="item.label"
              :value="item.id"
            )
          .catalog__filter-checkbox-container
            .catalog__filter-checkbox-row
              input( type="checkbox" id="free" value="free" v-model="freeCheck")
              label( for="free") Бесплатные
            .catalog__filter-checkbox-row
              input( type="checkbox" id="notFree" value="notFree" v-model="freeCheck")
              label( for="notFree") Не бесплатные
          button.btn.btn--main(
            @click="filtering"
          ) Применить
          button.btn.btn--alt(
            v-if="breed !== 'all' || name || freeCheck.length"
            @click="clearFiltering"
          ) Сброс
        .catalog__card-container
          .catalog__card-sort
            button.catalog__card-sort-btn(
              @click="sorting"
              :class="[ !sortStatus ? 'catalog__card-sort-img-rotate-1' : 'catalog__card-sort-img-rotate']"
            )
              .catalog__card-sort-img
                img#img( src="../assets/icons/sort.svg")
            .catalog__card-sort-title По цене
          ul.catalog__list
            li.catalog__item(
              v-for="item in cats"
              :key="item.id"
            )
              router-link(
                :to="'/cat/' + item.id"
              ).catalog__card
                .catalog__img-container
                  img( :src="item.img ? item.img : 'https://catherineasquithgallery.com/uploads/posts/2021-12/1639688886_146-catherineasquithgallery-com-p-kotiki-rozovii-fon-467.jpg'")
                .catalog__item-title
                  p {{ item.title }}
                .catalog__item-price(
                  v-if="item.price"
                )
                  p {{ item.price }}
                .catalog__item-price-free(
                  v-else
                ) Бесплатно

</template>
<script>
export default {
  data () {
    return {
      cats: [],
      options: [],
      breed: 'all',
      freeCheck: [],
      name: '',
      sortStatus: false,
      showFilter: true
    }
  },
  mounted () {
    this.fetch()
  },
  methods: {
    fetch () {
      const params = this.$store.getters.filter_params
      this.name = params.name
      this.breed = params.breed
      this.freeCheck = params.freeCheck
      this.filtering()
      this.cats = this.$store.getters.cats
      this.options = this.$store.getters.options
    },
    filtering () {
      const data = {}
      data.name = this.name
      data.breed = this.breed
      data.freeCheck = this.freeCheck
      this.$store.commit('GET_FILTER_PARAMS', data)
      this.$store.commit('GET_FILTERED_CATS', data)
      this.cats = this.$store.getters.cats
    },
    clearFiltering () {
      this.name = ''
      this.breed = 'all'
      this.freeCheck = []
      this.filtering()
    },
    sorting () {
      if (this.sortStatus) {
        this.cats.sort((a, b) => {
          return a.price - b.price
        })
      } else {
        this.cats.sort((a, b) => {
          return b.price - a.price  
        })
      }
      this.sortStatus = !this.sortStatus
    }
  }
}
</script>