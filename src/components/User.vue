<template>
    <div class="user-container">
        <font-awesome-icon icon="user" class='icon'/>
        <div class="user-config">
            <router-link to="/">Perfil</router-link>
            <router-link to="/"><font-awesome-icon icon="gear" class='icon-config'/>Configuração</router-link>
            <router-link to="/"><font-awesome-icon icon="right-from-bracket" class='icon-logout'/>Logout</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'User'
}
</script>

<style scoped>
    .icon {
        border-left: 1px solid #d0d0d0;
        border-bottom: 1px solid #d0d0d0;
        padding: 5px 6px;
        border-radius: 50%;
        background-image: linear-gradient(to top right, #fff, transparent);
        right: 0;
    }

    .user-config {
        display: none;
        position: absolute;
        top: 33px;
        right: 10px;
        border-radius: 6px;
        padding: 12px 0;
        min-width: 180px;
        background-image: linear-gradient(to top right, #d0d0d080, transparent);
        box-shadow:  #d0d0d080;
        justify-content: center;
        align-items: center;
    }

    .user-container:hover .user-config{
        display: flex;
        flex-direction: column;
    }

    .user-config a {
        margin: 5px;
        border-left: 1px solid #d0d0d0;
        border-bottom: 1px solid #d0d0d0;
        width: 90%;
        padding: 5px;
        border-radius: 30px;
        background-image: linear-gradient(to top right, #fff, transparent);
        text-decoration: none;
        text-align: center;
        color: #222;
    }

    .icon-config {
        margin-right: 5px;
    }

    .icon-logout {
        margin-right: 5px;
    }

    .user-config a:nth-child(1) {
        margin-top: 25px;
    }
</style>