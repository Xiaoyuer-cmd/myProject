import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        todos: [{
                id: 1,
                text: '...',
                done: true
            },
            {
                id: 2,
                text: '...',
                done: false
            }
        ]
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        }
    }
})
export default store;