const birdDom = document.getElementsByClassName('bird')[0];
const birdWidth = birdDom.offsetWidth;
const birdHeight = birdDom.offsetHeight;
const birdLeft = birdDom.offsetLeft;
const birdTop = birdDom.offsetTop;

class Bird extends Foundation {
  constructor() {
    super(birdWidth, birdHeight, birdLeft, birdTop, 0, 0, birdDom);
    // 向下的加速度
    this.g = 1500;
    // 鸟下落的最大位置
    this.maxY = landTop - birdHeight;
    // 切换鸟翅膀的定时器
    this.timer = null;
    this.num = 0;
  }

  move(duration) {
    this.ySpeed += this.g * duration;
    super.move(duration);
    if (this.top >= this.maxY) {
      this.top = this.maxY;
      this.render();
    }
  }
  // 小鸟开始煽动翅膀
  wingStart() {
    // console.log(this.dom);
    this.timer = setInterval(() => {
      this.num = this.num % 3;
      this.dom.setAttribute("class",`bird swing${this.num + 1}`)
      this.num++; 
    },150)
  }
  // 停止煽动翅膀
  wingStop(){
    clearInterval(this.timer);
  }
  // 跳 
  jump(){
    this.ySpeed = -300;
  }
}

let bird = new Bird(-50);
// bird.wingStart()

// setInterval(() => {
//   bird.move(16 / 1000)
// }, 1000 / 60)
