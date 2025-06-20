import {Link} from 'react-router'
import {PlusIcon} from 'lucide-react'

/**
 * @component Navbar
 * @description A functional React component that renders the application's navigation bar.
 * It displays the application logo and a button to navigate to the note creation page.
 *
 * @returns {JSX.Element} The JSX code for the navigation bar.
 */
const Navbar = () => {
  return (

    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          <img src='/logo.svg' className="h-10 max-h-12 w-auto max-w-[160px] object-contain" alt="Application Logo" />
          <div className="flex items-center gap-4">
            <Link to={"/create"} className='btn btn-primary'>
              <PlusIcon className='size-5' />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>

  )
}

export default Navbar