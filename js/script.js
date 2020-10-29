"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", 10);
console.log(numberOfFilms);

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt("Один из последних просмотреных фильмов?", " ");
const b = prompt("Насколько оцените его?", " ");
const c = prompt("Один из последних просмотреных фильмов?", " ");
const d = prompt("Насколько оцените его?", " ");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);