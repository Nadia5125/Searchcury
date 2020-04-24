import React from 'react';
import '../App.css';
// import'./SearchBox.css';


const SearchBox = (props) => {
    return (
        <div className="container" style={{ paddingTop: 30, paddingBottom: 30}}>
            {/* <p style={{color: 'white'}}>TESTING</p>  */}
            <div className="row">
                <section className="search-input col s4 offset-s4">
                    <form onSubmit={props.handleSubmit} action="">
                        {/* <div className="card" style={{color: 'black', padding: '10px', width: '50%'}}>
                            <h6>Place your movie below</h6>
                        </div> */}
                        <div class="input-field text-center">
                            <input style={{width: '50%', height: '35px', padding: '10px'}} placeholder="Search movie here" onChange={props.handleChange} id="first_name2" type="text" class="validate" />   
                                                    
                        </div>  
                    </form>
                </section>                
            </div>
        </div>
        
    )
}

export default SearchBox;