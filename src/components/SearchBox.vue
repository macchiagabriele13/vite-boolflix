<script>
import { store } from '../store.js'

export default {
    name: "SearchBox",
    data() {
        return {
            store
        }
    },
}

</script>

<template>

    <section>

        <div class="form-group d-flex justify-content-center">
            <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Cosa cerchi?"
                v-model="store.params.query" @keyup.enter="$emit('searchList')">
            <button type="button" class="btn btn-danger" @click="$emit('searchList')"><i
                    class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </section>

</template>

<style lang="scss" scoped>
header {
    text-align: center;
    padding-top: 1rem;
    padding-right: 1rem;
}
</style>


