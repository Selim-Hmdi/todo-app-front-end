import { test, expect } from "vitest"
import { mount } from "@vue/test-utils"
import TodoItem from '../src/components/TodoItem.vue'

test('Render element if non empty task', () => {
    const wrapper = mount(TodoItem, {
        props: {
            task: 'A task to do'
        }
    })  

    expect(wrapper.find('[data-test="task"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="task"]').text()).toBe('A task to do')
})

test('Doesn\'t render element if empty task', () => {
    const wrapper = mount(TodoItem, {
        props: {
            taskTodo: ''
        }
    })

    expect(wrapper.find('[data-test="task"]').exists()).toBe(false)

})

test('Doesn\'t render element if only whitespaces', () => {
    const wrapper = mount(TodoItem, {
        props: {
            taskTodo: '        '
        }
    })

    expect(wrapper.find('[data-test="task"]').exists()).toBe(false)
})
