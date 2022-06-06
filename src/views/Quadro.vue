<template>
  <div class="main-container">
    <AreaTrabalho />
    <FormQuadro />
  </div>
</template>

<script>
import FormQuadro from '../components/Bloco-Atividades/FormQuadro.vue'
import AreaTrabalho from '@/components/Bloco-Atividades/AreaTrabalho.vue'

export default {
  components: {
    FormQuadro,
    AreaTrabalho
}
}
</script>

<style scoped>
  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #222;
  }
</style>