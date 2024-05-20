const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: "bob"
})
    connection.connect()
   

//Select
//module.exports = function select(d) {
const selecionar = function selected(d) {    
let sql = "select * from usuario where id = ?"
let id = d
connection.query(sql, id, function(error, results, fields){
   
    if(error) throw error 
    let user = results
    for(let i = 0; carros.length > i;i++){
        console.log(user[i].id + ":" + user[i].login + ":" + user[i].senha + ":" + user[i].email)
        return
    }   
    
})
     connection.end()
}

//Select Marca
    const selecionaruser = function selectedlogin(d) {    
        let sql = "select * from usuario where login = ?"
        let user = d
        connection.query(sql, usuario, function(error, results, fields){
           
            if(error) throw error 
            let users = results
            for(let i = 0; carros.length > i;i++){
                console.log(users[i].marca)
                return
            }   
            
        })
             connection.end()
        }

//Insert
const inserir = function insert(login,senha,email){
let sql = "insert into carro set ?"
let dados = {login:login,senha:senha,email:email}
connection.query(sql, dados, function(error, results, fields){
    if(error) throw error
    console.log("Salvo" + results.insertId)
})
    connection.end()
}

//Atualizer
const atualizar = function update(cod,login,senha,email){
let sql = "update usuario set ? where id = ?"
let dados = {id:cod,login:login,senha:senha,email:email}
let id = dados.id
connection.query(sql,[dados,id], function(error,results,fields){
    if(error) throw error
    console.log("Atualizado: " + results.affectedRows)
})
    connection.end()
}

//Apagar
const apagar = function del(cod){
let sql = "delete from usuario where id = ?"
let id = cod
connection.query(sql,id, function(error,results,fields){
    if(error) throw error
    console.log("Apadado com sucesso")
})
    connection.end()
}

exports.selecionar = selecionar
exports.selecionaruser = selecionarMarca
exports.inserir = inserir
exports.atualizar = atualizar
exports.apagar = apagar
