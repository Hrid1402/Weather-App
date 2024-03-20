import ('./style.css');
import {getWeather,searchCity} from "./api.js";
import {updateaCityButtonsDOM} from "./DOM.js";

const searchInput = document.querySelector('#searchCity');


console.log("Working");

searchInput.addEventListener('keyup', async(e) =>{
    //todo, Maybe change to stop writing, insted of enter.
    if (e.keyCode === 13) {
        updateaCityButtonsDOM(await searchCity(searchInput.value));
    }   
});
export async function getCityDate(id){
    const weatherData = await getWeather(id);
    console.log(weatherData.current.condition.text);
    console.log(weatherData.current.condition.icon);
    console.log(weatherData.current.feelslike_c);
    console.log(weatherData.current.feelslike_f);
    console.log(weatherData.location.name);
    console.log(weatherData.location.country);
    console.log(weatherData.location.localtime);
    console.log(weatherData.location.tz_id);
    return weatherData;
}
