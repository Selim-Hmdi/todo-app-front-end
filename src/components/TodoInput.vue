<template>
  <div>
    <input
      class="input"
      data-test="todo-input"
      v-model="todoInput"
      type="text"
      name="todo-input"
      id="todo-input"
    />
    <button class="add-button" data-test="add-button" @click.prevent="addTodo">
      Add a task
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todoInput: ''
    }
  },
  methods: {
    addTodo() {
      this.$emit('addTodo', this.todoInput)
      this.todoInput = ''
    }
  }
}
</script>
<style scoped>
.input {
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
