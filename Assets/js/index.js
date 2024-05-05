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
        //if there is not userInputValue
        if (!searchInputVal) {
            //we error, console log, and get out of this block
            console.error('You need to input a city');
            return;
        }

        //if the user is looking for the current weather of the city
        if (whatWeatherType == "current-weather") {
            //creating and formatting the request we are going to send to the api
            var queryString = `./currentweather.html?q=${searchInputVal}`
            console.log(queryString);
            return queryString;
        }
        //if the user is looking for the next five days of weather in a city
        if (whatWeatherType == "5-day-weather") {
            //custom link with the city as the query
            //creating and formatting the request we are going to send to the api
            var queryString = `./5dayweather.html?q=${searchInputVal}`;
            console.log(queryString);
            return queryString;
        }

        //if the user does not input for 5days or curretn weather
        else {
            //log, error, return
            console.error('You need to input an option')
            return;
        }

    }



    const queryString = whatWeGrabbing(searchInputVal, whatWeatherType);
    //redirect to one of our other html files
    location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);