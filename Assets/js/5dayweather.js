var resultContentEl = document.querySelector('#result-content');

function getParams() {
    //we need to grab the search params from the url we redirected to 

    var searchParamsArr = document.location.search;

    //getting and formating the values
    var query = searchParamsArr;

    searchApi(query);
}

function searchApi(query){

    var localQueryUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=';

    localQueryUrl = `${localQueryUrl}${query}`;

    fetch(localQueryUrl)
        .then(function (response){
            if(!response.ok) {
                throw response.json();
            }

            return response.json();
        })
        .then(function (locRes){
            resultTextEl.textContent = locRes.search.query;
            console.log(locRes);

            if(!locRes.results.length) {
                console.log(`no length on this array aka nothing in the array therefore no results`);
                resultContentEl.innerHTML = `<h3>that ain't no city of mine! Try again!</h3>`;

            } else {
                resultContentEl.textContent = ``;
                //we need to get one then all five
            }
        })
        .catch(function (error) {
            console.error(error);
        })
}