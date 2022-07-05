import {createStore} from 'vuex'

export default createStore({
    state: {
        listaGames: [],
    },
    getters: {},
    mutations: {
        setGames(state, data) {
            state.listaGames = data
            console.log(data)
        }
    },
    actions: {
        async llamarJuegos({commit}) {
            try {
                const res = await fetch('games.json')
                const data = await res.json()
                commit('setGames', data)
            } catch (e) {
                console.log(e)
            }
        }
    },
    modules: {}
})
