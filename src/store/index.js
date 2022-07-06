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
            console.log(state.listaGames)
        },
        addOpinion(state, payload) {
            // // payload[idGame, idOpinion, nombre, opinion]
            state.opiniones.push(payload)
            console.log(state.opiniones)
        },
        removeOpinion(state, payload) {
            state.opiniones = state.opiniones.filter(e => (e.idOpinion !== payload))
            console.log(payload)
            console.log(state.opiniones)
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
        // cargarLocalStorageGames({commit}) {
        //     if (localStorage.getItem('localListaGames')) {
        //         const localListaGames = JSON.parse(localStorage.getItem('localListaGames'))
        //         commit('cargarJuegos', localListaGames)
        //         return
        //     }
        //     localStorage.setItem('localListaGames', JSON.stringify([]))
        // },
        // cargarLocalStorageOpiniones({commit}) {
        //     if (localStorage.getItem('localOpiniones')) {
        //         const localOpiniones = JSON.parse(localStorage.getItem('localOpiniones'))
        //         commit('cargarOpiniones', localOpiniones)
        //         return
        //     }
        //     localStorage.setItem('localOpiniones', JSON.stringify([]))
        // },
    },
    modules: {}
})
