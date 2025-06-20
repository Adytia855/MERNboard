import mongoose from 'mongoose'

/**
 * @const noteSchema
 * @description Mongoose schema for a Note.
 * Defines the structure of a note document in the MongoDB database.
 *
 * @property {string} title - The title of the note. It is a required field.
 * @property {string} content - The content/body of the note. It is a required field.
 * @property {boolean} timestamps - Automatically adds `createdAt` and `updatedAt` fields to the schema.
 */
const noteSchema = new mongoose.Schema({
  title: {
    type:String,
    required: true
  },
  content: {
    type:String,
    required: true
  },
}, {timestamps: true} // Options object: `timestamps: true` automatically adds createdAt and updatedAt fields
);

/**
 * @const Note
 * @description Mongoose model for a Note.
 * This model is compiled from the `noteSchema` and provides an interface
 * for creating, querying, updating, and deleting note documents in the
 * "notes" collection (Mongoose pluralizes "Note" by default).
 *
 * @type {mongoose.Model<mongoose.Document & {title: string, content: string, createdAt?: Date, updatedAt?: Date}>}
 */
const Note = mongoose.model("Note", noteSchema)

export default Note
