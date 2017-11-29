import { Injectable } from '@angular/core';

@Injectable()
export class MovienatorService {
  movies: Object [];
  id: Number; // A unique number used to distinguish between movies.
  title: String; // Contains the movie title.
  poster: String; // A URL of a  poster image for the movie.
  synopsis: String; // A brief de  scription about the movie.
  genres: Array<String>; // The genres of a movie, such as "Adventure", "Action", "Romantic Comedy" etc.
  year: Number; // Movie's release year.
  director: String; // Director of the movie.
  actors: Array<String>; // The actors' names, using one string per each actor.
  hours: Array<String>; // The times the movie is showing. i.e. Wednesday 19:30, 22:30 would be an element of this array to indicate that you can watch a movie on wednesday at 19:30h and 22:30h.
  room: Number; // Room number of the movie. Will be a value between 1 and 5.

  constructor() { }

  getMovies() {
    return this.movies;
  }

  getMovie(id) {
    return this.movies[id];
  }

}
