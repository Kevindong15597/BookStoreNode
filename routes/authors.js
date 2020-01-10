const express = require('express')
const router = express.Router()
//All auhtor
router.get('/', (req , res)=>{
     res.render('authors/index')
    //res.send('index hello ')

})

//New author
router.get('/new' , (req,res)=>{
    res.render('authors/new')
})


//Create author route 
router.post('/',(req,res)=>{
    res.send('Create')
})
module.exports = router