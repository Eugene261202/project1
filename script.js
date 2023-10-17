'use strict'

let numeberOfFilms = +prompt("how many films you watch?", " " );

let nameLastWatchFilmOne = prompt("Last watching film?", "");
let markFilmOne = +prompt("Your mark about film", "6.2")
let nameLastWatchFilmTwo = prompt("Last watching film?", "");

let markFilmTwo = +prompt("Your mark about film", "6.2")

const personalMovieDB = {
   count: numeberOfFilms,
   movies: {
   },
   actors: {},
   genres: [],
   private: false,
}

personalMovieDB.movies[nameLastWatchFilmOne] = markFilmOne;
personalMovieDB.movies[nameLastWatchFilmTwo] = markFilmTwo;

console.log( personalMovieDB.movies);






