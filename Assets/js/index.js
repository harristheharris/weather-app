//targetting our form eleemetns and settinga variable 
var searchFormEl = document.querySelector('#search-form')


//event function
function handleSearchFormSubmit(event) {
    //This event is on the submit button which by default will submit the form. We however do not want the form to be submitted right away. We first need to:
    //Validate that the user inputted something in the input field
    //and if they did not we want a message to the user
    //then we need to make the call to the api using a custom link with the city name
    //and then redirect
    event.preventDefault();

    //a variable to hold the value of the input
    var searchInputVal = document.querySelector('#search-input').value;
    var whatWeatherType = document.querySelector('#what-weather-type').value;
    console.log(whatWeatherType);

    function whatWeGrabbing(searchInputVal, whatWeatherType) {
        if (!searchInputVal) {
            console.error('You need to input a city');
            return;
        }

        if (whatWeatherType == "current-weather") {

            var queryString = `./currentweather.html?q=${searchInputVal}`
            console.log(queryString);
            return queryString;
        }

        if (whatWeatherType == "5-day-weather") {
            //custom link with the city as the query
            var queryString = `./5dayweather.html?q=${searchInputVal}`;
            console.log(queryString);
            return queryString;
        }

        else {
            console.error('You need to input an option')
            return;
        }

    }



    const queryString = whatWeGrabbing(searchInputVal, whatWeatherType);
    //redirect
    location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);