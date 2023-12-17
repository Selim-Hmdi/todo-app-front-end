<template>
    <TodoAppHeader></TodoAppHeader>
    <slot></slot>
    <TodoAppFooter></TodoAppFooter>
</template>
<script>
import TodoAppHeader from './TodoAppHeader.vue'
import TodoAppFooter from './TodoAppFooter.vue'

export default {
  components: { TodoAppHeader, TodoAppFooter }
}
</script>
