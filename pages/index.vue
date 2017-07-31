<template>
  <div>

    <form class="pa3 pa5-ns" @submit.prevent="add(task)">
      <input v-model="task" type="text">
      <input type="submit" value="Add">
    </form>

    <div class="pa3 pa5-ns"> 
        <h1 class="f4 bold center mw6">Todos</h1>      
        <ul class="list pl0 measure center">
          <li v-for="todo of todos" class="flex items-center lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30" >
            <span v-bind:class="{strike: todo.complete}" class="flex-auto"> {{todo.id}} {{ todo.task }} </span>
            <button @click="remove(todo)"><img src="https://icon.now.sh/trash" alt=""></button>  
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { init } from './sharedData'

export default {
  fetch: init,

  data () {
    return {
      task: 'some task'
    }
  },

  computed: {
    ...mapState({
      todos: state => state.todos
    })
  },

  methods: {
    ...mapActions([
      'add', 
      'remove'
    ])
  }
}
</script>
