<script>
import SearchBox from './SearchBox.vue'
import { store } from '../store.js'

export default {
    name: "SiteHeader",
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
    <header>

        <h1>
            BoolFlix - Il tuo sito di Cinema preferito
        </h1>

        <SearchBox
            @searchList="store.callApi(`${store.url}?api_key=${store.params.appKey}&query=${store.params.query}`)" />
    </header>


</template>

<style lang="scss" scoped>
header {
    padding: 1rem;
    display: flex;
    justify-content: space-between;

    h1 {
        font-size: 1.5rem;
        color: red;
    }

}
</style>