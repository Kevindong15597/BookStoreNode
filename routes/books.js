const express = require('express')
const router = express.Router()
const Book = require('../models/book')
const Author = require('../models/author')
const multer = require('multer')

const path = require('path')
const uploadPath = path.join('public',Book.coverImageBasePath)

const imageMimeTypes = ['images/jpeg', 'images/gif']
const upload = multer({
  dest: uploadPath,
  fileFilter : (req, file, callback)=>{
    callback(null,)
  }
})
//All Book
router.get('/', async (req , res)=>{
  res.send('All Books')
})

//New Book
router.get('/new' , async (req,res)=>{
  try {
    const authors = await Author.find({})
    const book = new Book()
    res.render('books/new' , {
      authors: authors,
      book: book
    })
    

  } catch  {
    res.redirect('./books')
  }
    res.render('books/new')
})


//Create Book route 
router.post('/', upload.single('cover'),  async (req,res)=>{
  const fileName = req.file != null ? req.file.filename : null  
  const book = new Book({
      title:req.body.title,
      author: req.body.author,
      publishDate: new Date(req.body.publishDate),
      pageCount: req.body.pageCount,
      coverIamgeName : fileName,
      description: req.body.description
      
    })
  try {
    const newBook = await book.save()
  } catch  {
    
  }
})
module.exports = router