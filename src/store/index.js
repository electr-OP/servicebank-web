import { createStore } from 'vuex'
export default createStore({
  state: {
    isAuthenticated: false,
    token:'',
    phone: '',
    reference: ''
  },
  mutations: {
    initializeStore(state){
      if(localStorage.getItem('token')){
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true
      }else{
        state.isAuthenticated = false
        state.token = ''
      }
    },
    setToken(state, token){
      state.token = token
      state.isAuthenticated = false
    },
    removeToken(state){
      state.token= ''
      state.isAuthenticated = false
    }
},
  
actions: {
},
modules: {
}
})