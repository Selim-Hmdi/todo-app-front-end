<template>
    <div>
        <input class="task-todo-input" :style="inputStyle" v-model="todoTaskInput" type="text" name="todo-task-input" id="todo-task-input">
        <button class="add-button" :style="btnStyle" @click.prevent="addTask">Add a task</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            todoTaskInput: ''
        }
    },
    props: {
        inputStyle: {required: false, type: [String, Object], default: ''}, 
        btnStyle: {required: false, type: [String, Object], default: ''}
    },  

    methods: {
      addTask() {
        this.$emit('addTask', this.todoTaskInput)
        this.todoTaskInput = ''
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
}
.add-button {
    margin-left: 8px;
    font-weight: bold;
    border-radius: 5px;
}
</style>
