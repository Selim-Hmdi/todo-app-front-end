<template>
    <div>
        <ul class="todo-list">
            <li class="items" v-for="task in todoTaskList" :key="task.id">
                <TodoItem :todo-task="task" @on-delete="emitDeleteEvent" />
            </li>            
        </ul>
    </div>
</template>
<script>
import TodoItem from './TodoItem.vue';

export default {
    props: {
        todoTaskList: {type: Array, required: false},
    },

    components: {
        TodoItem
    },

    methods: {
        emitDeleteEvent(taskId) {
            this.$emit('onDelete', taskId)
        }
    }
}
</script>
<style scoped>
.todo-list { 
    list-style: none;
    width: 33%;
}

.items {
    margin-bottom: 12px;
}
</style>