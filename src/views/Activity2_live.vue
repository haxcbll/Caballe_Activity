<template>
    <input v-model="name">
    <input v-model="age">
    <input v-model="course">
    <h2>
        <p>Name: {{ name }}</p>
        <p>Age: {{ age }}</p>
        <p>Course: {{ course }}</p>
    </h2>
</template>

<script>
export default{
    data(){
        return{
            name: "",
            age: "",
            course: ""
        }
    }
}
</script>