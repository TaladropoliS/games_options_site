<template>
  <div class="home">
    <h2 class="py-2"><i class="fa-solid fa-list"></i> Lista de Juegos disponible</h2>
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
      onMounted(() => {
        store.dispatch('llamarJuegos')
      })
      const listaGames = computed(() => store.state.listaGames)
      return {listaGames}
    }
  }
</script>
