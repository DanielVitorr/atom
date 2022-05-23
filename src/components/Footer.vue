<template>
    <footer id="footer">
        <p>ATOM - Activity and Task Organization Management &copy; 2022</p>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
    #footer {
        height: 20px;
        font-size: 10px;
        background-color: #d0d0d080;
        border-top: 1px solid #d0d0d0;
        color: #000;
        display: flex;
        align-items: center;
        justify-content: end;
        width: 100%;
        bottom: 0;
    }

    p {
        margin: 10px;
    }
</style>