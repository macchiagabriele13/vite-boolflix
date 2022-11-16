<script>
import { store } from '../store.js'
import MoviesList from './MoviesList.vue';
import SearchBox from './SearchBox.vue'

export default {
    name: "SiteMain",
    components: {
        SearchBox,
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
        <SearchBox
            @searchList="store.callApi(`${store.url}?api_key=${store.params.appKey}&query=${store.params.query}`)" />

        <MoviesList />




    </main>



</template>

<style lang="scss" scoped>

</style>