import { test, expect } from "vitest"
import { mount } from "@vue/test-utils"
import TodoAppView from "@views/TodoAppView.vue"

test('Add an item', () => {
    const wrapper = mount(TodoAppView)
})