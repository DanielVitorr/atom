<template>
  <div class="main-container">
    <h1>DashBoard</h1>
    <div class="container-dash">
      <div class="dash-pending"></div>
      <div class="dash-execution"></div>
      <div class="dash-late"></div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
    h1 {
      text-align: center;
      margin-bottom: 20px;
      color: #222;
      border: 1px solid #d0d0d0;
      background-color: #d0d0d080;
    }

    .container-dash {
      display: flex;
      justify-content: space-evenly;
      background: #d0d0d080;
      border: 1px solid #d0d0d0;
    }

    .dash-pending {
      background: #d0d0d0;
      padding: 200px 150px;
      margin: 15px;
      border: 1px solid #d0d0d080;
      border-radius: 20px;
    }

    .dash-execution {
      background: #d0d0d0;
      padding: 200px 150px;
      margin: 15px;
      border: 1px solid #d0d0d080;
      border-radius: 20px;
    }

    .dash-late {
      background: #d0d0d0;
      padding: 200px 150px;
      margin: 15px;
      border: 1px solid #d0d0d080;
      border-radius: 20px;
    }
</style>