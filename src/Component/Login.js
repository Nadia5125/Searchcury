
import React from 'react';
import {Button} from 'react-bootstrap';
// import MovieApp from '../movie/MovieApp'

const Login = (props) => {

    return (

        <div className="container text-center" style={{position: 'relative', top: '80px'}}>
            <div className="card" style={{width: '50%', height:'60px', color: 'black', padding: '20px'}}>
                <h6>Enter your username and password</h6>
            </div>
            <div style={{width: '50%'}} className="card">
                
                <form style={{margin: '50px'}}>
                    <input style={{width: '100%', height: '40px', padding: '10px'}} placeholder="User Name"></input>
                    <br></br><br></br>
                    <input style={{width: '100%', height: '40px', padding: '10px'}} type="text" placeholder="Password"></input>
                    <br></br><br></br>                 
                    <Button className="btn" style={{color: 'white', width: '100%', height: '40px', backgroundColor: 'rgba(89, 8, 109, 0.688)', borderColor: 'rgba(89, 8, 109, 0.688)'}} variant="primry" type="submit">Login</Button>
                </form>
                
            </div>         
        </div>
    );
    
};

export default Login;



