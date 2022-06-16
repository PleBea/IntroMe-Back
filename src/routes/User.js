const express = require('express')
const db = require('../db/conection')
const crypto = require('crypto')
const moment = require('moment')
const { router } = require('express')

router.post('/', (req,res)=>{
    const id = req.body.id;
    let tmpPw = req.body.pw;
    const pw = crypto.createHash('sha512').update(tmpPw).digest('base64')
    db.query('select * from Users where ID ? and PW = ?' , [id,pw], (err, result) => {
        if (err) throw err
        if (result.length === 0){
            res.json("로그인 실패")
            console.log("로그인 실패")
        }else{ 
            req.session.user = ID
            req.session.comment = COMMENT
            req.session.url = URLARR
        }
    })
})