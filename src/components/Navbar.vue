<template>
    <div id="nav">
        <div class="nav-container">
          <div class="nav-links">
            <router-link to="/" id="logo-url">
              <img src="../../public/img/logo-branca.png" :alt="alt" id="logo">
            </router-link>
            <router-link to="/">
              <span><font-awesome-icon icon="house" /></span>
              <span>Home</span>
            </router-link>
            <router-link to="/quadro">
              <span><font-awesome-icon icon="chalkboard" /></span>
              <span>Quadro</span>
            </router-link>
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
    props: ["alt"],
    components: {
    Pesquisa,
    User
}
}
</script>

<style scoped>
  #nav {
    background-image: linear-gradient(#292f33, #292f33, #292f33, #481db6);
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
    text-decoration: none;
    margin: 5px;
  }

  #nav span:nth-child(2) {
    position: relative;
    margin-left: 5px;
  }

  #nav a:nth-child(2) {
    border: 1px solid #fff;
    padding: 0 5px;
    border-radius: 20px;
    padding: 5px 10px;
    color: #fff;
  }

  #nav a:nth-child(3) {
    border: 1px solid #fff;
    padding: 0 5px;
    border-radius: 20px;
    padding: 5px 10px;
    color: #fff;
  }

  #nav a:nth-child(2):hover {
    color: #000;
    background: #fff;
  }

  #nav a:nth-child(3):hover {
    color: #000;
    background: #fff;
  }
</style>