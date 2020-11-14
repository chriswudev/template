import { shallowMount } from '@vue/test-utils'
console.log(9999999999)
global['define'] = () => null;
import Users from '@/pages/users.vue'

describe('users.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Users)
    expect(wrapper.vm).toBeTruthy()
  })
})
