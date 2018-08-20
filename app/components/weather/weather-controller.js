import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()
const outside = document.getElementById('weather')

function drawWeather(data) {
	let icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
	let template = `
	<div class="weather">
	<img src="${icon}" />
	<div>${data.main.temp}F°</div>
	<div>${data.name}</div>
	</div>`
	outside.innerHTML = template
}


export default class WeatherController {

	constructor() {
		this.getWeather()
	}
	getWeather() {
		weatherService.getWeather(data => {
			// console.log(data);
			drawWeather(data)
		})
	}
}