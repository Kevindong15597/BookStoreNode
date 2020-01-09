const express = require('express')
const router = express.Router()

router.get('/', (req , res)=>{
     res.render('index')
    //res.send('index hello ')

})


module.exports = router