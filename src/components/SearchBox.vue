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
            <input type="text" class="form-control w-50" name="" id="" aria-describedby="helpId"
                placeholder="Scrivi il titolo che stai cercando..." v-model="store.params.query"
                @keyup.enter="$emit('searchList')">
            <button type="button" class="btn btn-primary" @click="$emit('searchList')">Cerca</button>
        </div>
    </section>

</template>

<style lang="scss" scoped>
header {
    text-align: center;
    padding-top: 1rem;
}
</style>


