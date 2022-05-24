<template>
    <div class="search">
        <input type="text" placeholder="Pesquisa">
        <font-awesome-icon icon="search" class="icon" />
    </div>
</template>

<script>

export default {
    name: "Pesquisa",
}
</script>

<style scoped>
    .search {
        position: relative;
        width: 300px;
        margin: 0 10px;
    }

    .search input {
        width: 100%;
        border-radius: 40px;
        padding: 5px 20px;
        padding-left: 35px;
        font-size: 15px;
        outline: none;
        border: 1px solid var(--cinzento2);
    }

    .search .icon {
        position: absolute;
        left: 8px;
        top: 6px;
        cursor: pointer;
    }

    .search label {
        position: relative;
        width: 100%;
    }
</style>