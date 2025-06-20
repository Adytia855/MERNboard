import {Link} from 'react-router'
import {PenSquareIcon, Trash2Icon} from 'lucide-react'
import { formatDate } from '../lib/utils'
import api from '../lib/axios'
import toast from 'react-hot-toast'

/**
 * @component NoteCard
 * @description A React component that displays a single note as a card.
 * It shows the note's title, a snippet of its content, and the creation date.
 * It also provides actions to edit (implicitly via link) and delete the note.
 *
 * @param {object} props - The component's props.
 * @param {object} props.note - The note object to display.
 * @param {string} props.note._id - The unique identifier of the note.
 * @param {string} props.note.title - The title of the note.
 * @param {string} props.note.content - The content of the note.
 * @param {string|Date} props.note.createdAt - The creation timestamp of the note.
 * @param {function} props.setNotes - A state setter function to update the list of notes after deletion.
 *
 * @returns {JSX.Element} The JSX code for a note card.
 */
const NoteCard = ({note,setNotes}) => {

  /**
   * @function handleDelete
   * @description Handles the deletion of a note.
   * It prompts the user for confirmation before proceeding.
   * On successful deletion, it updates the notes list in the parent component and shows a success toast.
   * On failure, it logs the error and shows an error toast.
   * @async
   * @param {React.MouseEvent} e - The click event object.
   * @param {string} id - The ID of the note to delete.
   * @returns {Promise<void>}
   */
  const handleDelete = async (e,id) => {
    e.preventDefault(); // Prevents the Link navigation when clicking the delete button
    if(!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      await api.delete(`/notes/${id}`)
      setNotes((prev) => prev.filter(note => note._id !== id))
      toast.success("Note deleted successfully")
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete note")
    }
  }

  return (
    // The entire card is a link to the individual note's page
    <Link to={`/note/${note._id}`} className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]">
      <div className='card-body'>
        <h3 className='card-title text-base-content'>{note.title}</h3>
        <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
        <div className='card-actions justify-between items-center mt-4'>
          <span className='text-sm text-base-content/60'>{formatDate(new Date(note.createdAt))}</span>
          <div className='flex items-center gap-1'>
            {/* Icon indicating editability, though the actual edit action is by navigating to the note */}
            <PenSquareIcon className='size-4' />
            <button className='btn btn-ghost btn-xs text-error' onClick={(e) => handleDelete(e,note._id)}>
              <Trash2Icon className='size-4'/>
            </button>
          </div>
        </div>
      </div>
    </Link>

  )
}

export default NoteCard
