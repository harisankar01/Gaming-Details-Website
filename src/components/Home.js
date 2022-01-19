import React, { Component ,useState} from 'react';
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
// Components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';
// Image
import NoImage from '../images/no_image.jpg';
// API
import API from '../API';

const initialState = {

  results: [],
  count:''
};
class Home extends Component {
  state = {
    page: 1,
    movie:[],
    movies: initialState,
    searchTerm: '',
    isLoadingMore: false,
    loading: false,
    error: false
  };
  
  fetchMovies = async (page, searchTerm = '') => {
    try {
      this.setState({ error: false, loading: true });
      const movies = await API.fetchMovies(searchTerm, page);
      this.setState(prev => ({
        ...prev,
        movies: {
          ...movies,
          results:
            this.state.page > 1
              ? [...prev.movies.results, ...movies.results]
              : [...movies.results]
        },
        loading: false
      }));
      console.log(this.state.page);
    } catch (error) {
      this.setState({ error: true, loading: false });
    }
  };
   fetchMovie = async (searchTerm ) => {
    try {
      //  this.setState({ error: false, loading: true });
        const moviee = await API.fetchMo(searchTerm,this.state.page);
         this.setState({movie:{moviee},searchTerm:{searchTerm}})
    }catch(error){
      console.log(error);
    };}

  handleSearch = (searchTerm) =>{
     this.fetchMovie(searchTerm);
    if(!searchTerm){
       this.setState({movies:initialState,movie:[],searchTerm})}
  }

  handleLoadMore = () =>{
    this.setState({page:this.state.page+1})
    this.fetchMovies(this.state.page ,this.state.searchTerm);
  }
  componentDidMount() {
    this.fetchMovies(this.state.page)
  }

  render() {
    const { searchTerm, movies, loading, error } = this.state;

    if (error) return <div>Something went wrong ...</div>;

    return (
      <>
        {!searchTerm && movies.results[0] ? (
          <HeroImage
            image={movies.results[0].background_image}
            title={movies.results[0].name}
            text={movies.results[0].reviews_text_count}
          />
        ) : null}
        <SearchBar setSearchTerm={this.handleSearch} />
        <Grid header={searchTerm ? 'Search Result' : 'Popular Games'}>
          {this.state.searchTerm  && this.state.movie ? (
           this.state.movie.moviee.map(movie => (
            <Thumb
              key={movie.id}
              clickable
              image={
                movie.background_image
                  ? movie.background_image
                  : NoImage
              }
              movieId={this.state.searchTerm}
            />
             ))
          ):(
          movies.results.map(movie => (
            <Thumb
              key={movie.id}
              clickable
              image={
                movie.background_image
                  ? movie.background_image
                  : NoImage
              }
              movieId={movie.id}
            />
          ))
          )}
            </Grid>
        {loading && <Spinner />}
        {!loading &&(
          <Button text='Load More' callback={this.handleLoadMore} />
        )}
      </>
    );
  }
}

export default Home;