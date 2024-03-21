import {getCityDate} from "./index.js";
const cityButtons = document.querySelector('#cityButtons');
const searchInput = document.querySelector('#searchCity');

const city_contryTXT = document.querySelector('#city_contry');
const conditionTXT = document.querySelector('#condition');
const gradesTXT = document.querySelector('#grades');
const regionTXT = document.querySelector('#region');
const dateTimeTXT = document.querySelector('#dateTime');
const humidityTXT = document.querySelector('#humidity');
const windTXT = document.querySelector('#wind');
const weatherIcon = document.querySelector('#W_icon');

let gradesOn_C = 0;




export function updateaCityButtonsDOM(cities, grades){
    clerCityButtons();
    for(let i = 0; i < cities.length; i++){
        const LIcBtn = document.createElement('li');
        const cBtn = document.createElement('button');
        cBtn.textContent = cities[i].name + " " + cities[i].region + " " + cities[i].country;
        cBtn.addEventListener('click', async ()=>{
            clerCityButtons();
            updateContentData(await getCityDate(cities[i].id), grades);
            searchInput.value = "";
        });
        LIcBtn.appendChild(cBtn);
        cityButtons.appendChild(LIcBtn);
    }
}
function clerCityButtons(){
    while (cityButtons.firstChild) {
        cityButtons.removeChild(cityButtons.lastChild);
    }
}
export function updateContentData(dataObj, gradeType){
    city_contryTXT.textContent = dataObj.location.name +", " + dataObj.location.country;
    conditionTXT.textContent = dataObj.current.condition.text;
    gradesOn_C = dataObj.current.temp_c;    ;
    if(gradeType == "c"){
        gradesTXT.textContent = gradesOn_C + "°C";
    }
    else{
        gradesTXT.textContent = ((gradesOn_C * 1.8) + 32).toFixed(1) + "°F";
    }
    
    regionTXT.textContent = dataObj.location.tz_id;
    dateTimeTXT.textContent = dataObj.location.localtime;
    humidityTXT.textContent = "Humidity: " + dataObj.current.humidity +"%";
    windTXT.textContent = "Wind: " + dataObj.current.wind_kph + "km/h";
    weatherIcon.src = dataObj.current.condition.icon;
}
export function changeActualGrades(typeOfGrade){
    if(typeOfGrade == "f"){
        gradesTXT.textContent = gradesOn_C + "°C";
    }
    else{
        gradesTXT.textContent = ((gradesOn_C * 1.8) + 32).toFixed(1) + "°F";
    }
}