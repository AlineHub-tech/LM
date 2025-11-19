const joi=require('joi');

const signupSchema=joi.object({
name:joi.String().require().optional(),
email:joi.String().require().unique().email().optional(),
password:joi.String().require().min(6).optional(),
Role:joi.String().valid('admin','user'),
});
const loginSchema=joi.object({
email:joi.String().require().unique().email().optional(),
password:joi.String().require().min(6).optional(),
});
module.exports={signupSchema,loginSchema};