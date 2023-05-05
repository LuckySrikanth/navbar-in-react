import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './componets/Home/Home';
import About from "./componets/About/About"
import Header from './componets/Header/Header';
// import './App.css';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path = "/Home" element = {<Home/>} />
      <Route exact path = "/About" element={<About/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
