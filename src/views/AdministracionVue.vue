<template>
  <div class="administracion container">
    <h2 class="py-2 mt-2"><i class="fa-solid fa-users-gear"></i> Administración de Opiniones</h2>
    <div class="container">

      <div v-if="opiniones.length === 0" class="alert alert-danger mt-5" role="alert">
        No hay Opiniones que Administrar.
      </div>

      <div v-else class="table-responsive">
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
            <td class="align-middle">{{ idOpinion + 1 }}</td>
            <td class="align-middle">{{ opinion.nombre }}</td>
            <td class="align-middle" v-if="game = listaGames.find(e=>(e.id===opinion.idGame))">
              {{ game.name }}
            </td>
            <td class="align-middle">{{ opinion.opinion }}</td>
            <td class="justify-content-around align-middle">
              <button @click.prevent="removeOpinion(opinion.idOpinion)" class="btn btn-outline-danger me-md-3 mb-2 mb-md-0">
                <i class="fa-solid fa-trash"></i>
              </button>
              <button type="button" class="btn btn-outline-success ms-md-3" data-bs-toggle="modal"
                      :data-bs-target="`#exampleModal${idOpinion}`">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>

              <!-- Modal -->
              <form>
                <div class="modal fade" :id="`exampleModal${idOpinion}`" tabindex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Edita la Opinión
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">

                        <div class="mb-3 text-start">
                          <label for="nombre_usuario" class="form-label text-start">Nombre</label>
                          <input v-model.trim="nuevoNombre" type="text" class="form-control" id="nombre_usuario"
                                 :placeholder="opinion.nombre" required>
                        </div>
                        <div class="mb-3 text-start">
                          <label for="opinion_usuario" class="form-label text-start">Opiniones</label>
                          <textarea v-model.trim="nuevaOpinion" class="form-control"
                                    :placeholder="opinion.opinion" required
                                    id="opinion_usuario" rows="3"></textarea>
                        </div>

                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button @click="editOpinion(opinion.idOpinion, nuevoNombre, nuevaOpinion)"
                                type="submit" data-bs-dismiss="modal"
                                class="btn btn-outline-success ms-md-3">
                          Guardar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import {useStore} from "vuex";
  import {computed} from "vue";

  export default {
    name: "AdministracionVue",
    data() {
      return {
        modal: false,
        nuevoNombre: '',
        nuevaOpinion: '',
      }
    },
    methods: {
      toggleModal() {
        this.modal = !this.modal
      },
      removeOpinion(idOpinion) {
        this.$store.commit('removeOpinion', idOpinion)
      },
      editOpinion(idOpinion, nuevoNombre, nuevaOpinion) {
        if (nuevoNombre !== '' && nuevaOpinion !== '') {
          this.$store.commit('editOpinion', [idOpinion, nuevoNombre, nuevaOpinion])
          this.nuevoNombre = ''
          this.nuevaOpinion = ''
          this.toggleModal()
        }

      },
    },
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