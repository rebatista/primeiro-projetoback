const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
response.json({
    nome: "Renata Batista", 
    imagem: "https://media.licdn.com/dms/image/C4D03AQGKKEuTSzbAyg/profile-displayphoto-shrink_800_800/0/1653062481092?e=1691625600&v=beta&t=h8pJpoJ7Fa4j31_t0wLWXtTJnK72RcKeRA1_XbG0OC8",
    minibio: "Estudante de dados e programação"
})
}

function mostraPorta() {
    console.log("servidor criado e rodando na porta " , porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)