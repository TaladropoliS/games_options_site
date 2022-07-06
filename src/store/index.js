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
            let id = {}
            for (let i in state.listaGames) {
                let idDate = Date.now() + parseInt(Math.random() * 1000000)
                id = {id: idDate.toString()}
                state.listaGames[i] = Object.assign(id, state.listaGames[i])
            }
            // console.log(state.listaGames)
        },
        addOpinion(state, payload) {
            // // payload[idGame, idOpinion, nombre, opinion]
            state.opiniones.push(payload)
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
