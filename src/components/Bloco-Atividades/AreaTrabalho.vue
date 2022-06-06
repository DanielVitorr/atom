<template>
    <div id="mySidenav" class="sidenav">
        <span id="add">Área de trabalho</span>
        <span id="add-icon"><font-awesome-icon icon="add" /></span>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

    .sidenav {
        position: fixed;
        transition: 0.3s;
        top: 95px;
        width: 230px;
        left: -180px;
        cursor: pointer;
    }

    #mySidenav span:nth-child(1) {
        transition: 0.3s;
        padding: 15px;
        text-decoration: none;
        font-size: 20px;
        color: white;
    }

    #mySidenav span:nth-child(2) {
        transition: 0.3s;
        padding: 15px;
        font-size: 20px;
        background: #481db6;
        color: white;
        border-radius: 0 5px 5px 0;
    }

    .sidenav:hover {
        left: 0;
    }

    #add {
        top: 70px;
        background-color: #481db6;
    }
</style>