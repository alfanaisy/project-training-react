import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail/MovieDetail';

function Details() {
  let { id } = useParams();

  return <MovieDetail id={id} />;
}

export default Details;
