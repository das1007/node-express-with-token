const pool = require ("../../config/database");

module.exports = {
    create : (data , callback) => {
        pool.query(
            "insert into register(firstname , lastname , gender , email , password , number) values(? , ? , ? , ? , ? , ?)",
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number
            ],
            (error , results , fields) =>{
                if(error){
                    callback(error);
                }
                return callback(null , results)
            }
        );
    },
    getUser : callback => {
        pool.query(
            ' select id , firstname , lastname , gender , email , password , number  from register ',
            [],
            (error , results , fields) => {
                if(error){
                     callback(error);
                }
                return callback(null , results[0]);
            }
        );
    },
    getUserByUserId : (id , callback) => {
        pool.query(
            ' select id , firstname , lastname , gender , email , password , number  from register  where id = ?',
            [id],
            (error , results , fields) => {
                if(error){
                    callback(error);
                }
                return callback(null , results[0]);
            }
        );
    },
    updateUser : (data , callback) => {
        pool.query(
            "update register set firstname = ?  , lastname = ?  , gender = ? , email = ? , password = ? , number = ? where id = ?",
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (error , results , fields) =>{
                if(error){
                     callback(error);
                }
                return callback(null , results)
            }
        );
    },
    deleteUser : (data , callback) => {
        pool.query(
            "detele from register where id = ?",
            [data.id],
            (error , results , fields) =>{
                if(error){
                    callback(error);
                }
                return callback(null , results[0])
            }
        );
    },
    getUserByUserEmail : (email ,callback) => {
        pool.query(
            'select * from register where email = ?',
            [email],
            (error , results , fields) => {
                if(error){
                  return  callback(error);
                }
                return callback(null , results[0]);
            }
        )
    }
};