<template>
  <div>
   <div class="pa3 pa5-ns"> 
      <h1 class="f4 bold center mw6">Todos</h1>      
      <ul class="list pl0 measure center">
        <li v-for="todo of todos" class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30" >
          {{ todo.task }}  
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  async fetch({ store }) {
    //url = a fake api created & deployed with json-server & now
    const res = await axios.get('https://api-todos.now.sh/todos')
    store.commit('init', res.data)
  },

  computed: {
    ...mapState({
      todos: state => state.todos
    })
  },

  methods: {

  }
}
</script>
