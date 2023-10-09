<template>
    <div>
        <input class="task-todo-input" v-model="taskTodoInput" type="text" name="task-todo-input" id="todo-input">
        <button class="add-button" @click="addTask">Add a task</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            taskTodoInput: ''
        }
    },

    methods: {
      addTask() {
        this.$emit('addTask', this.taskTodoInput)
        this.taskTodoInput = ''
      }  
    },
}
</script>
<style scoped>
.task-todo-input {
    border: none;
    border: 2px solid var(--medium-grey);
    border-radius: 2px;
    margin-right: 8px;
    height: 2rem;
    width: 35%;
}
.add-button {
    margin-left: 8px;
    font-weight: bold;
    border-radius: 5px;
    height: 2rem;
}
</style>
