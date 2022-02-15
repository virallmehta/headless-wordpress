<template>
    <div class="d-block">
         <p>Total Page: {{getTotalPages}}</p>
        <article class="card m-4" v-for="post in getPosts" :key="post.id">
            <div class="card-body">
                <h5 class="card-title">{{ post.title.rendered }}</h5>
                <div v-html="post.excerpt.rendered"></div>
            </div>
        </article>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'ListPost',
    computed: {
        ...mapGetters(['getTotalPages', 'getPosts'])
    },
    methods: {
        listPosts() {
            this.$store.dispatch('getPosts')
        }
    },
    mounted() {
        this.listPosts()
    }
}
</script>