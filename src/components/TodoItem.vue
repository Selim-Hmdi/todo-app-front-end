<template>
  <div
    :id="'todo_' + todo.id"
    class="item-container"
    draggable="true"
    @drop="drop"
    @dragstart="dragStart"
    data-test="todo-item"
    @dragover.prevent
    @dragenter.prevent
  >
    <div class="task">{{ todo.task }}</div>
    <div class="gg-pen" @click="$emit('openEditTodoModal', todo)"></div>
    <div class="gg-trash" @click="$emit('onDelete', todo.id)"></div>
  </div>
</template>
<script>
export default {
  props: {
    todo: { type: Object, required: true }
  },

  methods: {
    dragStart() {
      this.$emit('onDragStart', this.todo)
    },

    drop() {
      this.$emit('onDrop', this.todo)
    }
  }
}
</script>
<style scoped>
.item-container {
  display: grid;
  border: 1px solid rgb(77, 77, 77);
  padding: 6px;
  grid-template-columns: 12fr 1fr 1fr;
}

.task {
  font-size: 1.4rem;
  grid-column: 1;
}

.gg-trash {
  grid-column: 3;
  margin: auto;
  cursor: pointer;
}

.gg-pen {
  grid-column: 2;
  margin: auto;
  cursor: pointer;
}
</style>
