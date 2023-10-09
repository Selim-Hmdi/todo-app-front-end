import { test, expect } from "vitest"
import { mount } from "@vue/test-utils"
import TodoList from '../src/components/TodoList.vue'

test('Task count is the same as prop\'s number of task', () => {
    const todoList = mount(TodoList, {
        props: {
            tasksTodo: ['First task', 'Second task', 'Third task']
        }  
    })

    expect(todoList.findAll('li').length).toBe(3)
})

test('Tasks\'s text is rendered', () => {
    const todoList = mount(TodoList, {
        props: {
            tasksTodo: ['First task', 'Second task', 'Third task']
        } 
    })
    const tasks = todoList.findAll('li')

    const firstTask = tasks[0]
    const secondTask = tasks[1]
    const thirdTask = tasks[2]
    expect(firstTask.text()).toEqual('First task')
    expect(secondTask.text()).toEqual('Second task')
    expect(thirdTask.text()).toEqual('Third task')
})