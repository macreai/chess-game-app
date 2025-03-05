import './index.css';

import Board from './components/board/Board'
import { BrowserRouter, Route, Routes } from 'react-router';
import Header from './components/header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/main' element={
          <div className="grid place-content-center h-[100vh]">
            <Board />
          </div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
