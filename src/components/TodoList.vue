<template>
    <div>
        <ul>
            <li v-for="(task, index) in tasksTodo" :key="index">
                <TodoItem :task="task"  />
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