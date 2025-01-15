const express=require("express")
const mongoose = require("mongoose")
const book=require("../model/book.js")
const Book = require("../model/book.js")
const router=express.Router()

// find all books (get)
router.get("/api/books", async(req, res)=>{
try{
    const books= await book.find({})
    res.send(books)
}
catch(err){
    console.error(err)
    err.status(500).send(err)
}
})

// find book by id (get)
router.get("/api/books/:bookId", async(req, res)=>{
    try{
        const id=Number(req.params.bookId)
        const bookObj = await Book.findOne({bookId:id}, req.body)
        res.send(bookObj)
    }
    catch(err){
        console.error(err)
        err.status(500).send(err)
    }
    })
// insert a new book (post)
router.post("/api/books", async(req, res)=>{
    try{
        const bookObj=new book({title:req.body.title,
            author:req.body.author,
            editor:req.body.editor,
            publication_year : req.body.publication_year,
            category:req.body.category,
            abstruct:req.body.abstruct,
         });
        const Book = await bookObj.save({})
        res.send(Book)
    }
    catch(err){
        console.error(err)
        err.status(500).send(err)
    }
    })

    // update a book (put)
router.put("/api/books/:bookId", async(req, res)=>{
    try{
        const id=Number(req.params.bookId)
        const bookObj= await book.updateOne({bookId:id}, req.body);
        res.send(bookObj)
    }
    catch(err){
        console.error(err)
    }
    })

    // delete a book (delete)
router.delete("/api/books/:bookId", async(req, res)=>{
    try{
        const id=Number(req.params.bookId)
        const bookObj = await book.deleteOne({bookId:id}, req.body)
        res.send(bookObj)
    }
    catch(err){
        console.error(err)
    }
    })

    module.exports=router;