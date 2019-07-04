const mysql=require('mysql'); 

class SQL{

    constructor(host, user, password, database) {
        this.connection = mysql.createConnection({
            host: host,
            user: user,
            password: password,
            database: database
        });
    }

insert(name, email, telephone, password) {
    this.connection.query(`INSERT INTO user SELECT '${name}', '${email}', '${telephone}', '${password}';`, (error, results) => {
        if (error) throw error;
    });
}
}

class Orders{
    constructor(host, user, password, database) {
        this.connection = mysql.createConnection({
            host: host,
            user: user,
            password: password,
            database: database
        });
    }
    insert(emailUser, orderNumber,orderDate){
        this.connection.query(`INSERT INTO order SELECT  '${emailUser}, '${orderNumber}', '${orderDate}';`, (error, result)=>{
            if (error) throw error;
        });
    }
}


 
module.exports=SQL,Orders