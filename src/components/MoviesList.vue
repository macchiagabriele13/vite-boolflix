<script>

import { store } from '../store.js'
import MovieItem from './MovieItem.vue';

export default {
    name: "MoviesList",
    components: {
        MovieItem,
    },
    data() {
        return {
            store
        }
    },
}

</script>

<template>

    <div class="container">
        <div class="row">

            <MovieItem :movie="movie" v-for="movie in store.params.movies" />

        </div>

    </div>

</template>

<style lang="scss" scoped>

</style>