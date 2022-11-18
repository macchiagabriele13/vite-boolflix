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

    <div class="col-4" v-if="movie.media_type === 'movie'">

        <div class="card">
            <div class="copertina">
                <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" :alt="movie.title">
            </div>

            <div class="info">
                <span> <strong>Titolo:</strong>{{ movie.title }}</span>
                <span><strong>Titolo Originale:</strong>{{ movie.original_title }}</span>
                <span class="lingua" v-if="!langList.includes(movie.original_language)"><strong>Lingua:</strong>{{
                        movie.original_language
                }}</span>
                <span v-else class="fi lingua"
                    :class="'fi-' + (movie.original_language)"><strong>Lingua:</strong></span>


                <div class="stars">
                    <strong>Voto:</strong>
                    <i class="fa-solid fa-star" v-for="star in store.voteStar(movie.vote_average)"></i>
                </div>

                <p class="movie-property">
                    <span>
                        <strong> OverView: </strong>
                    </span>
                    {{ movie.overview }}
                </p>

            </div>

        </div>

    </div>

    <div class="col-4" v-if="movie.media_type === 'person'">
        <div class="card">
            <div class="copertina">
                <img :src="`https://image.tmdb.org/t/p/w342${movie.profile_path}`" :alt="movie.name">
            </div>
            <div class="info">
                <span> <strong>Nome:</strong>{{ movie.name }}</span>
                <span><strong>Sesso:</strong>{{ movie.gender === '2' ? 'male' : 'female' }}</span>

            </div>

        </div>

    </div>

    <!-- 
    <div class="card" v-if="movie.media_type !== movie">
            <div class="copertina">
                <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" :alt="movie.title">
            </div>



            <div class="info">
                <span> <strong>Titolo:</strong>{{ movie.name }}</span>
                <span><strong>Titolo Originale:</strong>{{ movie.original_name }}</span>
                <span class="lingua" v-if="!langList.includes(movie.original_language)"><strong>Lingua:</strong>{{
                        movie.original_language
                }}</span>
                <span v-else class="fi lingua"
                    :class="'fi-' + (movie.original_language)"><strong>Lingua:</strong></span>

                <div class="stars">
                    <strong>Voto:</strong>
                    <i class="fa-solid fa-star" v-for="star in store.voteStar(movie.vote_average)"></i>
                </div>

                <p><span class="movie-property"> <strong> OverView: </strong></span> {{ movie.overview }}</p>

            </div>

        </div>

    

        </div> -->

</template>

<style lang="scss" scoped>
@import "/node_modules/flag-icons/css/flag-icons.min.css";

.card {


    height: 513px;
    width: 343px;
    position: relative;

    span {
        font-size: 1rem;
    }


    img {
        width: 100%;
    }

    .lingua {
        width: 100%;

        ::before {
            padding-left: 0;
        }
    }

    .info {
        padding: 2rem;
        background-color: rgba(0, 0, 0, 0.364);
        color: white;
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .movie-property {
        font-size: 0.75rem;

        span {
            font-size: 1rem;
        }
    }

    strong {
        padding-right: 0.5rem;
    }

    .fi:before {
        content: " " !important;
    }
}


.card:not(:hover)>.info {
    display: none;
}


.card:hover>.info {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.764) !important;
    color: white;
    position: absolute;
    width: 100%;
    height: 100%;
}

.card:hover>.copertina {

    display: block;
}
</style>