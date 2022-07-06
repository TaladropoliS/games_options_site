import {createStore} from 'vuex'

export default createStore({
    state: {
        listaGames: [],
        opiniones: [],
    },
    getters: {},
    mutations: {
        setGames(state, payload) {
            // si ya existe la lista de juegos no hace nada para evitar que se cambien los id
            if (state.listaGames.length === 0) {
                state.listaGames = payload
                let id = {}
                for (let i in state.listaGames) {
                    let idDate = Date.now() + parseInt(Math.random() * 1000000)
                    id = {id: idDate.toString()}
                    state.listaGames[i] = Object.assign(id, state.listaGames[i])
                }
            }
            // console.log(state.listaGames)
        },
        addOpinion(state, payload) {
            // payload trae un objeto, por eso se hace un push a la lista de opiniones
            // payload = {idGame: idGame, idOpinion: idOpinion, nombre: nombre, opinion: opinion}
            state.opiniones.push(payload)
            // console.log(state.opiniones)
        },
        removeOpinion(state, payload) {
            state.opiniones = state.opiniones.filter(e => (e.idOpinion !== payload))
            // console.log(payload)
            // console.log(state.opiniones)
        },
        editOpinion(state, payload) {
            let nuevaOpinion = state.opiniones.find(e => (e.idOpinion === payload[0]))
            for (let i of state.opiniones) {
                if (nuevaOpinion.idOpinion === i.idOpinion) {
                    if (payload[1] !== '') {
                        i.nombre = payload[1]
                    }
                    if (payload[2] !== '') {
                        i.opinion = payload[2]
                    }
                }
            }
        },
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
