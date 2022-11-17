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
        langList: Array,
    }
}

</script>

<template>


    <div class="col">
        <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" :alt="movie.title">
        <h3>{{ movie.title }}</h3>
        <h4>{{ movie.original_title }}</h4>
        <h5 v-if="!langList.includes(movie.original_language)">{{ movie.original_language }}</h5>
        <span v-else class="fi" :class="'fi-' + (movie.original_language)"></span>
        <h6>{{ movie.vote_average }}</h6>
    </div>


</template>

<style lang="scss" scoped>
@import "/node_modules/flag-icons/css/flag-icons.min.css";
</style>