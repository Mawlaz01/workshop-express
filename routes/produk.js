var express = require('express');
var router = express.Router();

const model_produk = require('../model/model_produk');


router.get('/', async function(req, res, next){
    let rows = await model_produk.getAll();
    res.render('produk/index', {
        title : 'Data Produk',
        data: rows
    })
});

router.get('/create', async function(req, res, next){
    let rows = await model_kategori.getAll();
    res.render('produk/create', {
        title : 'Create Produk',
        data: rows
    })
});

router.post('/store', async function (req, res, next){
    try {
        let {nama_produk, harga_produk, id_kategori} = req.body;
        let Data = {
            nama_produk,
            harga_produk,
            id_kategori,
        }
        await model_produk.store(Data);
        req.flash('succes','Berhasil menyimpan data!');
        req.redirect('/produk');
    } catch {
        req.flash('error','Terjadi kesalahan pada fungsi');
        req.redirect('/produk');
    }
})

module.exports = router