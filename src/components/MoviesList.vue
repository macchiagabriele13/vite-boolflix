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
            store,
            langList: ["en", "it", "ja", "es", "fr", "de"],
        }
    },
}

</script>

<template>

    <div class="container">
        <div class="row g-5">

            <MovieItem :langList="langList" :movie="movie" v-for="movie in store.params.movies" />

        </div>

    </div>

</template>

<style lang="scss" scoped>

</style>