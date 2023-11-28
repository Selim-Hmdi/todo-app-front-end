<template>
  <div
    :id="'todo_' + todoTask.id"
    class="task-container"
    draggable="true"
    @drop="drop"
    @dragstart="dragStart"
    data-test="todoTask"
    @dragover.prevent
    @dragenter.prevent
  >
    <div class="task">{{ todoTask.task }}</div>
    <i class="gg-trash" @click="$emit('onDelete', todoTask.id)"></i>
  </div>
</template>
<script>
export default {
  props: {
    todoTask: { type: Object, required: true }
  },

  methods: {
    dragStart() {
      this.$emit('onDragStart', this.todoTask)
    },

    drop() {
      this.$emit('onDrop', this.todoTask)
    }
  }
}
</script>
<style scoped>
.task-container {
  display: grid;
  border: 1px solid rgb(77, 77, 77);
  padding: 6px;
  grid-template-columns: 10fr 1fr;
}

.task {
  font-size: 1.4rem;
  grid-column: 1 / 1;
}

.gg-trash {
  grid-column: 2 / 2;
  margin: auto;
  cursor: pointer;
}
</style>
