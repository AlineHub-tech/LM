const express=require('express');
const{protect}=require('../middlewares/auth');
const{authorizeRoles}=require('../middlewares/authorizeRoles');
const{createBook,getBook,getBooks,updateBook,deleteBook}=require('../controllers/bookController');
const route=express.Router();
route.use(protect);
route.post('/',authorizeRoles('admin'),createBook);
route.get('/',getBooks);
route.get('/:id',getBook);
route.put('/:id',authorizeRoles('admin'),updateBook);
route.post('/:id authorizeRole(admin)',deleteBook);
module.exports = router;

