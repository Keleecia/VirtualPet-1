
var theDog;
var database;

function preload()
{
  //load images here
  dogDog = loadImage("Dog.png");
  dogHappy = loadImage("happydog.png");

  
}

function setup() {
	createCanvas(500, 500);
  theDog = createSprite(350,350,10,20);

  database =firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value", readStock);
  
}


function draw() {  

  background(46,139,87);
  drawSprites();
  fill("white");
  text("Note: Press Up Arrow Key To Feed Drago Milk",50,50,1000,1000)
  //add styles here
  theDog.addImage(dogDog,"normal");
  theDog.scale = 0.3;

  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    theDog.addImage(dogHappy,"happy");
  }
}


function readStock(data)
{
  foodS = data.val(); 
}

function writeStock(x)
{

  if(x<= 0)
  {
    x=0
  }
  else
  {
   x = x - 1;
  }

  database.ref('/').update({
    food:x
  })
}

