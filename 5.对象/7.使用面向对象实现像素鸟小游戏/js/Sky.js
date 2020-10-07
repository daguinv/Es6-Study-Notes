const skyDom = document.getElementsByClassName('sky')[0];
const skyWidth = skyDom.offsetWidth;
const skyHeight = skyDom.offsetHeight;

class Sky extends Foundation {
  constructor(xSpeed) {
    super(skyWidth, skyHeight, 0, 0, xSpeed, 0, skyDom);
  }
  move(duration){
    super.move(duration);
    if(this.left <= -this.width / 2){
      this.left = 0;
    }
  }
}

// let sky = new Sky(-50);

// setInterval(() => {
//   sky.move(60 / 1000)
// }, 1000 / 60);
