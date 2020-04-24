import React from 'react';
// import './Movie.css';


const Movie = (props) => {
    const formatDate = props.date.split("-").reverse().join("/");
    

    return (
        <div className="container-fluid" style={{margin: '20px'}}>
            < div className="row-reverse">
                <div class="card-lg shadow-dark" style={{  backgroundColor:'whitesmoke', width: '30%'}}>

                    <div className="card-image">                       
                        { props.image == null ? <img className="" src={``} alt="Card image cap" style={{ width: "100%",
                            height: 360}}/> : <img className="" src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="Card image cap" style={{ width: "100%",
                            height: 360}} />}                         
                    </div>
                    
                    <div class="card-content shadow-dark" style={{height: '20px', margin: '30px'}}>                    
                        <p><a  href="#" onClick={() => props.viewMovieInfo(props.movieId)}>View Details</a></p>                  
                        
                        
                    </div>  
                    <div className="footer-card" style={{backgroundColor: 'whitesmoke', height: '80px', width: '100%'}}>
                        <div className="button" style={{position: 'relative', padding: '15px'}}>

                            {/* <a class="waves-effect waves-light btn">Delete</a> */}

                            <button className=" btn btn-secondary btn-sm m-2" onClick={() => this.deleteHandler(props.id.i)}>
                                Delete
                            </button> 
                            
                            {/* <button class=" wave-effect waves-light btn" danger onclick={() => props.deleteImage(props.movieId)}>
                                Delete
                            </button>  */}
                            
                            <button className=" btn btn-secondary btn-sm" danger onclick={() => props.likeImage(props.movieId)}>
                                Like
                            </button>     

                            {/* onClick={this.deleteHandler.bind(this.images)} > */}

                            {/* <button class=" wave-effect waves-light btn" danger onclick={() => props.deleteImage(props.movieId)}>
                                Save
                            </button>                       */}
                        </div>                        
                    </div>        
                </div>
            </div>
            <formatDate />
        </div>
    );
  
}

export default Movie;
