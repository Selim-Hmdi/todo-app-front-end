<template>
  <div>
    <ul class="todo-list">
      <li class="items" v-for="(task, index) in todoTaskList" :key="index">
        <TodoItem
          data-test="todo-task"
          :todo-task="task"
          @on-delete="emitDeleteEvent"
          @on-drag-start="dragStartHandler"
          @on-drop="dropHandler"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import TodoItem from '@components/TodoItem.vue'

export default {
  props: {
    todoTaskList: { type: Array, required: false }
  },

  components: {
    TodoItem
  },

  methods: {
    emitDeleteEvent(taskId) {
      this.$emit('onDelete', taskId)
    },

    dragStartHandler(todoDragged) {
      this.$emit('onDragStart', todoDragged)
    },

    dropHandler(targetTodo) {
      this.$emit('onDrop', targetTodo)
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
