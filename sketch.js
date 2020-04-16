function setup() {
  createCanvas(1600,400);

  bullet = createSprite(100,50,70,20);
  bullet.shapeColor = "white";

  bullet1 = createSprite(100,150,70,20);
  bullet1.shapeColor = "white";

  bullet2 = createSprite(100,250,70,20);
  bullet2.shapeColor = "white";

  bullet3 = createSprite(100,350,70,20);
  bullet3.shapeColor = "white";

  bulletWeight = random(30,52);
  bulletSpeed = random(223,321);

  bullet1Weight = random(30,52);
  bullet1Speed = random(223,321);

  bullet2Weight = random(30,52);
  bullet2Speed = random(223,321);

  bullet3Weight = random(30,52);
  bullet3Speed = random(223,321);

  wall = createSprite(1500,200,70,400);

  wallThickness = random(22,83);

  damage = (0.5 * bulletWeight * bulletSpeed * bulletSpeed) / (wallThickness * wallThickness * wallThickness)
  damage1 = (0.5 * bullet1Weight * bullet1Speed * bullet1Speed) / (wallThickness * wallThickness * wallThickness)
  damage2 = (0.5 * bullet2Weight * bullet2Speed * bullet2Speed) / (wallThickness * wallThickness * wallThickness)
  damage3 = (0.5 * bullet3Weight * bullet3Speed * bullet3Speed) / (wallThickness * wallThickness * wallThickness)

  }

function draw() {
  background(0,0,0); 

  if(mouseIsPressed) {
  bullet.velocityX = bulletSpeed;
  bullet1.velocityX = bullet1Speed;
  bullet2.velocityX = bullet2Speed;
  bullet3.velocityX = bullet3Speed;
  }

  if(isCollide(bullet,wall)) {
    bullet.velocityX = 0;

    if(damage > 0 && damage < 5) {
      bullet.shapeColor = "green";
    }else if(damage >= 5 && damage < 10) {
      bullet.shapeColor = "yellow";
    }else {
      bullet.shapeColor = "red";
    }
  }

  if(isCollidin(bullet1,wall)) {
    bullet1.velocityX = 0;

    if(damage1 > 0 && damage1 < 5) {
      bullet1.shapeColor = "green";
    }else if(damage1 >= 5 && damage1 < 10) {
      bullet1.shapeColor = "yellow";
    }else {
      bullet1.shapeColor = "red";
    }
  }

  if(isCollidig(bullet2,wall)) {
    bullet2.velocityX = 0;

    if(damage2 > 0 && damage2 < 5) {
      bullet2.shapeColor = "green";
    }else if(damage2 >= 5 && damage2 < 10) {
      bullet2.shapeColor = "yellow";
    }else {
      bullet2.shapeColor = "red";
    }
  }

  if(isCollidng(bullet3,wall)) {
    bullet3.velocityX = 0;

    if(damage3 > 0 && damage3 < 5) {
      bullet3.shapeColor = "green";
    }else if(damage3 >= 5 && damage3 < 10) {
      bullet3.shapeColor = "yellow";
    }else {
      bullet3.shapeColor = "red";
    }
  }

 drawSprites();
}