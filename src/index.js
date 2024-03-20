import ('./style.css');
import {getWeather} from "./api.js";

console.log("Working");
let cityExample = prompt("Please enter a city");
console.log(await getWeather(cityExample));

