import {Route, Routes} from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'

/**
 * @component App
 * @description The main application component that sets up the routing using `react-router-dom`.
 * It defines the different pages of the application and the paths that render them.
 * Includes a background styling div.
 *
 * @returns {JSX.Element} The JSX code for the main application structure and routes.
 */
const App = () => {
  return (

    <div className="relative h-full w-full">
       {/* Background styling div */}
       <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
      {/* Defines the application's routes */}
      <Routes>
        {/* Route for the home page */}
        <Route path='/' element={<HomePage/>}></Route>
        {/* Route for the create note page */}
        <Route path='/create' element={<CreatePage/>}></Route>
        {/* Route for the note detail page, with a dynamic ID parameter */}
        <Route path='/note/:id' element={<NoteDetailPage/>}></Route>
      </Routes>
    </div>

  )
}

export default App
