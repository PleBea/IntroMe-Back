const mysql = require('mysql')

const env = process.env

const dbconfig = ({
    host:env.DB_HOST ,
    user: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME
})

let connection;

function handleDisconnect() {
    connection = mysql.createConnection(dbconfig)

    connection.connect((err)=>{
        if(err) {
            console.log(`error in db : ${err}`)
            setTimeout(handleDisconnect, 2000)
        }
    })

    connection.on('error', (err)=>{
        console.log(`error in db : ${err}`)
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect()
        }else{
            throw err;
        }
    })
}

handleDisconnect()

module.exports=connection;