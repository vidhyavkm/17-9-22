//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=64e1a54af35fc47bdafa5f1d6619ae1d

//when i search for the country report, i will get the windspeed, humidity, temperature 

async function getWeather(){
var cityName= document.getElementById('cityName').value
console.log(cityName)

let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=64e1a54af35fc47bdafa5f1d6619ae1d`)
let result = await data.json()
console.log(result)

var weather = document.getElementById('weather')
weather.innerHTML=`<div class="card" style="width: 20rem;">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTe8xYkbhEbqEYP6A2ZZ6m6WRfLfxkjb_Pxg&usqp=CAU class="card-img-top" style="height:150px" alt="...">
<div class="card-body">
  <h5 class="card-title">Weather report of ${cityName}</h5>
  <p class="card-text">Temperature:${result.main.temp}</p>
  <p class="card-text">Humidity:${result.main.humidity}</p>
  <p class="card-text">Pressure:${result.main.pressure}</p>
</div>
</div>`
}
getWeather();