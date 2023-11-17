<template>
    <div class="task-container" data-test="todoTask" v-if="taskTrimmed !== ''">
        <div class="task"> {{ todoTask.task }} </div>
        <i class="gg-trash" @click="$emit('onDelete', todoTask.id)"></i>
    </div>
</template>
<script>
export default {
    props: {
        todoTask: {type: Object, required: true},
    },

    computed: {
        taskTrimmed() {
            return this.todoTask.task.trim()
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