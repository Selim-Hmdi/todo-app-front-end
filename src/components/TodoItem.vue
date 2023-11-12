<template>
    <div class="task-container" data-test="task" v-if="taskTrimmed !== ''">
        <div class="task"> {{ task }} </div>
        <i class="gg-trash"></i>
    </div>
</template>
<script>
export default {
    props: {
        task: {type: String, default: ""},
    },

    computed: {
        taskTrimmed() {
            return this.task.trim()
        }
    }
}
</script>
<style scoped>
.task-container {
    display: grid;
    border: 1px solid rgb(77, 77, 77);
    padding: 6px;
    grid-template-columns: 10fr 1fr;
}

.task {
    font-size: 1.4rem;
    grid-column: 1 / 1;
}

.gg-trash {
    grid-column: 2 / 2;
    margin: auto;
    cursor: pointer;
}
</style>