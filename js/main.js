const search = document.querySelector('.search');

search.addEventListener('keypress', searchMovies);

console.log(search);
function searchMovies (e){
    if (e.keyCode === 13){
        movie = search.value;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://www.omdbapi.com/?apikey=d2bb500f&t='+movie);
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4) {
                let movie = JSON.parse(xhr.responseText);
                console.log(movie);
                if (movie.Response === "True"){
                    document.getElementById('infoIsvedimas').innerHTML = "";
                    document.getElementById('pavadinimas').innerHTML = movie.Title;
                    document.getElementById('director').innerHTML = "Director: " + movie.Director;
                    document.getElementById('imdb').innerHTML = "Imdb: " + movie.imdbRating;
                    document.getElementById('type').innerHTML = "Type: " + movie.Type;
                    document.getElementById('dvd').innerHTML = "dvd: " + movie.Dvd;
                    document.getElementById('poster').innerHTML = "<img src=\"" + movie.Poster + "\">";
                }else {
                    alert("Siuo pavadinimu filmu nerasta, bandykite dar karta!");
                }
            }
        }
        xhr.send();
    }

}