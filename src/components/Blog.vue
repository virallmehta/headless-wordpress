<template>
    <div class="site-content container">
        <div class="row">
            <div class="page-title d-block p-4">
                Blog
            </div>
            <ListPost />
        </div>
    </div>
</template>

<script>
import ListPost from './ListPost.vue'

export default {
    name: 'Blog',
    components: { ListPost }
    
}
</script>
