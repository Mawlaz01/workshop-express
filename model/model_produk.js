var connection = require("../config/database");

class model_produk{
    static async getAll(){
        return new Promise((resolve, reject) => {
            connection.query(`select * from produk a right join kategori b' +
            ' on a.id_kategori=b.id_kategori ' +
            ' order by a.id_produk desc`, (err,rows) => {
                if(err){
                    reject(err);
                }else {
                    resolve(rows);
                }
            })
        })
    }
    static async store(data){
        return new Promise((resolve, reject) => {
            connection.query(`insert into produk set ?`, data, (err, result) => {
                if(err){
                    reject(err);
                }else {
                    resolve(result);
                }
            });
        })
    }
    static async getID(id){
        return new Promise((resolve, reject) => {
            connection.query(`select * from produk where id_produk = ${id}`, (err,rows) => {
                if(err){
                    reject(err);
                }else{
                    resolve(rows);
                }
            });
        })
    }
    static async updateData(id,data){
        return new Promise((resolve, reject) => {
            connection.query(`update produk set ? where id_produk = ${id}`, data, (err,rows) => {
                if(err){
                    reject(err);
                }else{
                    resolve(rows);
                }
            });
        })
    }
    static async deleteData(id){
        return new Promise((resolve, reject) => {
            connection.query(`delete from produk where id_produk = ${id}`, (err,rows) => {
                if(err){
                    reject(err);
                }else{
                    resolve(rows);
                }
            })
        })
    }
}

module.exports = model_produk;