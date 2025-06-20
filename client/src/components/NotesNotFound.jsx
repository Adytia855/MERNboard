import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

/**
 * @component NotesNotFound
 * @description A React component displayed when no notes are found.
 * It shows an icon, a message, and a call-to-action button to create a new note.
 *
 * @returns {JSX.Element} The JSX code for the "notes not found" message.
 */
const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div className="bg-primary/10 rounded-full p-8">
        <NotebookIcon className="size-10 text-primary" />
      </div>
      <h3 className="text-2xl font-bold">No notes yet</h3>
      <p className="text-base-content/70">
        Ready to organize your thoughts? Create your first note to get started on your journey.
      </p>
      <Link to="/create" className="btn btn-primary">
        Create Your First Note
      </Link>
    </div>
  );
};
export default NotesNotFound;
