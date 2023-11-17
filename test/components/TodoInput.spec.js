import { test, expect } from "vitest"
import { mount } from "@vue/test-utils"
import TodoInput from "../../src/components/TodoInput.vue"

test("Add an item reset input's content and emit the added task", () => {
    const wrapper = mount(TodoInput)
    const todoInput = wrapper.find('input')


    todoInput.setValue('A todo item')
    wrapper.find('button').trigger('click')
    
    expect(todoInput.text()).toBe('')
    expect(wrapper.emitted('addTask')).toBeTruthy()
    expect(wrapper.emitted('addTask')[0]).toEqual(['A todo item'])
})
