//console.log('you made it boy');

var resultContentEl = document.querySelector('#result-content');
var resultTextEl = document.querySelector('#result-text')


function getParams() {
    //we need to grab the search params from the url we redirected to

    var searchParamsArr = document.location.search.split('&');
    console.log(searchParamsArr);
    //getting and formating the values
    var query = searchParamsArr;

    console.log(query);
    searchApi(query);
}

function searchApi(query) {
    var apiKey = "2ffdf672e25a72f3635e2448e9356ebd"
    var localQueryUrl = 'https://api.openweathermap.org/data/2.5/weather';

    localQueryUrl = `${localQueryUrl}${query}&cnt=1&appid=${apiKey}&units=imperial`;
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
            console.log(locRes.name);
            console.log(resultContentEl.children)
            let cityName = locRes.name;

            // resultTextEl.textContent = cityName;


            if (!locRes) {
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
                    console.log(locRes);
                    printResults(locRes, child, currentChild)



                }


            }
        })
        .catch(function (error) {
            console.error(error);
        })
}

function printResults(weatherData, child, currentChild) {

    let daysData = weatherData;
    
    // console.log(weatherData);
    console.log(daysData);
    // console.log(daysData.main.temp);
    // console.log(daysData.weather[0].main);
    // console.log(daysData.main.humidity);
    // console.log(daysData.dt_txt);
    let cityName = daysData.name;
    let tempData = daysData.main.temp;
    let skyData = daysData.weather[0].main; 
    let humidData = daysData.main.humidity;
    let windSpeedData = daysData.wind.speed;
    let iconData = daysData.weather[0].icon;


    //print results to our html file
    return child.innerHTML = `
    
    <div>

    <h4>${cityName}</h4>
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