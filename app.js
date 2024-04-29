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

inserir("dennermarcos", "12345", "dennermarcos@gmail.com" )



inserir("paul","1234","paul@gmail.com") 
  
connection.end()
    
