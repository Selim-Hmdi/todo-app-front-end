<template>
  <div>
    <input
      class="task-todo-input"
      data-test="todo-input"
      v-model="todoTaskInput"
      type="text"
      name="todo-task-input"
      id="todo-task-input"
    />
    <button class="add-button" data-test="add-task-button" @click.prevent="addTask">
      Add a task
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todoTaskInput: ''
    }
  },
  methods: {
    addTask() {
      this.$emit('addTask', this.todoTaskInput)
      this.todoTaskInput = ''
    }
  }
}
</script>
<style scoped>
.task-todo-input {
  width: 20%;
  height: 2rem;
  border: none;
  border: 2px solid var(--medium-grey);
  border-radius: 2px;
  margin-right: 8px;
}
.add-button {
  height: 2rem;
  margin-left: 8px;
  font-weight: bold;
  border-radius: 5px;
}
</style>
