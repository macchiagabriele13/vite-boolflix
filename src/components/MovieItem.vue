<script>

import { store } from '../store.js'

export default {
    name: "MovieItem",
    data() {
        return {
            store
        }
    },
    props: {
        movie: Object,
    }
}

</script>

<template>


    <div class="col">
        <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" :alt="movie.title">
        <h3>{{ movie.title }}</h3>
        <h4>{{ movie.original_title }}</h4>
        <h5>{{ movie.original_language }}</h5>
        <h6>{{ movie.vote_average }}</h6>
    </div>


</template>

<style lang="scss" scoped>

</style>