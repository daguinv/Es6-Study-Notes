const gameDom = document.getElementsByClassName('game')[0];
class Pipe extends Foundation{
  constructor(height,left,top,xSpeed,dom){
    super(52,height,left,top,xSpeed,0,dom)
    this.render();
  }
  move(duration){
    super.move(duration);
    // if()
  }
}
function getHeight(min,max){
  return Math.floor(Math.random() * (max - min) + min);
}
class PipePare{
  constructor(xSpeed){
    // 水管之间的间隙
    const space = 150;
    // 总高度
    const height = skyHeight - landHeight;
    // 水管的最小高度
    this.minHeight = 80;
    // 水管的最大高度
    this.maxHeight = height - space - this.minHeight;
    // 上水管高度    
    this.topHeight = getHeight(this.minHeight,this.maxHeight);
    // 下水管高度
    this.bottomHeight = height - this.topHeight - space;
    // 创建上水管
    const topDom = document.createElement('div');
    topDom.setAttribute("class","pipe up")
    this.topPipe = new Pipe(this.topHeight,landWidth,0,xSpeed,topDom);
    // 创建下水管
    const bottomDom = document.createElement('div');
    bottomDom.setAttribute("class","pipe down")
    this.bottomPipe = new Pipe(this.bottomHeight,landWidth,this.topHeight + space,xSpeed,bottomDom);

    gameDom.appendChild(topDom);
    gameDom.appendChild(bottomDom);
    
  }
  move(duration){
    console.log(1);
    
    this.topPipe.move(duration);
    this.bottomPipe.move(duration);
  }
}

pipe = new PipePare(-100)
setInterval(() => {
  pipe.move(60 / 1000);
}, 1000/30);