const express = require('express')
const { createUser, loginUserCtrl, getallUser, getaUser, deleteaUser, updateUser, blockUser, unblockUser, handleRefreshToken, logout } = require('../controllers/userCtrl')
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware')

const router = express.Router()




router.post('/register', createUser)
router.post('/login', loginUserCtrl)
router.get('/all-user', getallUser)
router.get('/refresh', handleRefreshToken)
router.get('/logout', logout)
router.get('/:id', authMiddleware, isAdmin, getaUser)
router.delete('/:id', deleteaUser)
router.put('/edit-user', authMiddleware, updateUser)
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser)
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser)



module.exports = router