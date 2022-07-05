import {createStore} from 'vuex'

export default createStore({
    state: {
        listaGames: [],
        opiniones: [],
    },
    getters: {},
    mutations: {
        setGames(state, payload) {
            state.listaGames = payload
        },
        addOpinion(state, payload) {
            // payload[indice, nombre, opinion]
            // console.log(payload[0])
            // console.log(payload[1])
            // console.log(payload[2])

            state.opiniones.push([payload[0], payload[1], payload[2]])
            console.log(state.opiniones)
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
        },
    },
    modules: {}
})
