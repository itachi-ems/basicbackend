const mysql = require('mysql2');

//databse connection

const pool=mysql.createPool({
    connectionLimit:10,
    host:process.env.DBHOST,
    user:process.env.DBUSERNAME,
    password:process.env.DBPASSWORD,
    database:process.env.DBNAME,
    
});

module.exports.registerUser = (user) => {

    const sqlquery = `INSERT INTO user_table values('${user.email}','${user.password}')`;
    console.log(sqlquery);

    return new Promise((resolve,reject)=>{

        pool.query(sqlquery,(err,result)=>{

            if(err){
                return reject(err);
            }
            return resolve(result);
    
        });
    });
 
}