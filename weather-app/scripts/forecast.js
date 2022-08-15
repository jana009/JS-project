const key="IlAdLD6QiWGcVlhpKGve6F6g7tq6AkeT";


const getWeather=async(id)=>{
    const baseUrl="http://dataservice.accuweather.com/currentconditions/v1/";
    const queryParams=`${id}?apikey=${key}`;
    const response = await fetch(baseUrl+queryParams);
    if(response.status!==200){
        return new Error('Error while fetching the URL')
    }
    const data = await response.json();
    return data[0];
}

//city information
const getCity =async(city)=>{
    const baseUrl="http://dataservice.accuweather.com/locations/v1/cities/search";
    const queryParams=`?apikey=${key}&q=${city}`;
    const response = await fetch(baseUrl+queryParams);
    if(response.status!==200){
        return new Error('Error while fetching the URL')
    }
    const data = await response.json();
    return data[0];
}
/* getCity(cityName).then((data)=>{
    const city=data.Key;
    return getWeather(city);
}).then(data=>{return data})
  .catch((err)=>console.log(err)); */