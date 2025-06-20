import express from 'express'
import {fetchAllNote, fetchNote, addNote, updateNote, deleteNote} from '../controllers/controller.js'
import rateLimiter from "../middleware/rateLimiter.js";

/**
 * @const router
 * @description Express router instance for handling note-related API endpoints.
 * All routes are protected by the `rateLimiter` middleware.
 * @type {express.Router}
 */
const router = express.Router()

/**
 * @route GET /
 * @description Fetches all notes.
 * @access Public
 * @middleware rateLimiter
 * @handler fetchAllNote
 */
router.get('/', rateLimiter, fetchAllNote);

/**
 * @route GET /:id
 * @description Fetches a single note by its ID.
 * @access Public
 * @param {string} req.params.id - The ID of the note to fetch.
 * @middleware rateLimiter
 * @handler fetchNote
 */
router.get('/:id', rateLimiter, fetchNote);

/**
 * @route POST /
 * @description Adds a new note.
 * @access Public
 * @middleware rateLimiter
 * @handler addNote
 * @body {string} title - The title of the note.
 * @body {string} content - The content of the note.
 */
router.post('/', rateLimiter, addNote)

/**
 * @route PUT /:id
 * @description Updates an existing note by its ID.
 * @access Public
 * @param {string} req.params.id - The ID of the note to update.
 * @middleware rateLimiter
 * @handler updateNote
 * @body {string} [title] - The new title of the note (optional).
 * @body {string} [content] - The new content of the note (optional).
 */
router.put('/:id', rateLimiter, updateNote)

/**
 * @route DELETE /:id
 * @description Deletes a note by its ID.
 * @access Public
 * @param {string} req.params.id - The ID of the note to delete.
 * @middleware rateLimiter
 * @handler deleteNote
 */
router.delete('/:id', rateLimiter, deleteNote)

export default router;
