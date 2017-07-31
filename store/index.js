import axios from 'axios'

export const state = () => ({

})

export const mutations = {
  init (state, todos) {
    state.todos = todos
  },
  add (state, todo) {
    // previous todos, new todo
    state.todos = [...state.todos, todo]
  }, 
  remove (state, todo) {
    // filter for deleted todo
    state.todos = state.todos.filter(t => t.id != todo.id)
  }
}

export const actions = {
  async add ({commit}, task) {
    const res = await axios.post('https://api-todos.now.sh/todos',
      {task, complete: false})

    commit('add', res.data)
  }, 
  async remove ({commit}, todo) {
    const res = await axios.delete(`https://api-todos.now.sh/todos/${todo.id}`)

    commit('remove', todo)
  }
}
