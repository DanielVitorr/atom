<template>
    <div class="add-container"> 
        <div class="button-add">
            <button>
                <span><font-awesome-icon icon="add" /> </span>
                <span>Add Novo Quadro</span>
            </button>
        </div>
    </div>
    <div class="container_favorito">
        <div class="container_torre_1">
            <div class="title_atividade">
                <h1>Favoritos</h1>
            </div>
        </div>
        <div class="container_torre_quadro">
            <ul class="bord_pages">
                <li class="bord_pages_list">
                    <a href="">
                        <div class="pages_style">
                            <span class="title_pages">Projeto X</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="main-container">
        <div class="one-container">
            <h1 class="title">Teste</h1>
            <div>
                <span class="icon"><font-awesome-icon icon="share-nodes" /></span>
                <span class="icon"><font-awesome-icon icon="add" /></span>
            </div>
        </div>
        <div class="second-container">
            <div class="quadro">
                <p class="title-quadro">Quadro Teste</p>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

    .add-container {
        justify-content: center;
        align-items: center;
        display: flex;
    }

    .button-add {
        background-color: #555;
        width: 250px;
        height: 50px;
    }

    .button-add button {
        width: 250px;
        height: 50px;
    }

    .button-add span {
        margin: 5px;
    }

    .main-container {
        min-height: 200px;
    }

    .one-container {
        background: #444;
        padding: 20px;
        margin-right: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .title {
        color: #fff;
    }

    .icon {
        margin-right: 15px;
        border: 1px solid #fff;
        padding: 10px 11px;
        border-radius: 30px;
        color: #fff;
    }

    .second-container {
        background: #666;
        padding: 80px;
    }

    .quadro {
        padding: 10px 15px;
        background: #ff5;
    }

    .container_favorito{
        border: 1px solid #444;
        background: #555;
        margin: 15px;
        box-shadow: 0 0 15px #444;
    }
</style>