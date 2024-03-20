const apiKey = "7bbd05d450414bd1a2d174449240903";

export async function getWeather(city) {
    console.log("Searching..");
    try{
        const response = await fetch("https://api.weatherapi.com/v1/current.json?key=" + apiKey +  "&q=" + city);
        const data = await response.json();
        return data;

    } catch(error){
        return error;
    }
}