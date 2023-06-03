
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './pages/List/List';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      <Routes>
        <Route path='/'>
          <Route index  element={<Home/>} />
          <Route path='login' element={<Login/>}/>
          <Route path="users">
            <Route index element={<List />} />
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
