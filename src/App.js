import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Dashbord from './Components/DashBord/Dashbord';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Blogs from './Components/Bologs/Blogs'
import Notfound from './Components/NotFound/Notfound'
import 'bootstrap/dist/css/bootstrap.min.css';
import Review from './Components/Review/Review';
import { createContext, useState } from 'react';


export const UserContext = createContext();

function App() {
  const [users,setUsers] = useState([]);
  return (

    <UserContext.Provider value={[users,setUsers]}>
      <Navbar className=""></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/dashbord' element={<Dashbord></Dashbord>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
