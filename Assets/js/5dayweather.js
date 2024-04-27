var resultContentEl = document.querySelector('#result-content');
var resultTextEl = document.querySelector('#result-content')


function getParams() {
    //we need to grab the search params from the url we redirected to

    var searchParamsArr = document.location.search.split('&');

    //getting and formating the values
    var query = searchParamsArr;

    console.log(query);
    searchApi(query);
}

function searchApi(query){
    var apiKey = "2ffdf672e25a72f3635e2448e9356ebd"
    var localQueryUrl = 'https://api.openweathermap.org/data/2.5/forecast';

    localQueryUrl = `${localQueryUrl}${query}&cnt=5&appid=${apiKey}`;
    console.log(localQueryUrl);

    fetch(localQueryUrl)
        .then(function (response){
            if(!response.ok) {
                throw response.json();
            }

            return response.json();
        })
        .then(function (locRes){

            console.log(locRes);
            console.log(locRes.city.name);
            console.log(locRes.list.length);
            console.log(resultContentEl.children)
            let cityName = locRes.city.name;

            // resultTextEl.textContent = cityName;
            

            if(!locRes.list.length) {
                console.log(`no length on this array aka nothing in the array therefore no results`);
                resultContentEl.innerHTML = `<h3>that ain't no city of mine! Try again!</h3>`;

            } else {
                console.log(resultContentEl);
                // resultContentEl.textContent = ``;
                //we need to get one then all five
                //we going to loop through the children of teh resultContentEl element
                for (const child of resultContentEl.children) {

                    //creating the varriable of the current child we are looping through
                    
                    let currentChild = Array.prototype.indexOf.call(resultContentEl.children, child);

                    console.log(`This is current array #${currentChild + 1}`);

                    printResults(locRes.list[currentChild], child)
                    

                    
                }
    

            }
        })
        .catch(function (error) {
            console.error(error);
        })
}

function printResults(weatherData, currentChild){


    
    return currentChild.innerHTML = `
    
    <div>




    </div>
    
    
    `;

}

getParams();