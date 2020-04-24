import React from 'react';


const About = () => {

    return (
        <div className="container" style={{position: 'relative', top: '200px'}}>
            <div className="card" style={{width: '60%', height: '50px', padding: '15px', color: 'black'}}>
                <h6>SEARCHCURY</h6>
            </div>
            <div className="card" style={{color: 'black', width: '60%', height: '150px', padding: '50px', }}>                
                <p>Searchury is a Search app for movies. The user will be able to search for any movies that they are interested in and in different types of genres.</p>
            </div>

        </div>
    );
};

export default About;