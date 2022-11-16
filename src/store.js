import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    url: 'https://api.themoviedb.org/3/search/company',
    params: {
        appKey: 'be58437321d4fa4b419a747407eb817c',
        query: 'Matrix'
    },
    callApi: (url) => {
        axios.get(url)
            .then(response => {
                console.log(response.data);



            })
            .catch(err => {
                store.error = err.message
            })
    }
})