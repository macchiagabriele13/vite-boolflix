<script>
import { store } from './store.js'
import SiteHeader from './components/SiteHeader.vue'
import SearchBox from './components/SearchBox.vue'
import SiteMain from './components/SiteMain.vue'
import MoviesList from './components/MoviesList.vue'


export default {
  name: 'App',
  components: {
    SiteHeader,
    SearchBox,
    SiteMain,
    MoviesList,
  },
  data() {
    return {
      store
    }
  },
  mounted() {
    store.callApi(`${store.url}?api_key=${store.params.appKey}&query=${store.params.query}`)
  }
}
</script>

<template>

  <SiteHeader />

  <SiteMain />






  <footer>

  </footer>

</template>

<style scoped>

</style>