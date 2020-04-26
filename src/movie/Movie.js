import React from 'react';
import {Button} from 'react-bootstrap';


class Movie extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      this.increment = this.increment.bind(this);
    };
    increment() {
        this.setState(state => ({
          count: state.count + 1
        }));
      }

      delete() {
        this.setState(state => ({
           count: state.count - 1

        }));
      }

    render() {
      return (
         
         <div className="col-md-3" style={{margin: '10px', left: '100px'}}>
            <div class="card-lg shadow-dark" style={{  backgroundColor:'whitesmoke', width: '80%'}}>
                <div className="card-image">                       
                    { this.props.image == null ? <img className="" src={``} alt="Card image cap" style={{ width: "100%", height: '50%',
                        height: 360}}/> : <img className="" src={`http://image.tmdb.org/t/p/w185${this.props.image}`} alt="Card image cap" style={{ width: "100%",
                        height: 360}} />}                         
                </div>
                <div class="card-content shadow-dark" style={{height: '20px', margin: '30px'}}>                    
                    <p><a  href="#" onClick={() => this.viewMovieInfo(this.props.movieId)}>View Details</a></p>                  
                </div>  
                <div className="footer-card" style={{backgroundColor: 'whitesmoke', height: '80px', width: '100%'}}>
                    <div className="button" style={{position: 'relative', padding: '15px'}}>                   

                        <Button className='delete btn btn-secondary btn-sm m-2' onClick={this.delete}> Delete </Button>
                        <Button className='inc btn btn-secondary btn-sm m-2' onClick={this.increment} style={{width: '90px', height: '30px'}}>
                          <p> {this.state.count} Like </p>
                        </Button>  

                    </div>                        
                </div>                 
            </div>          
        </div>
     
 
      )
    }
}
export default Movie;