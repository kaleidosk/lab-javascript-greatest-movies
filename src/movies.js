// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
  const directors = movies.map ((movie)  => {return movie.director})
  let directorUnique = []
   directors.forEach((director) => {
     if(!directorUnique.includes (director)){
      directorUnique.push (director)
      }}
      )
  return directorUnique
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
  return 0}
  const stevSpielbDramasMovies = moviesArray.filter ((movies) => {
   if (movies.director === 'Steven Spielberg' && movies.genre.includes('Drama')) {
   return movies.director
    }
   else 
   {return 0}})
return stevSpielbDramasMovies.length
}


//Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0){
  return 0}
  const sumOfScores = moviesArray.reduce ((accumulator,movie) => {
  if (movie.score !== 0 && movie.score !== undefined){ 
  return accumulator+ movie.score}
  else {return accumulator}}
,0)
const scoresAverage = sumOfScores / moviesArray.length
return parseFloat ((scoresAverage).toFixed(2))}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) { 
 const dramaMovies = moviesArray.filter ((movie) => {
 return movie.genre.includes ('Drama')
 })
dramaScoreavarage = scoresAverage (dramaMovies)
return dramaScoreavarage}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
// create a function that return an array
// using ...word to not mutate the original array and creating a new one
  const newMoviesArray = [...moviesArray ]
  newMoviesArray.sort ((amovie,bmovie) => { 
if (amovie.year>bmovie.year){
  return 1
  }
else if (amovie.year<bmovie.year) {
  return -1
  } else {
return amovie.title.localeCompare (bmovie.title)
  }})
return newMoviesArray
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newMoviesArraytitle = moviesArray.map ((movie) => movie.title)
  newMoviesArraytitle.sort ((amovie,bmovie) => amovie.localeCompare(bmovie))
  const twentyNewMoviesArraytitle = newMoviesArraytitle.slice(0,20)
return twentyNewMoviesArraytitle}

 


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}





// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
