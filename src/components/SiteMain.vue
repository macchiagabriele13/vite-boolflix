<script>
import { store } from '../store.js'
import MoviesList from './MoviesList.vue';


export default {
    name: "SiteMain",
    components: {
        MoviesList
    },
    data() {
        return {
            store
        }
    },
}

</script>

<template>

    <main>


        <MoviesList />




    </main>



</template>

<style lang="scss" scoped>

</style>