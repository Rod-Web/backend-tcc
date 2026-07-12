import express from 'express'

import { router_cliente } from './routes/cadastrarCliente.js'

const app = express()

app.use(express.json())

app.use('/', router_cliente)


app.get('/', (req, res) => {
    res.send("Backend rodando")
})

app.listen(3300, ()=> {
    console.log("Backend rodando na porta htpps://3300/")
})