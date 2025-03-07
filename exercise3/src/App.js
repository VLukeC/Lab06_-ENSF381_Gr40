import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import EngineeringTopics from './EngineeringTopics.js';


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
      title='Home Page'
      description='Welcome to our website.'
      /> 
      <About 
      title='About Us'
      description='We are passionate about delivering quality experiences'
       /> 
      <Contact 
      title='Contact Us'
      description='Feel free to reach out to us via email or phone.'
      />
      <EngineeringTopics />
    </div>
  );
}

export default App;
