import React from 'react';
import {Form} from 'react-bootstrap';


//this is for the search box
const SearchBox = (props) => {
    return (
        <div className="container" style={{ paddingTop: 30, paddingBottom: 30}}>            
            <div className="row">
                <section className="search-input col s4 offset-s2">
                    <Form onSubmit={props.handleSubmit} action="">                        
                        <div class="input-field text-center">
                            <input style={{width: '50%', height: '35px', padding: '10px'}} placeholder="Search movie here" onChange={props.handleChange} id="first_name2" type="text" class="validate" />                       
                        </div>  
                    </Form>
                </section>                
            </div>
        </div>
        
    )
}

export default SearchBox;