import React from 'react';
import {Route, Link, } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Signup from './Component/Signup';
import Login from './Component/Login';
// import SearchBox from './movie/SearchBox';
import Nav from './Navbar/Nav';
import MovieApp from './movie/MovieApp';

const App = () => {

  return (

    <div className="app">
      {/* <MovieApp /> */}
      <Nav /> 
      
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/signup" component={Signup} />      
      <Route exact path="/login" component={Login} />
      <Route exact path="/movieApp"  component={MovieApp} />

    </div>
    
    

  )

};

export default App;











// import React from 'react';
// import {BrowserRouter, Router} from 'react-router-dom';
// // import './App.css';
// // import Home from './Home';

// const App = () => {

//   return (
    
//     <BrowserRouter>
//       <Router path="/" exact component={Home} />
//         <Router path="/home" exact component={Home} />

//         <h1>HELLO THIS IS TESTING</h1>
//     </BrowserRouter>

//   );
// };

// export default App;
