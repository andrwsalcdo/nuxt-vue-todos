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
import { init } from './sharedData'

export default {
  fetch: init,

  computed: {
    ...mapState({
      todos: state => state.todos
    })
  },

  methods: {

  }
}
</script>
