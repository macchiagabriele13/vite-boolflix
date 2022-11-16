<script>
import { store } from '../store.js'
import SearchBox from './SearchBox.vue'

export default {
    name: "SiteMain",
    components: {
        SearchBox,
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
        <SearchBox
            @searchList="store.callApi(`${store.url}?api_key=${store.params.appKey}&query=${store.params.query}`)" />


        <div class="container">
            <div class="row">
                <div class="col" v-for="movie in store.params.movies">
                    <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" alt="">
                    <h3>{{ movie.title }}</h3>
                    <h4>{{ movie.original_title }}</h4>
                    <h5>{{ movie.original_language }}</h5>
                    <h6>{{ movie.vote_average }}</h6>
                </div>
            </div>

        </div>



    </main>



</template>

<style lang="scss" scoped>

</style>