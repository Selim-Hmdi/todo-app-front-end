import { test, expect } from "vitest"
import { mount } from "@vue/test-utils"
import TodoList from '@components/TodoList.vue'
import TodoTask from "@models/TodoTask"

test('Task count is the same as prop\'s number of task', () => {
  const todoList = mount(TodoList, {
    props: {
      todoTaskList: [new TodoTask('First task'),
        new TodoTask('Second task'),
        new TodoTask('Third task')]
    }
  })

  expect(todoList.findAll('li').length).toBe(3)
})

test('Tasks\'s text is rendered', () => {
  const todoList = mount(TodoList, {
    props: {
      todoTaskList: [new TodoTask('First task'),
        new TodoTask('Second task'),
        new TodoTask('Third task')]
    }
  })
  const tasks = todoList.findAll('[data-test="todo-task"]')

  const firstTask = tasks[0]
  const secondTask = tasks[1]
  const thirdTask = tasks[2]
  expect(firstTask.text()).toEqual('First task')
  expect(secondTask.text()).toEqual('Second task')
  expect(thirdTask.text()).toEqual('Third task')
})