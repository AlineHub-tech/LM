const mongoose=require('mongoose');

const bookSchema=new mongoose.Schema({
title:{type:String,required:true,trim:true},
auther:{type:String,require:true,trim:true},
isbn:{type:String,},
published:{type:date},
description:{type:String,required:true},
copyAvailable:{type:Number,default:1,min:0},
},{timestamps:true});
module.exports=mongoose(book,'bookSchema');