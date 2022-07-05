<template>
  <div class="notfound min-vh-100">
    <h1>404</h1>
    <h2>Not Found</h2>
  </div>
</template>

<script>
  export default {
    name: "NotFound"
  }
</script>

<style lang="scss" scoped>

.notfound {
  margin-top: -69px;
  padding-top: 150px;
  background:
      radial-gradient(
              110.35% 80.79% at 6% 103.92%,
              rgba(37, 169, 239, 1) 0%,
              rgba(37, 169, 239, 0) 100%
      ),
      linear-gradient(
              169.3deg,
              rgba(205, 249, 232, 1) 15%,
              rgba(205, 249, 232, 0) 46%
      ),
      radial-gradient(
              123% 73% at 107% 96%,
              rgba(255, 253, 177, 1) 20%,
              rgba(254, 228, 191, 1) 60%,
              rgba(240, 189, 208, 1) 75%,
              rgba(255, 129, 38, 0) 100%
      ),
      linear-gradient(
              0deg,
              rgba(0, 204, 131, 1) 0%,
              rgba(0, 204, 131, 1) 100%
      );
}

h1 {
  font-size: 200px;
  font-weight: bold;
}

h2 {
  font-size: 40px;
  font-weight: bold;
}
</style>