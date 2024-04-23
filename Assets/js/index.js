//targetting our form eleemetns and settinga variable 
var searchFormEl = document.querySelector('#search-form')


//event function
function handleSearchFormSubmit(event){
    //This event is on the submit button which by default will submit the form. We however do not want the form to be submitted right away. We first need to:
    //Validate that the user inputted a city in the input field
        //and if they did not we want a message to the user
    //then we need to make the call to the api using a custom link wit
    event.preventDefault();

    var searchInputVal = document.querySelector('#search-input').value;

    if (!searchInputVal){
        console.error('You need to input a city');
        return;
    }

    var queryString = `./5dayweather.html?q=${searchInputVal}`;

    locaction.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);