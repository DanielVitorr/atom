<template>
    <div id="nav">
        <div class="nav-container">
          <div class="nav-links">
            <router-link to="/" id="logo-url">
              <img :src="logo" :alt="alt" id="logo">
            </router-link>
            <router-link to="/">Home</router-link> 
            <router-link to="/quadro">Qurado de Atividades</router-link>
          </div>
        </div>
        <div class="pesquisa-user-container">
          <div class="pesquisa">
            <Pesquisa />
          </div>
          <User />
        </div>
    </div>
</template>

<script>
import Pesquisa from './Pesquisa.vue';
import User from './User.vue';

export default {
    name: "Navbar",
    props: ["logo", "alt"],
    components: {
    Pesquisa,
    User
}
}
</script>

<style scoped>
  #nav {
    background-image: linear-gradient(#04bb00, #003702);
    border-bottom: 1px solid #d0d0d0;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-container {
    display: block;
  }

  .nav-links {
    display: flex;
    align-items: center;
    border-bottom: 0;
  }

  .pesquisa-user-container {
    display: flex;
  }

  #nav #logo-url {
    margin-left: 0;
    margin-bottom: 0;
  }

  #logo {
    width: 40px;
    height: 40px;
  }

  #nav a {
    color: #000;
    text-decoration: none;
    margin: 5px;
    transition: 0.5s;
  }

  #nav a:nth-child(2) {
    border-bottom: 1px solid #d0d0d0;
    border-left: 1px solid #d0d0d0;
    padding: 0 5px;
    background-image: linear-gradient(to top right, #fff, transparent);
    border-radius: 20px;
    padding: 5px 10px;
  }

  #nav a:nth-child(3) {
    border-bottom: 1px solid #d0d0d0;
    border-left: 1px solid #d0d0d0;
    padding: 0 5px;
    background-image: linear-gradient(to top right, #fff, transparent);
    border-radius: 20px;
    padding: 5px 10px;
  }

  #nav a:hover {
    color: #333;
  }
</style>