const express=require("express")
const mongoose = require("mongoose")
const bookSchema=new mongoose.Schema({
    title:{type:String},
    author:{type:String},
    editor:{type:String},
    category:{type:String},
    publication_year:{type:Number},
    abstruct:{type:String}
})
const Book=mongoose.model("livres",bookSchema)
const autoIncrement=require("mongoose-sequence")(mongoose)
bookSchema.plugin(autoIncrement, {inc_field:"bookId"})
module.exports=Book


