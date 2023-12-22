
import './style/body.css';
import './style/value.css';
import ContactUS from './Components/ContactUs';
import BlogPage from './Components/BlogPage';
import Doctors from './Components/Doctors';
import Home from './Components/Home';
import Timetable from './Components/Timetable';
import Gallery from './Components/Gallery';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path ='/Home' element= {<Home />}></Route>
    <Route path ='/BlogPage' element= {<BlogPage />}></Route>
    <Route path ='/Doctors' element= {<Doctors />}></Route>
    <Route path ='/ContactUS' element= {<ContactUS />}></Route>
    <Route path ='/Timetable' element= {<Timetable />}></Route>
    <Route path ='/Gallery' element= {<Gallery />}></Route>
    <Route
          index
          element={<Navigate to="/Home" replace />}
        />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
