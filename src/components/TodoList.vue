<template>
    <div>
        <ul>
            <li v-for="task in tasksTodo" :key="task.id">
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
    
</style>