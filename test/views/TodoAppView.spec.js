import { test, expect } from "vitest"
import { mount } from "@vue/test-utils"
import TodoAppView from "@views/TodoAppView.vue"

test('Completing input field and clicking the add button produce a new task item', () => {
  const wrapper = mount(TodoAppView)

  const addButton = wrapper.find("[data-test='add-task-button'")
  const todoInput = wrapper.find("[data-test='todo-input'")

  addButton.setValue('First task')
  todoInput.trigger('click')

  expect(wrapper.findAll("[data-test='todoTask'").length).toBe(1)
})