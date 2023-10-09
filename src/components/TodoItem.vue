<template>
    <span data-test="task" v-if="taskContentTrimmed !== ''">
        {{ task }}
    </span>
</template>
<script>
export default {
    props: {
        task: {type: String, default: ""},
    },

    computed: {
        taskContentTrimmed() {
            return this.task.trim()
        }
    }
}
</script>
<style scoped>
    
</style>