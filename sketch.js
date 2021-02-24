const Constraint=Matter.Constraint

var skeleton1, skeleton1Img, skeleton
var skeleton2, skeleton2Img
var skeleton3, skeleton3Img
var skeleton4, skeleton4Img
var notIt, notItImg
var backgroundImage
var it, itImg
var notIt1, notIt1Img
var notIt2, notIt2Img
var invisibeBlock

function preload(){
    backgroundImage=loadImage("background.jpg");
    skeleton1Img=loadImage("no background skeleton walk cycle 1.png", "no background skeleton walk cycle 2.png","no background skeleton walk cycle 3.png"," no background skeleton walk cycle 4.png");
    notItImg=loadImage("not it person.png");
    notIt1Img=loadImage("not it person.png");
    notIt2Img=loadImage("not it person.png");
    itImg=loadImage("IT PERSON.png");
}

function setup(){
  createCanvas(1550, 700);
  skeleton=createSprite(775, 350, 10, 20);
  skeleton.addImage("something",skeleton1Img);

  notIt=createSprite(300, 570, 15, 20);
  notIt.addImage(notItImg);
  notIt1=createSprite(400, 570, 15, 20);
  notIt1.addImage(notIt1Img);
  notIt2=createSprite(200, 570, 15, 20);
  notIt2.addImage(notIt2Img);

  it=createSprite(1000, 200, 20, 20);
  it.addImage(itImg);
}

function draw(){
  background(backgroundImage);

  if(keyDown(RIGHT_ARROW)){
    notIt.x+=10
  }
    if(keyDown(LEFT_ARROW)){
      notIt.x-=10
    }
    if(keyDown(UP_ARROW)){
      notIt.y-=10
    }
      if(keyDown(DOWN_ARROW)){
        notIt.y+=10
    }



    if(keyDown("w")){
      notIt1.y-=10
    }

    if(keyDown("a")){
      notIt1.x-=10
    }

    if(keyDown("s")){
      notIt1.y+=10
    }

    if(keyDown("d")){
      notIt1.x+=10
    }


    if(keyDown("i")){
      notIt2.y-=10
    }

    if(keyDown("j")){
      notIt2.x-=10
    }

    if(keyDown("k")){
      notIt2.y+=10
    }

    if(keyDown("l")){
      notIt2.x+=10
    }



    skeleton.velocityX=1;
    skeleton.velocityY=1;

    console.log(skeleton.y);
    if(skeleton.y>400){
      skeleton.y=100;
      skeleton.x=100;
    }

  drawSprites();
}
