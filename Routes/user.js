import express from 'express'
import { createMe, deleteMe, getMe, updateMe } from '../Controller/user.js';
const router = express.Router();
//crud
router.route('/').post(createMe)
router.route('/:id').get(getMe).put(updateMe).delete(deleteMe)

export default router;