const apiKey = "7bbd05d450414bd1a2d174449240903";

export async function getWeather(cityID) {
    console.log("Searching..");
    try{
        const response = await fetch("https://api.weatherapi.com/v1/forecast.json?key=" + apiKey +  "&q=id:" + cityID);
        const data = await response.json();
        return data;

    } catch(error){
        return error;
    }
}

export async function searchCity(city) {
    console.log("Searching..");
    try{
        const response = await fetch("https://api.weatherapi.com/v1	/search.json?key=" + apiKey +  "&q=" + city);
        const data = await response.json();
        if(data.length < 1){
            alert("No city found");
        }
        return data;

    } catch(error){
        return error;
    }
}