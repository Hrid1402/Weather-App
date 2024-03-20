const cityButtons = document.querySelector('#cityButtons');
export function updateaCityButtonsDOM(cities){
    console.log(cities);
    clerCityButtons();
    for(let i = 0; i < cities.length; i++){
        const LIcBtn = document.createElement('li');
        const cBtn = document.createElement('button');
        cBtn.textContent = cities[i].name + " " + cities[i].region + " " + cities[i].country;
        LIcBtn.appendChild(cBtn);
        cityButtons.appendChild(LIcBtn);
    }
}
function clerCityButtons(){
    while (cityButtons.firstChild) {
        cityButtons.removeChild(cityButtons.lastChild);
    }
}