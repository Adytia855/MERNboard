import Note from '../models/Note.js'

/**
 * @function fetchAllNote
 * @description Fetches all notes from the database, sorted by creation date in descending order.
 * Responds with a 200 status and the array of notes on success.
 * Responds with a 500 status and an error message on failure.
 * @async
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @returns {Promise<void>}
 */
export const fetchAllNote = async (req, res) => {
  try {
    const notes = await Note.find().sort({createdAt: -1})
    res.status(200).json(notes)
  } catch (error) {
    console.error("Error @ fetchNotes", error);
    res.status(500).json({message:"Internal server error"})
  }
};

/**
 * @function fetchNote
 * @description Fetches a single note by its ID from the database.
 * Responds with a 200 status and the note object if found.
 * Responds with a 404 status if the note is not found.
 * Responds with a 500 status and an error message on other failures.
 * @async
 * @param {import('express').Request} req - The Express request object, containing the note ID in `req.params.id`.
 * @param {import('express').Response} res - The Express response object.
 * @returns {Promise<void>}
 */
export const fetchNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id)
    if(!note) return res.status(404).json({message: "Notes not found!"})
    res.status(200).json(note)
  } catch (error) {
    console.error("Error @ fetchNotes", error); // Consider changing console log to "Error @ fetchNote" for consistency
    res.status(500).json({message:"Internal server error"})
  }
};

/**
 * @function addNote
 * @description Adds a new note to the database.
 * Expects `title` and `content` in the request body.
 * Responds with a 201 status and a success message on successful creation.
 * Responds with a 500 status and an error message on failure.
 * @async
 * @param {import('express').Request} req - The Express request object, containing `title` and `content` in `req.body`.
 * @param {import('express').Response} res - The Express response object.
 * @returns {Promise<void>}
 */
export const addNote = async (req, res) => {
  try {
    const {title,content} = req.body
    const newNote = new Note({title, content})
    await newNote.save()
    res.status(201).json({message: "Note created successfully"})
  } catch (error) {
    console.error("Error @ addNote", error);
    res.status(500).json({message:"Internal server error"})
  }
};

/**
 * @function updateNote
 * @description Updates an existing note by its ID.
 * Expects `title` and `content` in the request body, and the note ID in `req.params.id`.
 * Responds with a 200 status and a success message if the note is found and updated.
 * Responds with a 404 status if the note is not found.
 * Responds with a 500 status and an error message on other failures.
 * The `{new: true}` option ensures the updated document is returned.
 * @async
 * @param {import('express').Request} req - The Express request object, containing `title` and `content` in `req.body` and note ID in `req.params.id`.
 * @param {import('express').Response} res - The Express response object.
 * @returns {Promise<void>}
 */
export const updateNote = async (req, res) => {
  try {
    const {title,content} = req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content},{new: true,});
    if(!updatedNote) return res.status(404).json({message: "Note not found!"});
    res.status(200).json({message: "Note updated successfully"});
  } catch (error) {
    console.error("Error @ updateNote", error);
    res.status(500).json({message:"Internal server error"})
  }
};

/**
 * @function deleteNote
 * @description Deletes a note by its ID from the database.
 * Expects the note ID in `req.params.id`.
 * Responds with a 200 status and a success message if the note is found and deleted.
 * Responds with a 404 status if the note is not found.
 * Responds with a 500 status and an error message on other failures.
 * @async
 * @param {import('express').Request} req - The Express request object, containing the note ID in `req.params.id`.
 * @param {import('express').Response} res - The Express response object.
 * @returns {Promise<void>}
 */
export const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if(!deletedNote) return res.status(404).json({message: "Note not found!"});
    res.status(200).json({message: "Note deleted successfully"});
  } catch (error) {
    console.error("Error @ deleteNote", error);
    res.status(500).json({message:"Internal server error"})
  }
};
