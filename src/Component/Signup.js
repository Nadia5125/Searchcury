import React, { Component } from 'react';
import { render } from '@testing-library/react';


// class Signup extend Component {

//   constructor(props) {
//     super(props) {
//       this.state = {
//         userId: '',
//         title: '',
//         body:''
//       }
//     }
//   }
 
// }


//  render() {
//    const {userId , title, body} = this.state
 





const Signup= (props) => {

  return (

      <div className="container text-center" style={{position: 'relative', top: '80px'}}>
        
        <div className="card" style={{width: '50%', height:'60px', color: 'black', padding: '20px'}}>
          <h6>Please compleate the signup form</h6>
        </div>
          <div style={{width: '50%'}} className="card">

              <form style={{margin: '50px'}}>                                     
                  <input style={{width: '100%', height: '40px',padding: '10px'}} type="text" placeholder="User Name"></input>
                  <br></br><br></br>                    
                  <input style={{width: '100%', height: '40px', padding: '10px'}} placeholder="Email"></input>
                  <br></br><br></br>
                  <input style={{width: '100%', height: '40px', padding: '10px'}} type="text" placeholder="Password"></input>
                  <br></br><br></br>
                  <button className="btn" style={{color: 'white', width: '100%', height: '40px', backgroundColor: 'rgba(89, 8, 109, 0.688)', borderColor: 'rgba(89, 8, 109, 0.688)'}} variant="primry" type="submit">Submit</button>
              </form>

          </div>
      </div>
  );
};

export default Signup;