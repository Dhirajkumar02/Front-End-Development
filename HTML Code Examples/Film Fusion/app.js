const API_KEY = "ece985488c982715535011849742081f";
const imagePath = "https://image.tmdb.org/t/p/w1280";
const input = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const mainGridTitle = document.querySelector(".movies-container h1");
const mainGrid = document.querySelector(".movies-container .movies-grid");

async function getMovieBySearch(search_term) {
  const resp = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search_term}`
  );
  let respData = await resp.json();

  return respData.results;
}
async function addSearchMoviestoDOM() {
  const search_term = input.value;
  const data = await getMovieBySearch(search_term);
  mainGridTitle.innerText = "Search Results...";
  let resultArr = data.map((m) => {
    return `
        <div class="card" data-id="${m.id}">
                    <div class="img">
                        <img src="${imagePath + m.poster_path} " alt=""/>
                    </div>
                    <div class="info">
                        <h2>${m.title}</h2>
                        <div class="single-info">
                            <span>Rating :</span>
                            <span>${m.vote_average}</span>
                        </div>
                        <div class="single-info">
                            <span>Release Date :</span>
                            <span>${m.release_date}</span>
                        </div>
                    </div>
                </div> 
                `;
  });
  mainGrid.innerHTML = resultArr.join(" ");
}
btn.addEventListener("click", addSearchMoviestoDOM);
