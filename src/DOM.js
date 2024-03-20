import {getCityDate} from "./index.js";
const cityButtons = document.querySelector('#cityButtons');
const searchInput = document.querySelector('#searchCity');

const city_contryTXT = document.querySelector('#city_contry');
const conditionTXT = document.querySelector('#condition');
export function updateaCityButtonsDOM(cities){
    console.log(cities);
    clerCityButtons();
    for(let i = 0; i < cities.length; i++){
        const LIcBtn = document.createElement('li');
        const cBtn = document.createElement('button');
        cBtn.textContent = cities[i].name + " " + cities[i].region + " " + cities[i].country;
        cBtn.addEventListener('click', async ()=>{
            clerCityButtons();
            updateContentData(await getCityDate(cities[i].id));
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
function updateContentData(dataObj){
    console.log(dataObj);
    //TODO END THIS PART
    city_contryTXT.textContent = dataObj.location.name +", " + dataObj.location.country;
    conditionTXT.textContent = dataObj.current.condition.text;
}