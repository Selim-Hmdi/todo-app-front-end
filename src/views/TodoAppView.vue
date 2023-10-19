<template>
    <div>
        <TodoInput class="center" @add-task="addTask"/>
        <TodoList :tasks-todo="todoList" />
    </div>
</template>
 
<script>
import TodoInput from '../components/TodoInput.vue'
import TodoList from '../components/TodoList.vue'
import TodoTask from '../models/TodoTask.js'

export default {
    components: {
        TodoInput,
        TodoList,
    },
    data() {
        return {
            todoList: [],
        }
    },
    methods: {
        addTask(task) {
            this.todoList.push(task)
        }
    }
}
</script>