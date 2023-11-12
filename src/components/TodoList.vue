<template>
    <div>
        <ul class="todo-list">
            <li class="items" v-for="task in tasksTodo" :key="task.id">
                <TodoItem :task="task.task"  />
            </li>            
        </ul>
    </div>
</template>
<script>
import TodoItem from './TodoItem.vue';

export default {
    props: {
        tasksTodo: {type: Array, required: true},
    },

    components: {
        TodoItem
    }
}
</script>
<style scoped>
.todo-list {
    list-style: none;
    flex: 1 1 auto;
}

.items {
    margin-bottom: 12px;
}
</style>