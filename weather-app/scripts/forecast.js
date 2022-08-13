const key="IlAdLD6QiWGcVlhpKGve6F6g7tq6AkeT";
const baseUrl="http://dataservice.accuweather.com/locations/v1/cities/search";
const queryParams=`?apikey=${key}&q=tiruvallur`;
const getCity =async()=>{
    const response = await fetch(baseUrl+queryParams);
    if(response.status!==200){
        return new Error('Error while fetching the URL')
    }
    const data = response.json();
    return data;
}
getCity().then((data)=>{
const city=data[0].Key;
console.log(city);

}) .catch((err)=>console.log(err));