function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#faf3dd")
  
}
var w= 100
var s_w=50
function draw() {
  background("#a9def9");
  //rectMode(CENTER)// 設定方框中心點為方框的座標點
  noFill()
  for(var y = 50 ; y<=height+50;y=y+w){
  for(var x = 50 ; x<=width+50;x=x+w){
  //畫圓，設定框線顏色與線條粗細
  rectMode(CENTER)// 設定方框中心點為方框的座標點
  stroke("#fcf6bd")
  strokeWeight(2)
  ellipse(x,y,w+mouseX)
  //畫方框，設定框線顏色與線條粗細
  stroke("#d0f4de")
  strokeWeight(2)
  rect(x,y,w)
  ellipse(x,y,w+mouseX)
  //畫小圓
  stroke("#fcf6bd")
  strokeWeight(2)
  ellipse(x+50,y+50,s_w+mouseX)
  }
  }
}