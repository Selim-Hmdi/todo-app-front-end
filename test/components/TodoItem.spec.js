import { test, expect } from "vitest"
import { mount } from "@vue/test-utils"
import TodoItem from '@components/TodoItem.vue'
import TodoTask from '@models/TodoTask'

test('Render element if non empty task', () => {
  const wrapper = mount(TodoItem, {
    props: {
      todoTask: new TodoTask('A task to do')
    }
  })

  expect(wrapper.find('[data-test="todoTask"]').exists()).toBe(true)
  expect(wrapper.find('[data-test="todoTask"]').text()).toBe('A task to do')
})