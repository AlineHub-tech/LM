const joi=require('joi');

const createBookSchema=joi.object({
title:joi.String().require().optional(),
auther:joi.String().require().optional(),
isbn:joi.String().optional().optional(),
copyAvailable:joi.Number().integer().min(0).optional(),
description:joi.String().require().optional(),
published:joi.Date().optional(),
});
const updateBookSchema=joi.object({
title:joi.String().require().optional(),
auther:joi.String().require().optional(),
isbn:joi.String().optional().optional(),
copyAvailable:joi.Number().integer().min(0).optional(),
description:joi.String().require().optional(),
published:joi.Date().optional(),
});
module.exports={createBookSchema,updateBookSchema};
