<template>
  <main>
    <TodoInput class="todo-input" @add-task="addTask" />
    <TodoList id="todo-list" @on-delete="deleteTask" class="todo-list" :todoTaskList="todoList" @on-drag-start="dragStartHandler" @on-drop="dropHandler" />
  </main>
</template>

<script>
import TodoInput from '@components/TodoInput.vue'
import TodoList from '@components/TodoList.vue'
import TodoTask from '@models/TodoTask.js'

export default {
  components: {
    TodoInput,
    TodoList
  },
  data() {
    return {
      todoList: [], // Array<TodoTask>
      dragged: {
        todo: null,
        todoListIndex: -1,
      }
    }
  },

  beforeMount() {
    fetch('http://localhost:8080/todo-task/', {
      method: 'GET',
      mode: 'cors',
      headers: { 'Content-type': 'application/json' }
    })
      .then((response) => {
        return response.json()
      })
      .then((savedTasks) => {
        for (const task of savedTasks) {
          this.todoList.push(task)
        }
      })
      .catch((err) => console.error('Error occured during post request at /todo-task/ -> ' + err))
  },

  methods: {
    addTask(task) {
      if(task.trim() === '') return

      const taskObject = new TodoTask(task)
      fetch('http://localhost:8080/todo-task/', {
        method: 'POST',
        body: JSON.stringify(taskObject),
        mode: 'cors',
        headers: { 'Content-type': 'application/json' }
      })
        .then((response) => response.json())
        .then((id) => {
          taskObject.id = id
          this.todoList.push(taskObject)
        })
        .catch((err) =>
          console.error('Error occured during HTTP POST request at /todo-task/ : ' + err)
        )
    },

    deleteTask(taskId) {
      fetch(`http://localhost:8080/todo-task/${taskId}`, {
        method: 'DELETE'
      })
        .then((response) => response.json())
        .then((task) => {
          this.todoList = this.todoList.filter((todo) => todo.id !== task.id)
        })
        .catch((err) =>
          console.error(
            'Error occured during HTTP DELETE request at url /todo-task/' + taskId + ' : ' + err
          )
        )
    },

    dragStartHandler(todoDragged) {
      this.dragged.todo = todoDragged
      this.dragged.todoListIndex = this.todoList.findIndex(currentTodo => todoDragged.id === currentTodo.id)
    },

    dropHandler(targetTodo) {
      const targetIndex = this.todoList.findIndex(currentTodo => targetTodo.id === currentTodo.id)
      if(targetIndex === -1)
        console.error("Drop failed due to unexpected behavior : the target drop id was not found")

      this.todoList[targetIndex] = this.dragged.todo
      this.todoList[this.dragged.todoListIndex] = targetTodo
      this.todoDragged = null
    }
  }
}
</script>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.todo-input {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 16px;
}

.todo-list {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
