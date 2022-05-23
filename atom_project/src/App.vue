<template>
    <div class="container">
      <InputText />
      <InputText />
      <InputText />
      <InputText />
      <InputSubmit />
    </div>
</template>

<script>
import InputText from "./components/Inputs/InputText.vue";
import InputSubmit from "./components/Inputs/InputSubmit.vue";

export default {
  name: 'App',
  components: {
    InputSubmit,
    InputText
}
}
</script>

<style>
  .container {
    display: flex;
    flex: 1;
  }
  .container input:nth-child(5) {
    padding: 5px;
    margin: 10px;
  }
  .container input:hover {
    flex: 2;
  }
</style>
