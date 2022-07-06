<template>
  <div class="opiniones">
    <h2 class="py-2 mt-2"><i class="fa-solid fa-comments"></i> Lista de Opiniones</h2>
    <div class="container">

      <div v-if="opiniones.length===0" class="alert alert-danger mt-5" role="alert">
        No hay Opiniones que mostrar.
      </div>

      <div v-else v-for="(opinion, idOpinion) in opiniones" :key="idOpinion">
        <div v-for="(game, id) in listaGames" :key="id">

          <div class="accordion mb-3" id="accordion"
               v-if="game.id===opinion.idGame">
            <div class="accordion-item">

              <h2 class="accordion-header" :id="`headingOne${opinion.idOpinion}`">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#collapseOne${opinion.idOpinion}`"
                        aria-expanded="true" aria-controls="collapseOne">
                  <span>Opinion de: <b>{{ opinion.nombre }}</b></span>&nbsp;para el JUEGO&nbsp;<b>{{ game.name }}</b>
                </button>
              </h2>

              <div :id="`collapseOne${opinion.idOpinion}`" class="accordion-collapse collapse show"
                   :aria-labelledby="`headingOne${opinion.idOpinion}`"
                   data-bs-parent="accordion">
                <div class="accordion-body text-start">
                  <b>Opinión:</b>&nbsp; {{ opinion.opinion }}
                </div>
              </div>

            </div>
          </div>


        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import {useStore} from 'vuex'
  import {computed} from "vue";

  export default {
    name: 'Opiniones',
    setup() {
      const store = useStore()
      const opiniones = computed(() => store.state.opiniones)
      const listaGames = computed(() => store.state.listaGames)
      console.log(opiniones.value.length)
      console.log(opiniones.value)
      return {listaGames, opiniones}
    }
  }

</script>
