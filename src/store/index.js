import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { API_URL } from '../api/config'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    posts: [],
    pagination: {},
    totalPages: null
  },
  mutations: {
    SET_POSTS(state, data) {
      state.posts = data
    },
    SET_TOTALPOSTS(state, data) {
      state.totalPages = data
    },
    SET_PAGINATION(state, data) {
      state.pagination = data
    }
  },
  getters: {
    getTotalPages(state) {
      return state.totalPages
    },
    getPosts(state) {
      return state.posts
    }
  },
  actions: {
    getPosts( {commit} ) {
      //let pagination = state.pagination
      const confGet = {
        method: 'GET',
        withCredentials: false,
      }

      axios.get( API_URL + '/wp-json/wp/v2/posts?_embed', confGet )
        .then( response => {
          commit('SET_POSTS', response.data)
          commit('SET_TOTALPOSTS', response.headers['x-wp-totalpages'])

        })
    }

  }
})