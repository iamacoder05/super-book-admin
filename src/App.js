
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index  element={<Home/>} />
          <Route path='login' element={<Login/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
