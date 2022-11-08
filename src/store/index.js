import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        "id": 1,
        "title": "Полосатый котик",
        "img": "https://www.purina.ru/sites/default/files/2021-10/amer-korotkoserst-1.jpg",
        "categories": [2, 3, 4],
        "price": 14900
      },
      {
        "id": 2,
        "img": "https://www.purina.ru/sites/default/files/2021-10/angora-3.jpg",
        "title": "Красивая белая кошка с очень длинным именем Lorem100",
        "categories": [3, 4],
        "price": 3900
      },
      {
        "id": 3,
        "title": "Бесплатный котик",
        "categories": [1],
        "price": 0
      },
      {
        "id": 4,
        "title": "Ушастый дьявол",
        "img": "https://www.purina.ru/sites/default/files/2021-10/kerl2_1_0.jpg",
        "categories": [2],
        "price": 6900
      },
      {
        "id": 5,
        "title": "Черный котик на черном фоне",
        "img": "https://www.purina.ru/sites/default/files/2021-10/bombay-3.jpg",
        "categories": [1, 4],
        "price": 0
      },
      {
        "id": 6,
        "title": "Где лапки?",
        "img": "https://www.purina.ru/sites/default/files/2021-10/manchkin-1.jpg",
        "categories": [2, 3],
        "price": 1900
      },
      {
        "id": 7,
        "title": "Какой то дорогой кот",
        "img": "https://www.purina.ru/sites/default/files/2021-10/cornish-reks-2.jpg",
        "categories": [3],
        "price": 39900
      },
      {
        "id": 8,
        "img": "https://www.purina.ru/sites/default/files/2021-10/mein-kun-1.jpg",
        "title": "Большой котик",
        "categories": [2, 4],
        "price": 7900
      },
      {
        "id": 9,
        "title": "Котик без фотографии",
        "categories": [1, 4],
        "price": 300
      },
      {
        "id": 10,
        "title": "Персидская булочка",
        "img": "https://www.purina.ru/sites/default/files/2021-10/persidskaya3.jpg",
        "categories": [2, 4],
        "price": 11900
      },
      {
        "id": 11,
        "title": "Гепард комнатный",
        "img": "https://www.purina.ru/sites/default/files/2021-10/savanna-2.jpg",
        "categories": [2, 4],
        "price": 21900
      },
      {
        "id": 12,
        "title": "Самый красивый котик",
        "categories": [1, 4],
        "price": 0
      }
    ],
    cats: [],
    options: [
      { "id": 1, "label": "Беспородные" },
      { "id": 2, "label": "Породистые" },
      { "id": 3, "label": "Титулованные" },
      { "id": 4, "label": "Пусечки бусечки" }
    ],
    filter_params: {
      breed: 'all',
      freeCheck: [],
      name: ''
    }
  },
  getters: {
    options: state => state.options,
    cats: state => state.cats,
    filter_params: state => state.filter_params
  },
  mutations: {
    GET_FILTER_PARAMS (state, payload) {
      state.filter_params = payload
    },
    GET_FILTERED_CATS (state, payload) {
      state.cats = state.products
      let array = []
      array = payload.breed !== 'all' ? state.products.filter((el) => {
        return el.categories.includes(payload.breed)
      }) : state.products
      let arrayName = []
      arrayName = array.filter((el) => {
        return el.title.includes(payload.name)
      })
      let arrayPrace = []
      if (payload.freeCheck[0] === 'free' && payload.freeCheck.length === 1 ) {
        arrayPrace = arrayName.filter((el) => {
          return el.price === 0
        })
      } else 
      if (payload.freeCheck[0] === 'notFree' && payload.freeCheck.length === 1) {
        arrayPrace = arrayName.filter((el) => {
          return el.price !== 0
        })
      } else 
      if (payload.freeCheck.length === 2 ) {
        arrayPrace = arrayName
      } else {
        arrayPrace = arrayName
      }
      state.cats = arrayPrace
    },
  },
  actions: {}
});
