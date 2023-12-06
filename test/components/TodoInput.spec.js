import { test, expect } from "vitest"
import { mount } from "@vue/test-utils"
import TodoInput from "@components/TodoInput.vue"

test("Add an item reset input's content and emit the added task", () => {
  const wrapper = mount(TodoInput)
  const todoInput = wrapper.find('[data-test="todo-input"]')


  todoInput.setValue('A todo item')
  wrapper.find('[data-test="add-button"]').trigger('click')

  expect(todoInput.text()).toBe('')
  expect(wrapper.emitted('addTodo')).toBeTruthy()
  expect(wrapper.emitted('addTodo')[0]).toEqual(['A todo item'])
})
