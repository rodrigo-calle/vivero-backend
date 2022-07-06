const User = require('./user.model');

/**
 *Get all users 
 * @returns all users
 */
 

 async function getAllUsers(){
    const users = await User.find();
    return users;
 };

 /**
 *Get user by username
 * @returns user
 */
 

 async function getUserByUsername(username) {
    const user = await User.findOne({username});
    return user;
 };

 /**
 *Get user by id
 * @returns user
 */

 async function getUserById(id) {
    const user = await User.findById({_id: id});
    return user;
 }


  /**
 *POST  new user
 * @returns user
 */

 async function createUser(user) {
    const newUser = await User.create(user);
    return newUser;
 }

 /**
 *  UPDATE user
 *  @returns user
 */

 async function updateUser(id, data) {
    const userUpdated = User.findByIdAndUpdate(id, data);
    return userUpdated;
 }



 /**
 * DELETE user
 *  @returns user
 */


 async function deleteUser(id) {
    const user = await User.findOne(id);
    return user;
 }

 module.exports = { 
    getAllUsers,
    createUser,
    deleteUser,
    getUserById,
    getUserByUsername,
 }