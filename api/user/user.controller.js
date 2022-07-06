const { getAllUsers, getUserById, createUser } = require('./user.service');

// GET all users

async function getAllUsersHandler (req, res) { 
    try {
        const users = await getAllUsers();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({
            error,
        })
    }
}


// GET user by id

async function getUserByIdHandler (req, res) {
    const { id } = req.params;
    try {
        const user = await getUserById(id);

        if(!user) {
            return res.status(404).json({
              message: `user with ${id} not found`
            });
        }

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({
            error,
        })
    }
}

// POST user

async function createUserHandler (req, res) {
    const dataUser = req.body;

    try {
        const user = await createUser(dataUser);

        res.status(201).json(user);
    } catch(error) {
        res.status(500).json({
            error,
        })
    }
}

module.exports = {
    createUserHandler,
    getAllUsersHandler,
    getUserByIdHandler,
}



