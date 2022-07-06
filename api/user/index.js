const { Router } = require('express');
const { 
    getAllUsersHandler,
    createUserHandler, 
    getUserByIdHandler
} = require("./user.controller");


const router = Router();

router.get('/', getAllUsersHandler);
router.post('/', createUserHandler);
router.get('/:id', getUserByIdHandler);


module.exports = router;