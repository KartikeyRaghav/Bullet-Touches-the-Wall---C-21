function setup() {

        // Creating a canvas
        createCanvas(1600,400);

        // Creating a bullet
        bullet = createSprite(100,200,100,20);
        bullet.shapeColor = "white";

        // Creating the weight and speed of the bullet
        bulletWeight = random(30,52);
        bulletSpeed = random(223,321);

        // Creating a wall
        wall = createSprite(1500,200,70,400);
        wall.shapeColor="rgb(80,80,80)";

        // Creating the thickness of the wall
        wallThickness = random(22,83);

        // Creating an object to calculate the damage
        damage = (0.5 * bulletWeight * bulletSpeed * bulletSpeed) / (wallThickness * wallThickness * wallThickness)

  }



// Main part of the code called
function draw() {
   
        // Colouring the background
        background(0,0,0);

        // Moving the bellet if mouse is pressed
        if(mouseIsPressed) {
          bullet.velocityX = bulletSpeed;
        }

        // Displaying different colours if the bullet touches the wall depending upon the damage made
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

        // Defining the properties of the text
        textSize(30);
        textFont("Algerian");
        stroke("Yellow");
        strokeWeight(3);
        fill("Red");

        // Displaying text if the bullet breaks the wall
        if(bullet.x > wall.x) {
          text("The wall is broken. Take another material to build the wall.", 400,150);
        }

        // Displaying text if the colour of the bullet is green
        if(bullet.x < wall.x && bullet.shapeColor === "green") {
          text("Congratulations!!! The wall withstood the bullet.", 500,150);
        }

        // Displaying text if the colour of the bullet is yellow
        if(bullet.x < wall.x && bullet.shapeColor === "yellow") {
          text("This wall will withstand the bullet for sometime but not for long.", 300,150);
        }
        
        // Displaying text if the colour of the bullet is red
        if(bullet.x < wall.x && bullet.shapeColor === "red") {
          text("Try with another material. This wall will fail if this bullet is shot 2 times.", 250,150);
        }

      // Drawing the sprites
      drawSprites();
}