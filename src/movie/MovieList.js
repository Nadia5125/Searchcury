import React from 'react';
import Movie from './Movie';

//for mivie info
const MovieList = (props) => {
    return (
        <div className="row" style={{position: 'relative', width: '80%', left: '200px'}}>      
                {
                props.movies.map((movie, i) => {
                    return (
                        <Movie key={movie.id} viewMovieInfo={props.viewMovieInfo} movieId={movie.id} title={movie.title} overview={movie.overview} image={movie.poster_path} date={movie.release_date} />                    
                    )
                })
                }
        </div>
    )
}

export default MovieList;