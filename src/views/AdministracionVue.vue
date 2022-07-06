<template>
  <div class="administracion container">
    <h2 class="py-2 mt-2"><i class="fa-solid fa-users-gear"></i> Administración de Opiniones</h2>

    <table class="table table-striped">
      <thead>
      <tr>
        <td>#</td>
        <td>Persona</td>
        <td>Juego</td>
        <td>Opinion</td>
        <td>Acciones</td>
      </tr>
      </thead>
      <tbody>

      <tr v-for="(opinion, idOpinion) in opiniones" :key="idOpinion">
        <td>{{ idOpinion + 1 }}</td>
        <td>{{ opinion.nombre }}</td>
        <td>{{}}</td>
        <td>{{ opinion.opinion }}</td>
        <td></td>
      </tr>

      </tbody>
    </table>

  </div>
</template>

<script>
  import {useStore} from "vuex";
  import {computed} from "vue";

  export default {
    name: "AdministracionVue",
    setup() {
      const store = useStore()
      const opiniones = computed(() => store.state.opiniones)
      const listaGames = computed(() => store.state.listaGames)
      return {listaGames, opiniones}
    }
  }
</script>

<style scoped>

</style>