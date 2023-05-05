import {Link} from "react-router-dom"
import logo from "./logo512.png"
import "./Header.css"

const Header = () => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="react-head">
          React
        </p>
      </div>
      <div className='home-about-container'>
        <Link to ="/Home" className="link">Home</Link>
        <Link to ="/About" className="link">About</Link>
      </div>
    </div>
  );
}

export default Header;
