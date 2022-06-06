<template>
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
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

    .main-container {
        min-height: 200px;
        margin: 50px;
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