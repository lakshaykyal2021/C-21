var mr, fr;
var gameObject1, gameObject2, gameObject3, gameObject4;


function setup() 
{
  createCanvas(800,400);
  fr= createSprite(100, 400, 50, 50);
  fr.shapeColor = "green";
 fr.velocityY=-2;
  mr=createSprite(800, 400,80,30);
  mr.shapeColor = "green";
  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject1.velocityY=2;
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";

  //a.velocityX= -5;
  //b.velocityX= +5;

}

function draw() 
{
  background("black");
  mr.x=mouseX;
  mr.y=mouseY;
  //console.log(a.x-b.x);

  if(isTouching(mr,gameObject3))
  {
  mr.shapeColor="orange";
    gameObject3.shapeColor="orange";
  }
  else
  {
    mr.shapeColor="green";
    gameObject3.shapeColor="green";
  }
 
 bounceOff(fr,gameObject1);


  drawSprites();
}
function isTouching(a,b)
{
   if(a.x-b.x <a.width/2+b.width/2   
    && b.x-a.x <a.width/2+b.width/2  
    && a.y-b.y <a.height/2+b.height/2
    && b.y-a.y <b.height/2+a.height/2
    )
  {
    return true;
  }
  else
  {
    return false;
  }
}
function bounceOff(a,b)
{
  if(a.x-b.x <a.width/2+b.width/2   
    && b.x-a.x <a.width/2+b.width/2)
    {
      a.velocityX=a.velocityX*(-1);
      b.velocityX=b.velocityX*(-1);
    }
    if(a.y-b.y <a.height/2+b.height/2
      && b.y-a.y <b.height/2+a.height/2)

      {
        a.velocityY=a.velocityY*(-1);
        b.velocityY=b.velocityY*(-1); 
      }
}