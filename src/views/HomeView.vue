<template>
  <div class="home">
    <h2 class="py-2 mt-2"><i class="fa-solid fa-list"></i> Lista de Juegos disponible</h2>
    <GameCard
        :listaGames="listaGames"
    />

  </div>
</template>

<script>
  import {useStore} from "vuex";
  import GameCard from "@/components/GameCard";
  import {computed, onMounted} from "vue";

  export default {
    name: 'HomeView',
    components: {
      GameCard
    },
    setup() {
      const store = useStore()
      let n = 0
      onMounted(() => {
        n = n + 1
        console.log(n)
        store.dispatch('llamarJuegos')
      })
      const listaGames = computed(() => store.state.listaGames)
      return {listaGames}
    }
  }
</script>
