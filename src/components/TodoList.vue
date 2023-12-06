<template>
  <div>
    <ul class="todo-list">
      <li class="items" v-for="(todo, index) in todoList" :key="index">
        <TodoItem
          data-test="todo-item"
          :todo="todo"
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
    todoList: { type: Array, required: false }
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
  width: 28%;
}

.items {
  margin-bottom: 12px;
}
</style>
