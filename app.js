const mysql= require('mysql2')

const Connection = mysql.createConnection({    
    host:'sql10.freemysqlhosting.net',
    user:'sql10701770',
    password:'uh4Vi5Y7dZ',
    datebase:'sql10701770'                
})           
 
Connection.conect() 
           
//inserir dadas - insert into nometabela    
function inserir(lg,sn,mail){
    let sql = "insert into users set ?"
    let dados = {login:lg,senha:sn,email:mail}  
    
    connection.query(sql,dados, function(error,results,fields){
        if(error) throw error
        console.log("cadastro com sucesso")  
    })
} 

function selecionaporid(id){
    let sql = "select = fom users where id = ?"
    connection.query(sql,id, function(error,results,fields))
    if(error) throw error
    console.log ("selecionado: "+ results[0].id + "i" + results[0].login + ":" + results[0].email)
}

function selecionartudo(id){
    let sql = "delete from noors whwre id ="
}
  
connection.end()
    
