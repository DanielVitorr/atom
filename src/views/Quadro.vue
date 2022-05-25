<template>
  <div class="main-container">
    <h1>Quadro de Atividades</h1>
    <FormQuadro />
  </div>
</template>

<script>
import FormQuadro from '../components/FormQuadro.vue'

export default {
  components: {
    FormQuadro,
  }
}
</script>

<style scoped>
  h1 {
    color: #222;
  }
</style>