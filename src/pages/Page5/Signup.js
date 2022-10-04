import './Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import Home from './Home';
import Login from './Login';
import Details from './Details';
import Errror from './Errror';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
  <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
      <Route path='*' element={<Errror />} />
    </Routes>
  </>
  );
}

export default App;
