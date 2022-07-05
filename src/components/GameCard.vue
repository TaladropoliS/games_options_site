<template>
  <div class="row justify-content-center">
    <div class="col-10 col-sm-6 col-md-4 col-lg-3 p-3 d-flex justify-content-center"
         v-for="(game, index) of listaGames" :key="index">
      <div class="card">
        <img :src="game.background_image" class="card-img-top" alt="game.name">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <hr>
          <p class="card-text p-0 m-0">{{game.rating}}</p>
          <hr>
          <p class="card-text p-0 m-0">{{game.released}}</p>
          <hr>
          <p class="card-text p-0 m-0">{{game.updated}}</p>
          <hr>
          <a href="#" class="btn btn-primary"><i class="fa-solid fa-comment-dots"></i>
            opinar
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GameCard",
    props: ['listaGames']
  }
</script>

<style scoped>

</style>