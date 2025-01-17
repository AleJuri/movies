import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {fetchTopRatedMovies} from '../store/actions'



import './MovieLibrary.css'
import {getMovies} from '../store/selectors'
import MoviesList from './MoviesList'
import Powtoon from "./Powtoon.svg"

class MovieLibrary extends Component {

  static propTypes = {

  }

  componentDidMount() {
    const {fetchTopRatedMovies} = this.props
    fetchTopRatedMovies()
  }

  render() {
    const {movies} = this.props
    return (
      <div className="MovieLibrary">
        <header className="ML-header">
          <img src={Powtoon} className="ML-logo" alt="logo" />
          <h1 className="ML-title">Top Movies</h1>
        </header>
        <div className="ML-intro">
          { movies.length && <MoviesList movies={movies}/> }
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  movies: getMovies(state)
}), {fetchTopRatedMovies})(MovieLibrary)
