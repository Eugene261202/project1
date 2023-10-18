'use strict'




const personalMovieDB = {
   count: 0,
   movies: {
   },
   actors: {},
   genres: [],
   private: false,
   start: function (){
      personalMovieDB.count = +prompt("how many films you watch?", " " );
   
      while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
         personalMovieDB.count = +prompt("how many films you watch?", " " );
      }
   },
   
   rememberMyFilms: function () {
      for (let i = 0; i < 2; i++) {

         let nameLastWatchFilm = prompt("Last watching film?", "");
         let markFilm = prompt("Your mark about film", "6.2");
         if (nameLastWatchFilm === null || markFilm === null || nameLastWatchFilm.length > 50 || markFilm.length > 50 || nameLastWatchFilm == "" || markFilm == "") {
            i -= 1;
         } else {
            personalMovieDB.movies[nameLastWatchFilm] = markFilm;
         }


      }
   },

   detectPersonalLevel: function (){
      if(personalMovieDB.count > 0 && personalMovieDB.count < 10){
         alert("junior film");
      }else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
         alert("midle film");
      }else if(personalMovieDB.count > 30 ){
         alert("senior film")
      }else{
         alert("Error!!!!")
      }
   },
   showMyDB: function (priv){
      if(priv == false){
         console.log(personalMovieDB);
      }else{
         console.log("Private acount")
      }
   },
   writeYourGenres: function(){
      let likeGenres;
    
      for(let i = 1; i <= 3; i++){
          likeGenres = prompt(`Your favorite genres number ${i}?`, '')
          if(likeGenres == null || likeGenres.trim() == ''){
            i -= 1;
            
          }else{
          personalMovieDB.genres[i-1] = likeGenres
          
          }
      }
   personalMovieDB.genres.forEach((item,index) => console.log(`like genres #${index + 1} - this ${item}`))
   },
   toggleVisibleMyDB: function(){
      personalMovieDB.private == false ? personalMovieDB.private = true : personalMovieDB.private = false;
   }
   



}

//   personalMovieDB.start()
//   personalMovieDB.rememberMyFilms();
//   personalMovieDB.detectPersonalLevel();
//   personalMovieDB.showMyDB(personalMovieDB.private)
//   personalMovieDB.writeYourGenres();
//   personalMovieDB.toggleVisibleMyDB();
   

// console.log( personalMovieDB)