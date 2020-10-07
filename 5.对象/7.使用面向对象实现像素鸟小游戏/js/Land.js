const landDom = document.getElementsByClassName('land')[0];
const landWidth = landDom.offsetWidth;
const landHeight = landDom.offsetHeight;
const landTop = landDom.offsetTop;
console.log(landDom);

class Land extends Foundation {
  constructor(xSpeed) {
    super(landWidth, landHeight, 0, landTop, xSpeed, 0, landDom);
  }
  move(duration){
    super.move(duration);
    if(this.left <= -this.width / 2){
      this.left = 0;
    }
  }
}

// let land = new Land(-50);

// setInterval(() => {
//   land.move(60 / 1000)
// }, 1000 / 60);
