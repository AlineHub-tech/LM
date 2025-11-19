const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const userSchema=new mongoose.Schema({
name:{type:String,required:true,trim:true},
email:{type:String,required:true,unique:true,trim:true},
password:{type:String,required:true,trim:true,minLength:6},
role:{type:String,enum:['admin','user'],default:'user'},
},{timestamps:true}
);

//hashing password before save
userSchema.pre('save',async function(next){
if(! this.isModified('password'))return next();
const salt=await bcrypt.genSalt(10);
this.password=await bcrypt.hash(this.password,salt);
next();
});

//compare password
userSchema.methods.matchPassword = function(enteredPassword){
 return bcrypt.compare(enteredPassword,this.password);   
}
module.exports=mongoose(user,'userSchema');
