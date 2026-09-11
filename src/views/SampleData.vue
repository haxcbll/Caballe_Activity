<script>
export default{
    data() {
        return{
            name: "Hanna Alexandra D. Caballe",
            age: 22,
            student_id: "23-0315-61",
            course: "BSIT",
            year_level: "3rd Year"

        }
    }
}
</script>

<template>
    <p>Name: {{ name }}</p>
    <p>Age: {{ age }}</p>
    <p>Stuent ID: {{ student_id }}</p>
    <p>Course: {{ course }}</p>
    <p>Year Level: {{ year_level }}</p>
</template>