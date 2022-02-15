import Vue from 'vue';
import Vuex from 'vuex';
// import api from '../api/apiRequest'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 10,
        blogs: [ 'Blog 1', 'Blog 2', 'Blog 3', 'Blog 4', 'Blog 5' ],
        // blogs: [],
        // totalPages: null,
        user: { postsCount: 2 },
        errors: []

    },
    mutations: {
        INSERT_POST(state, blog) {
            state.blogs.push(blog)
        },
        INSERT_ERROR(state, error) {
            state.errors.push(error)
        },
        INCREMENT_USER_POST_COUNT(state, error) {
            state.user.postsCount
        }
    },
    getters: {
        blogsCount(state) {
            return state.blogs.length
        }
    },
    actions: {
        async insertPost({commit}, payload) {
            try {
                //await doAjaxRequest(payload)
                commit('INSERT_POST', payload)
                commit('INCREMENT_USER_POST_COUNT', payload)
            } catch(error) {
                commit('INSERT_ERROR', error)
            }
        }
        
    }
})