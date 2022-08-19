const cityField= document.querySelector('form');
const card= document.querySelector('.card');
const details= document.querySelector('.details');
const time=document.querySelector('img.time');
const icon=document.querySelector('.icon img');
const updateUI=(data)=>{
    const {cityDet,weatherDet}=data;
    console.log(cityDet);
    console.log(weatherDet);
    details.innerHTML=`
    <h5 class="my-3">${cityDet.EnglishName}</h5>
    <div class="my-3">${weatherDet.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weatherDet.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`;
    
    let iconSrc=null;
    iconSrc=`img/icons/${weatherDet.WeatherIcon}.svg`;
    icon.setAttribute('src',iconSrc);

    let timeSrc=null;
    console.log(weatherDet.IsDayTime);
    timeSrc=weatherDet.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    console.log(timeSrc);
    time.setAttribute('src',timeSrc); 

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

}



const updateCity=async(cityName)=>{
    const cityDet= await getCity(cityName);
    const weatherDet=await getWeather(cityDet.Key);
    console.log(cityDet,weatherDet);
    return {cityDet,weatherDet};
}


cityField.addEventListener('submit',e=>{
    e.preventDefault();
    const cityName= cityField.city.value;
     cityField.reset();
    updateCity(cityName)
    .then(data=>updateUI(data))
    .catch(err=>console.error(err));
    localStorage.setItem('city',cityName);

    
});

if(localStorage.getItem('city')){
    updateCity(localStorage.getItem('city'))
    .then(data=>updateUI(data))
    .catch(err=>console.error(err));
}