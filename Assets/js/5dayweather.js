var resultContentEl = document.querySelector('#result-content');
var resultTextEl = document.querySelector('#result-text')


function getParams() {
    //we need to grab the search params from the url we redirected to

    var searchParamsArr = document.location.search.split('&');

    //getting and formating the values
    var query = searchParamsArr;

    console.log(query);
    searchApi(query);
}

function searchApi(query) {
    var apiKey = "2ffdf672e25a72f3635e2448e9356ebd"
    var localQueryUrl = 'https://api.openweathermap.org/data/2.5/forecast';

    //formatting the the url for the call
    localQueryUrl = `${localQueryUrl}${query}&cnt=40&appid=${apiKey}&units=imperial`;
    console.log(localQueryUrl);

    fetch(localQueryUrl)
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            }

            return response.json();
        })
        .then(function (locRes) {

            console.log(locRes);
            console.log(locRes.city.name);
            console.log(locRes.list.length);
            console.log(resultContentEl.children)
            

            // resultTextEl.textContent = cityName;

            //if there is nothing in the array then error
            if (!locRes.list.length) {
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

                    printResults(locRes, child, currentChild)



                }


            }
        })
        .catch(function (error) {
            console.error(error);
        })
}


//funciton to print the results of our call
function printResults(weatherData, child, currentChild) {
    var cityName = weatherData.city.name;
    

    //this is a bad fix but basically we get 40 "timestamps" of the weather in in a given city. WE just want the next five days. This was the easiest way to get the next five days. Not a great fix though
    let poop1 = weatherData.list[1];
    let poop2 = weatherData.list[9];
    let poop3 = weatherData.list[17];
    let poop4 = weatherData.list[25];
    let poop5 = weatherData.list[33];
    let eachDay = [poop1, poop2, poop3, poop4, poop5]

    console.log(poop1);

    let daysData = eachDay[currentChild]
    console.log(eachDay);
    // console.log(weatherData);
    // console.log(daysData);
    // console.log(daysData.main.temp);
    // console.log(daysData.weather[0].main);
    // console.log(daysData.main.humidity);
    // console.log(daysData.dt_txt);

    //intiallizng the data we want into variables
    let tempData = daysData.main.temp;
    let skyData = daysData.weather[0].main;
    let dateData = daysData.dt_txt;
    let humidData = daysData.main.humidity;
    let windSpeedData = daysData.wind.speed;
    let iconData = daysData.weather[0].icon;

    //priont time
    return child.innerHTML = `
    
    
    <div>
    
    <h4>${cityName}</h4>
    <div>${dateData}</div>
    <div>
        <p>Temparture: ${tempData} F</p>
        <p>Skies: ${skyData}</p>
        <p>Humidity: ${humidData}%</p>
        <p>Wind Speed: ${windSpeedData}</p>
        ${iconData}
    </div>
        



    </div>
    
    
    `;

}

getParams();