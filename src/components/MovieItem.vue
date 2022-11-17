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
    },

}

</script>

<template>


    <div class="col">

        <div class="card">
            <div class="copertina">
                <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" :alt="movie.title">
            </div>

            <div class="info">
                <span> <strong>Titolo:</strong>{{ movie.title || movie.name }}</span>
                <span><strong>Titolo Originale:</strong>{{ movie.original_title || movie.original_name }}</span>
                <span class="lingua" v-if="!langList.includes(movie.original_language)"><strong>Lingua:</strong>{{
                        movie.original_language
                }}</span>
                <span v-else class="fi lingua"
                    :class="'fi-' + (movie.original_language)"><strong>Lingua:</strong></span>

                <!-- <small><strong>Voto:</strong> {{ store.voteStar(movie.vote_average) }} / 5</small> -->
                <div class="stars">
                    <strong>Voto:</strong>
                    <i class="fa-solid fa-star" v-for="star in store.voteStar(movie.vote_average)"></i>
                </div>

                <p><span class="movie-property"> <strong> OverView: </strong></span> {{ movie.overview }}</p>

            </div>

        </div>

    </div>


</template>

<style lang="scss" scoped>
@import "/node_modules/flag-icons/css/flag-icons.min.css";

.card {


    height: 513px;
    width: 343px;
    position: relative;


    img {
        width: 100%;
    }

    .lingua {
        width: 100%;
    }

    .info {
        background-color: rgba(0, 0, 0, 0.495);
        color: white;
        position: absolute;
        width: 100%;
        height: 100%;



    }
}


.card:not(:hover)>.info {
    display: none;
}

.card:hover>.info {
    display: flex;
    flex-direction: column;
}

.card:hover>.copertina {

    display: none;
}
</style>