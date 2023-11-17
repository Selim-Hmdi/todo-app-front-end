import { test, expect } from "vitest"
import { mount } from "@vue/test-utils"
import TodoItem from '../../src/components/TodoItem.vue'
import TodoTask from '../../src/models/TodoTask'

test('Render element if non empty task', () => {
    const wrapper = mount(TodoItem, {
        props: {
            todoTask: new TodoTask('A task to do')
        }
    })  

    expect(wrapper.find('[data-test="todoTask"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="todoTask"]').text()).toBe('A task to do')
})

test('Doesn\'t render element if empty task', () => {
    const wrapper = mount(TodoItem, {
        props: {
            todoTask: new TodoTask('')
        }
    })

    expect(wrapper.find('[data-test="todoTask"]').exists()).toBe(false)

})

test('Doesn\'t render element if only whitespaces', () => {
    const wrapper = mount(TodoItem, {
        props: {
            todoTask: new TodoTask('         ')
        }
    })

    expect(wrapper.find('[data-test="todoTask"]').exists()).toBe(false)
})
