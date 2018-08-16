import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()
const outside = document.getElementById('weather')

function drawWeather(weather) {
	let template = `
	<div>hello</div>
	<div>from</div>
	<div>drawWeather</div>`
	outside.innerHTML = template
}


export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
	}
	getWeather() {
		weatherService.getWeather(weather => {
			console.log(weather);
			//What can you do with this weather object?
		})
	}
}
