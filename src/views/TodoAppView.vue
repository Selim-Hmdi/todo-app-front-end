<template>
    <main>
        <TodoInput 
            class="todo-input"
            :input-style="inputStyle" 
            :btn-style="btnStyle"  @add-task="addTask"/>
        <TodoList 
            class="todo-list"
            :todoTaskList="todoList" />
    </main>
</template>
 
<script>
import TodoInput from '../components/TodoInput.vue'
import TodoList from '../components/TodoList.vue'
import TodoTask from '../models/TodoTask.js' 

export default {
    components: {
        TodoInput,
        TodoList,
    },
    data() {
        return {
            todoList: [], // Array<TodoTask>
            inputStyle: ["height: 2rem", "width: 25%"],
            btnStyle: ["height: 2rem"],
        }
    },

    beforeMount() {
        fetch("http://localhost:8080/todo-task/", { 
                method: "GET", 
                mode: "cors",
                headers: {"Content-type": "application/json"}
            })
                .then(response => {
                    return response.json()
                })
                .then(savedTasks => {
                    for(const task of savedTasks) {
                        this.todoList.push(task)
                    }
                })
                .catch((err) => console.error("Error occured during post request at /todo-task/ -> " + err))
    },
        
    methods: {
        addTask(task) {
            const taskObject = new TodoTask(task)
            fetch("http://localhost:8080/todo-task/", { 
                method: "POST", 
                body: JSON.stringify(taskObject),
                mode: "cors",
                headers: {"Content-type": "application/json"}
            })
                .then(response => response.json())
                .then(id => { 
                    taskObject.id = id
                    this.todoList.push(taskObject)
                })
                .catch((err) => console.error("Error occured during post request at /todo-task/ -> " + err))
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
    width: 30%;
}
</style>