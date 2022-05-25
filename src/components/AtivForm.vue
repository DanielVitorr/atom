/<template>
    <div>
        <!-- formulário,arrumar para separar os componentes depois -->
        <form id="ativi-form"></form>
       <p>NOVA ATIVIDADE</p>
       <div>
           <div class="input-container">
             <label for="nome">Nome da Atividade:</label>  
             <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite o nome da atividade">
           </div>
            <div class="input-container">
             <label for="atribuir">Atribuir a:</label>
                <select name="colaborador" id="colaborador" v-model="colaborador">
                <option value=""></option>
                    <option value="Ayllan">Ayllan Alves</option>
                    <option value="Daniel">Daniel</option>
                    <option value="Romério">Romério</option>
                </select>
           </div>
           <div class="input-container">
             <label for="type">Tipo de atividade :</label>
                <select name="tipo" id="tipo" v-model="tipo">
                    <option value="fixa">Fixa </option>
                    <option value="temporaria">Temporária</option>
                </select>
           </div>
            <div class="input-container">
             <label for="priority">Nível de prioridade:</label>
                <select name="prioridade" id="prioridade" v-model="prioridade">
                    <option value="nivel1">Nível 1</option>
                    <option value="nivel2">Nível 2</option>
                    <option value="nivel3">Nível 3</option>
                    <option value="nivel4">Nível 4</option>
                </select>
           </div>
           <div class="input-container">
             <label for="inicio">Inicio em:</label>  
             <input type="text" id="inicio" name="inicio" v-model="inicio" placeholder="Data de início">
           </div>
            <div class="input-container">
             <label for="final">Finaliza em:</label>  
             <input type="text" id="final" name="final" v-model="final" placeholder="Data de finalização">
           </div>
            <div class="input-container">
             <label for="descricao">Descrição:</label>  
             <input type="text" id="descricao-box" name="descricao" v-model="descricao" placeholder="Descrição">
           </div>
           <div class="input-container">
               <input type="submit" class="submit-btn" value="Enviar atividade">
           </div>
       </div>
    </div>
</template>

<script>
export default {
    name:"AtivForm",
   //parei aqui no backend dos "ingredientes do video",cadastrar no db.jsonn
   data() {
        return {
            colaboradores:null,
            tipos:null,
            prioridades:null,
            nome:null,
            inicio:null,
            final:null,
            descricao:null,
            status:"Em aberto",
            msg:null
        }
    },
    // methods: {
    //     async getActivities(){
    //         const req = await fetch("http://localhost:8080/atividades")
    //     }
    // }
}
</script>

<style scoped>
   /* stilo do formulário */
   #ativi-form {
        max-width: 400px;
        margin: 0 auto;
    }
    .input-container {
        display: flex;
        flex-direction:column;
        margin-bottom: 20px; 
        max-width: 400px;
        margin-left:5%;
        padding: 10px;
        transition: 0.5s;
    }
    label {
        font-weight: bold;
        margin-bottom: 15px;
        color: #222;
        padding: 5px 10px;
        border-left: 4px solid #fcba03;
    }
    input.select{
        padding:5px 10px;
        width:300px;
    }
/* ajustar a descrição  */
    .descricao-box {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px; 
        min-width: 200px;
        min-height:150px;
        margin-left:5%;
        padding: 0;
    }
/* arrumar o botão enviar */
    .submit-btn { 
        background-color: #222;
        color:#fcba03;
        font-weight: bold;
        border: 2px solid #222;
        padding: 10px;
        font-size: 16px;
        margin:0 auto;
        cursor:pointer;
        transition:.5s;
    }
/* só ta mudando o botão no hover :( */
    .submit-btn:hover {
        background-color: transparent;
        color:#222;
    }
</style>