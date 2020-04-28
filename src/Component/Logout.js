
import React from 'react';
import {Button} from 'react-bootstrap';
// import MovieApp from '../movie/MovieApp'

const Logout = (props) => {

    return (

        <div className="container text-center" style={{position: 'relative', top: '80px'}}>
            <div className="card" style={{width: '50%', height:'60px', color: 'black', padding: '20px'}}>
                <h6>You are Logout</h6>
            </div>
            <div style={{width: '50%'}} className="card">
                
                <form style={{margin: '50px'}}>                                
                    <Button className="btn" style={{color: 'white', width: '100%', height: '40px', backgroundColor: 'rgba(89, 8, 109, 0.688)', borderColor: 'rgba(89, 8, 109, 0.688)'}} variant="primry" type="submit">Logout</Button>
                </form>
                
            </div>         
        </div>
    );
    
};

export default Logout;
