import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';

function App() {
  let currentYear = new Date().getFullYear();
  var isloggedin = Boolean(true);
  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>Current Year: {currentYear}</p>
      {isloggedin ? <p>Welcome Back!</p> : <p>Please log in</p>}
      <Home
      title='Home Page'/>
      <About
      title='About Us' />
      <Contact
      title='Contact Us' />
    </div>
  );
}

export default App;
