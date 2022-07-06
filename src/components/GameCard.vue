<template>

  <div class="row justify-content-center">
    <div class="col-10 col-sm-6 col-md-4 col-lg-3 p-3 d-flex justify-content-center"
         v-for="(game, index) of listaGames" :key="index">
      <div class="card border border-secondary">
        <img :src="game.background_image" class="card-img-top" alt="game.name">
        <div class="card-body">
          <h5 class="card-title fw-bold border-bottom pb-2">{{ game.name }}</h5>
          <p class="card-text border-bottom text-start">Rating: {{ game.rating }}</p>
          <p class="card-text border-bottom text-start">Released: {{ game.released }}</p>
          <p class="card-text border-bottom text-start">Updated: {{ game.updated }}</p>

          <button class="btn btn-primary" type="button"
                  data-bs-toggle="modal" :data-bs-target="`#cardModal${index}`">
            <i class="fa-solid fa-comment-dots"></i>
            opinar
          </button>

        </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" :id="`cardModal${index}`" tabindex="-1" aria-labelledby="cardModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="cardModalLabel">
                Escribe tu opinión para el juego<br>
                <span><b>{{ game.name }} </b></span>
                <img :src="game.background_image" style="max-width: 100px;"
                     class="card-img-top img-fluid ratio-4x3 border border-secondary rounded-3 ms-3" alt="game.name">
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3 text-start">
                <label for="nombre_usuario" class="form-label text-start">Nombre (requerido)</label>
                <input v-model.trim="nombre" type="text" class="form-control" id="nombre_usuario" placeholder="nombre"
                       required>
              </div>
              <div class="mb-3 text-start">
                <label for="opinion_usuario" class="form-label text-start">Opiniones (requerido)</label>
                <textarea v-model.trim="opinion" class="form-control" id="opinion_usuario" rows="3" required></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button @click="addOpinion(game.id, nombre, opinion)" type="button" data-bs-dismiss="modal"
                      class="btn btn-primary">Guardar
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    name: "GameCard",
    props: ['listaGames'],
    data() {
      return {
        indice: '',
        nombre: '',
        opinion: '',
        idDate: '',
        modal: false,
      }
    },
    methods: {
      toggleModal() {
        this.modal = !this.modal
      },
      addOpinion(idGame, nombre, opinion) {
        if (nombre !== '' && opinion !== '') {
          this.idOpinion = Date.now() + parseInt(Math.random() * 1000000)
          this.idOpinion = this.idOpinion.toString()
          // console.log(this.idOpinion)
          let payload = {idGame: idGame, idOpinion: this.idOpinion, nombre: nombre, opinion: opinion}
          this.$store.commit('addOpinion', payload)
          this.nombre = ''
          this.opinion = ''
          this.toggleModal()
        }
      },
    },
  }
</script>

<style scoped>

</style>