class Forecast{
    constructor(){
        this.key="IlAdLD6QiWGcVlhpKGve6F6g7tq6AkeT";
        this.cityUri="http://dataservice.accuweather.com/locations/v1/cities/search";
        this.weatherUri="http://dataservice.accuweather.com/currentconditions/v1/";
    }

    async updateCity(cityName){
        const cityDet= await this.getCity(cityName);
        const weatherDet=await this.getWeather(cityDet.Key);
        console.log(cityDet,weatherDet);
        return {cityDet,weatherDet};
    }

    async getCity(city){     
        const queryParams=`?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityUri+queryParams);
        if(response.status!==200){
            return new Error('Error while fetching the URL')
        }
        const data = await response.json();
        return data[0];
    }

    async getWeather(id){
        const queryParams=`${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherUri+queryParams);
        if(response.status!==200){
            return new Error('Error while fetching the URL')
        }
        const data = await response.json();
        return data[0];
    }
  
}