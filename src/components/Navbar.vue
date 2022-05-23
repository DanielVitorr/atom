<template>
    <div id="nav">
        <router-link to="/" id="logo-url">
            <img :src="logo" :alt="alt" id="logo">
        </router-link>
        <router-link to="/">Home</router-link> 
        <router-link to="/quadro">Qurado de Atividades</router-link>
        <Pesquisa />
    </div>
</template>

<script>
import Pesquisa from './Pesquisa.vue';

export default {
    name: "Navbar",
    props: ["logo", "alt"],
    components: {
        Pesquisa
    }
}
</script>

<style>
  #nav {
    background-color: #d0d0d080;
    border-bottom: 1px solid #d0d0d0;
    padding: 0px 20px;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  
  #nav #logo-url {
    margin-left: 0;
  }

  #logo {
    width: 30px;
    height: 30px;
  }

  #nav a {
    color: #000;
    text-decoration: none;
    margin: 10px;
    transition: 0.5s;
  }

  #nav a:hover {
    color: #333;
  }
</style>