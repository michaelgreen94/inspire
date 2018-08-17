import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()
const outside = document.getElementById('weather')

function drawWeather(data) {
	let template = `
	<div>${data.main.temp}F°</div>
	<div>${data.name}</div>`
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
