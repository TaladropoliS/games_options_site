<template>
  <div class="home">
    <h2 class="py-2">Lista de Juegos disponible</h2>
  </div>
</template>

<script>
// @ is an alias to /src


import {mapActions} from "vuex";

export default {
  name: 'HomeView',
  components: {},
  methods:{
    ...mapActions(['llamarJuegos'])
  },
  created() {
    this.llamarJuegos()
  }
}
</script>
