import logo from './logo.svg';
import './App.css';
import Addbooks from './component/Addbooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Searchbook from './component/Searchbook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewbook from './component/Viewbook';
function App() {
  return (
    
    <>
<BrowserRouter>

<Routes>

  <Route path="/" exact element={<Addbooks/>}/>
  <Route path="/search" exact element={<Searchbook/>}/>
  <Route path="/view" exact element={<Viewbook/>}/>
</Routes>



</BrowserRouter>
    
    </>


  );
}

export default App;
