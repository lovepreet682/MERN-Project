const express = require('express')
const router = express.Router();
const UserRegister = require('../model/UserRegister_model')

router.post('/adduser', async (req, res) => {
    try {
        const newUser = await UserRegister.create({
            ...req.body
        });
        console.log('User created:', newUser);
        res.json({ success: true });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ success: false });
    }
});


router.get('/getusers', async (req, res) => {
    try {
        const allUsers = await UserRegister.find();
        res.json(allUsers);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//Make get BY ID
router.get('/getuser/:id', async (req, res) => {
    try {
        const userId = req.params.id;

        // Use findById to find a user by ID
        const user = await UserRegister.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE endpoint for deleting a user by ID
router.delete('/deleteuser/:id', async (req, res) => {
    try {
        const userId = req.params.id;

        // Check if the user with the given ID exists
        const existingUser = await UserRegister.findById(userId);
        if (!existingUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        // If the user exists, delete it
        await UserRegister.findByIdAndDelete(userId);

        res.json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

// PUT endpoint for updating a user by ID
router.put('/updateuser/:id', async (req, res) => {
    try {
        const userId = req.params.id;

        // Check if the user with the given ID exists
        const existingUser = await UserRegister.findById(userId);
        if (!existingUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Update the user using the request body
        const updatedUser = await UserRegister.findByIdAndUpdate(userId, req.body, { new: true });

        res.json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



module.exports = router