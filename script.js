'use strict'

let numeberOfFilms;
function start(){
   numeberOfFilms = +prompt("how many films you watch?", " " );

   while(numeberOfFilms == '' || numeberOfFilms == null || isNaN(numeberOfFilms)){
      numeberOfFilms = +prompt("how many films you watch?", " " );
   }
}

start();
const personalMovieDB = {
   count: numeberOfFilms,
   movies: {
   },
   actors: {},
   genres: [],
   private: false,
}


   function rememberMyFilms(){
   for(let i = 0; i < 2; i++){
   
   let nameLastWatchFilm= prompt("Last watching film?", "");
   let markFilm = prompt("Your mark about film", "6.2")
   if(nameLastWatchFilm === null || markFilm === null || nameLastWatchFilm.length > 50 || markFilm.length > 50 || nameLastWatchFilm == ""  || markFilm == ""){
      i -= 1;
   }else{
      personalMovieDB.movies[nameLastWatchFilm] = markFilm;
   }
   
   
   }
   }
   // rememberMyFilms();

  
   function detectPersonalLevel(){
      if(personalMovieDB.count > 0 && personalMovieDB.count < 10){
         alert("junior film");
      }else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
         alert("midle film");
      }else if(personalMovieDB.count > 30 ){
         alert("senior film")
      }else{
         alert("Error!!!!")
      }
   }
   // detectPersonalLevel();

   function showMyDB(priv){
      if(priv == false){
         console.log(personalMovieDB);
      }else{
         console.log("Private acount")
      }
   }
   showMyDB(personalMovieDB.private)

   function writeYourGenres(){
      let likeGenres;
    
      for(let i = 1; i <= 3; i++){
          likeGenres = prompt(`Your favorite genres number ${i}?`, '')
          personalMovieDB.genres[i-1] = likeGenres
      }
      
   }
   writeYourGenres();
   

console.log( personalMovieDB)


