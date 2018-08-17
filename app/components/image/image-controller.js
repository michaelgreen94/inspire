import ImageService from "./image-service.js"

let imgService = new ImageService()


function draw(data) {
  let img = data.url
  document.body.style.backgroundImage = "url(" + img + ")";

  // console.log('draw', data.url)
}

export default class ImageController {
  constructor() {
    imgService.getImage(draw)
  }

}

