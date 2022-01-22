import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import BreadCrumb from './BreadCrumb';
import Grid from './Grid';
import Spinner from './Spinner';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';
import NoImage from '../images/no_image.jpg';
import API from '../API';

class Movie extends Component {
  state = {
    movie: {},
    loading: true,
    error: false
  };

  fetchMovie = async () => {
    const { movieId } = this.props.params;

    try {
      this.setState({ error: false, loading: true });

      const movie = await API.fetchMovie(movieId);
      const credits = await API.fetchCredits(movieId);
      const directors = credits.ratings.filter(
        member => member.title==='exceptional'
      );
      this.setState({
        movie: {
          ...movie,
          actors: credits.website,
          directors
        },
        loading: false
      });
    } catch (error) {
      this.setState({ error: true, loading: false });
    }
  };

  componentDidMount() {
    this.fetchMovie();
  }

  render() {
    const { movie, loading, error } = this.state;

    if (loading) return <Spinner />;
    if (error) return <div>Something went wrong...</div>;

    return (
      <>
        <BreadCrumb movieTitle={movie.original_title} />
        <MovieInfo movie={movie} />
        <MovieInfoBar
          time={movie.playtime}
          budget={movie.parent_achievements_count}
          revenue={movie.youtube_count}
        />
        <Grid header='Production House'>
          {movie.developers.map(actor => (
            <Actor
              key={actor.id}
              name={actor.name}
              character={actor.games_count}
              imageUrl={
                actor.image_background
                  ? actor.image_background
                  : NoImage
              }
            />
          ))}
        </Grid>
      </>
    );
  }
}

const MovieWithParams = props => <Movie {...props} params={useParams()} />;

export default MovieWithParams;