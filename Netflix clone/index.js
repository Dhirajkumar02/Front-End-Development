//Consts
const apikey="7543524441a260664a97044b8e2dc621";
const apiEndpoint="https://api.themoviedb.org/3";

const apiPaths={
    fetchAllCategories: `${apiEndpoint}/genre/movie/list?api_key=${apikey}`,
    fetchMoviesList:(id) =>`${apiEndpoint}/discover/movie?api_key=${apikey}&with_genres=${id}`

}



//Boots up the app
function init(){
    fetchAndBuildAllSections();
}

function fetchAndBuildAllSections(){
    fetch(apiPaths.fetchAllCategories)
    .then(res => res.json())
    .then(res => {
        const categories = res.genres;
        if(Array.isArray(categories) && categories.length){
            categories.slice(0,2).forEach(category => {
                fetchAndbuildMovieSection(
                    apiPaths.fetchMoviesList(category.id), category);
            });
        }
        //console.table(movies);
    })
    .catch(err => console.error(err));
}

function fetchAndbuildMovieSection(fetchUrl, category){
    console.log(fetchUrl, category);
    fetch(fetchUrl)
    .then(res => res.json())
    .then(res => {
        console.table(res.results)
    })
    .catch(err=>console.error(err))
}

window.addEventListener('load',function(){
    init();
})