<template lang="pug">
  v-container
    v-row.justify-center
      v-col(cols='12' md='10' lg='8')
        v-card
          v-card-title Users
          v-card-text
            v-list-group
              template(v-slot:activator)
                v-list-item-avatar
                  img(:src='require("@/assets/img/user_avatar.png")')
                v-list-item-content
                  | {{ name }}
              v-container
                v-row
                  v-col(cols='12' md='6' lg='4' xl='3')
                    img(
                      :src='picture'
                      style='object-fit: contain; width: 100%;'
                    )
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import axios from 'axios'

export default defineComponent({
  setup () {
    // example setup function feel free to delete
    const name = ref<string>('John Smith')
    const picture = ref<null|string>(null)

    axios({
      url: 'https://aws.random.cat/meow',
      method: 'GET'
    }).then(res => {
      picture.value = res.data.file
    })

    return {
      name,
      picture
    }
  }
})
</script>