const mysql =require ('mysql')
const connection= mysql.createconnection({
   host: "db4free.net",
   user: "fatecd",
   password:"c29dc661",
   database: "fatec_diadema"
});

connection.connect((err) => {
    if (err) {
        console.error('erro ao conectar ao banco de dados :(', err);
        return;
    }
    console.log('conexão estabelecida ao banco de dados :)');
});

module.exports = connection;