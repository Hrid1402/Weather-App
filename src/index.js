import ('./style.css');
import {getWeather,searchCity} from "./api.js";
import {updateaCityButtonsDOM, updateContentData, changeActualGrades} from "./DOM.js";

const searchInput = document.querySelector('#searchCity');
const changeButton = document.querySelector('#changeButton');
const textGrades = document.querySelector('#changeButton .text');
let actualGrade = "c";
console.log("Working");
//Default contry
//london
updateContentData(await getCityDate("2801268"), actualGrade);
changeButton.addEventListener('click',()=>{
    changeActualGrades(actualGrade);
    if(actualGrade == "c"){
        actualGrade = "f";
        textGrades.textContent = "F°";
    }
    else{
        actualGrade = "c";
        textGrades.textContent = "C°";
    }
});
searchInput.addEventListener('keyup', async(e) =>{
    if (e.keyCode === 13) {
        updateaCityButtonsDOM(await searchCity(searchInput.value), actualGrade);
    }   
});
export async function getCityDate(id){
    const weatherData = await getWeather(id);
    return weatherData;
}
