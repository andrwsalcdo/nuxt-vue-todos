 import axios from 'axios'

 export async function init ({ store, redirect, isClient }) {
   if (isClient) return

   try {
      // url = a fake api created & deployed with json-server & now
     const res = await axios.get('https://api-todos.now.sh/todos')
     store.commit('init', res.data)
   } catch (error) {
     redirect('/error')
   }
 }
