import { BrowserRouter, Routes, Route } from 'react-router-dom'
import User from './components/user'

function App() {

  return (
     <BrowserRouter>
      <Routes>
        <Route path='/User' element={<User/>} />
      </Routes>
     </BrowserRouter>
  )
}

export default App
