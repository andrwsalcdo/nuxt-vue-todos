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
  }
}

export const actions = {
  async add ({commit}, task) {
    const res = await axios.post('https://api-todos.now.sh/todos',
      {task, complete: false})

    commit('add', res.data)
  }
}
