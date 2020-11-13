"use strict";

let numberOfFilms;
console.log(numberOfFilms);

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", 10);

  while (numberOfFilms == " " || numberOfFilms == null || numberOfFilms == isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", 10);
  }

}
 start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотреных фильмов?", " ");
    const b = prompt("Насколько оцените его?", " ");

    if (a != null && b != null && a != " " && b != " " && a.length < 50) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}
 rememberMyFilms();


function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}
 detectPersonalLevel();


function showMyDB(){
  if (personalMovieDB.privat == false){
    console.log(personalMovieDB);
  }
}
showMyDB();
 function writeYourGeners(){
  for (let i = 1; i <=  3; i++){
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
 }

 writeYourGeners();