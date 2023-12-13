<template>
  <main>
    <EditTodoModal hidden id="edit-modal" class="edit-modal" @edit-todo="editTodo"></EditTodoModal>
    <TodoInput class="todo-input" @add-todo="addTodo" />
    <TodoList id="todo-list" class="todo-list" :todoList="todoList"
      @open-edit-todo-modal="openEditTodoModal"
      @on-delete="deleteTodo"
      @on-drag-start="dragStartHandler"
      @on-drop="dropHandler" />
  </main>
</template>

<script>
import TodoInput from '@components/TodoInput.vue'
import TodoList from '@components/TodoList.vue'
import TodoTask from '@models/TodoTask.js'
import EditTodoModal from '../components/EditTodoModal.vue'

export default {
  components: {
    TodoInput,
    TodoList,
    EditTodoModal,
  },
  data() {
    return {
      todoList: [], // Array<TodoTask>
      dragged: {
        todo: null,
        todoListIndex: -1,
      },
      editedTodo: null,
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
      .then((savedTodos) => {
        for (const todo of savedTodos) {
          this.todoList.push(todo)
        }
      })
      .catch((err) => console.error('Error occured during post request at /todo-task/ -> ' + err))
  },

  methods: {
    addTodo(todo) {
      if(todo.trim() === '') return

      const todoObject = new TodoTask(todo)
      fetch('http://localhost:8080/todo-task/', {
        method: 'POST',
        body: JSON.stringify(todoObject),
        mode: 'cors',
        headers: { 'Content-type': 'application/json' }
      })
        .then((response) => response.json())
        .then((id) => {
          todoObject.id = id
          this.todoList.push(todoObject)
        })
        .catch((err) =>
          console.error('Error occured during HTTP POST request at /todo-task/ : ' + err)
        )
    },

    deleteTodo(todoId) {
      fetch(`http://localhost:8080/todo-task/${todoId}`, {
        method: 'DELETE'
      })
        .then((response) => response.json())
        .then((todoRecieved) => {
          this.todoList = this.todoList.filter((todo) => todoRecieved.id !== todo.id)
        })
        .catch((err) =>
          console.error(
            'Error occured during HTTP DELETE request at url /todo-task/' + todoId + ' : ' + err
          )
        )
    },

    editTodo(newTodoTask) {
      this.todoList.find((todo) => todo.id === this.editedTodo.id).task = newTodoTask
      fetch(`http://localhost:8080/todo-task/${this.editedTodo.id}`,
        {
          method: "PUT",
          body: JSON.stringify(this.editedTodo),
          mode: 'cors',
          headers: { 'Content-type': 'application/json' }
        }
      )
        .catch((err) => {
          console.error(`Error occured during HTTP PUT request at /todo-task/${this.editedTodo.id}  failed with the following error : ${err}`)
        })
      this.closeEditTodoModal()
    },

    openEditTodoModal(todo) {
      const editModal = document.getElementById('edit-modal')
      editModal.hidden = false
      this.editedTodo = todo
    },

    closeEditTodoModal() {
      const editModal = document.getElementById('edit-modal')
      editModal.hidden = true
      this.editedTodo = null
    },



    dragStartHandler(todoDragged) {
      this.dragged.todo = todoDragged
      this.dragged.todoListIndex = this.todoList.findIndex(currentTodo => todoDragged.id === currentTodo.id)
    },

    dropHandler(targetTodo) {
      const targetIndex = this.todoList.findIndex(currentTodo => targetTodo.id === currentTodo.id)
      if(targetIndex === -1)
        console.error('Drop failed due to unexpected behavior : the target drop id was not found')

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

.edit-modal {
  width: 33%;
  height: 37%;
}

/* Toggle class when opening and closing modal to make background transparent effect | NOT USED YET */
.obscure-background {
  background-color: rgba(0, 0, 0, 0.5)
}
</style>
