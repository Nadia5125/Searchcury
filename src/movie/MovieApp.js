import React, { Component } from 'react';
// import '../App.css';
// import Navbar from '../Navbar/Nav';
import SearchBox from './SearchBox';
import MovieList from './MovieList';
import Pagination from './Pagination';
import MovieInfo from './MovieInfo';;
// import './MovieApp.css';

class MovieApp extends Component {
  constructor(){
    super()
    this.state = {
      movies: [],
      totalResults: 0,
      searchTerm: '',
      currentPage: 1,
      currentMovie: null
    }
    this.apiKey = process.env.REACT_APP_API
  }

  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  logData = () => {
    console.log(process.env.REACT_APP_API);
  }

  handleSubmit = (e) => { 
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&language=en-US&page=${this.state.currentPage}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({ movies: [...data.results], totalResults: data.total_results})
    })
    
    e.preventDefault()
  }


  //this for the more movie list on the bottom by using numbers and next
  nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&language=en-US&page=${pageNumber}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
     this.setState({ movies: [...data.results], totalResults: data.total_results, currentPage: pageNumber})
    })
  }
   

  //this for the movie detail
  viewMovieInfo = (id) => {
    let filteredMovie;
    this.state.movies.forEach((movie, i) => {
      if(movie.id === id) {
        filteredMovie = movie
      }
    }) 

    this.setState({ currentMovie: filteredMovie })  
  }

  closeMovieInfo = () => {
    this.setState({ currentMovie: null })
  }


  //this for the pagination on the bottom
  render() {
    let numberPages = Math.floor(this.state.totalResults / 20);
    return (
        <div>
          {/* <Navbar /> */}
          
          {this.state.currentMovie == null ? <div><SearchBox handleSubmit={this.handleSubmit} handleChange={this.handleSearch}/><MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies}/></div> : <MovieInfo closeMovieInfo={this.closeMovieInfo} currentMovie={this.state.currentMovie} />}
            {this.state.totalResults > 20 && this.state.currentMovie == null ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ''}
        </div>
    );
  }
}

export default MovieApp;
