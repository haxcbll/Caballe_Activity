<template>
    <input v-model="Lastname", placeholder="Lastname">
    <br>
    <input v-model="Firstname" placeholder="Firstname">
    <br>
    <button @click="greet(Firstname, Lastname)">Greet</button>
    <p>{{ message }}</p>
</template>


<script>
export default {
    data() {
        return {
            Firstname: '',
            Lastname: '',
            message: ''
        }
    },
    methods: {
        greet(firstname, lastname) {
            this.message = "Hello " + firstname + " " + lastname;
        }
    }
}
</script>
