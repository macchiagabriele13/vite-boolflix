import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    url: 'https://api.themoviedb.org/3/search/multi',
    params: {
        appKey: 'be58437321d4fa4b419a747407eb817c',
        query: '',
        movies: '',

    },
    callApi: (url) => {
        axios.get(url)
            .then(response => {
                console.log(response.data);
                store.params.movies = response.data.results
                console.log(store.params.movies);



            })
            .catch(err => {
                store.error = err.message
            })
    },
    voteStar(vote) {
        return Math.round(vote / 2)
    }
})
