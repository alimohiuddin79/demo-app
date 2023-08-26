/* eslint-disable */
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home/Home';
import Header from './components/Header';
import Wedding from "./pages/Wedding/Wedding";

function App() {

  return (
    <div
      className='
        bg-[#faebd7]
        min-h-screen
        w-screen
      '
    >
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/wedding' element={<Wedding />}/>
      </Routes>
    </div>
  )
}

export default App
