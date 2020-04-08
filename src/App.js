import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="grid">          
            <nav class="navbar" id="navbarAdmin">              
              <a href="#">HOME</a>         
              <a href="#">SIGN UP</a>            
              <a href="#">LOGIN</a>
              <a href="https://www.youtube.com/watch?v=XfRY0ASZHuU">YOUR ACCOUNT</a>

            </nav>        
        </div> 
        <div className="paragraph">       
        <p>
          <p>
          <code><h1  style={{color: 'white'}}>Searchcury</h1></code>
          <br></br>
          <p>You can search a movie that interest you by clicking the link below. </p>
          <p>If you don’t have an account, please go to the sign up section and create an account.</p>
          <p>Then you can log into your new account.</p>
        </p>
        </p>  
        </div>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Learn React */}
          Search for mivies
        </a>
      </header>
    </div>
  );
}

export default App;
