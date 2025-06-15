import express from 'express'
import {fetchAllNote, fetchNote, addNote, updateNote, deleteNote} from '../controllers/controller.js'
import rateLimiter from "../middleware/rateLimiter.js";

const router = express.Router()

router.get('/', rateLimiter, fetchAllNote);
router.get('/:id', rateLimiter, fetchNote);
router.post('/', rateLimiter, addNote)
router.put('/:id', rateLimiter, updateNote)
router.delete('/:id', rateLimiter, deleteNote)

export default router;