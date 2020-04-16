function isCollide(bullet,wall) {
 if(bullet.x - wall.x < bullet.width/2 + wall.width/2
 && wall.x - bullet.x < wall.width/2 + bullet.width/2
 && bullet.y - wall.y < bullet.height/2 + wall.height/2
 && wall.y - bullet.y < wall.height/2 + bullet.height/2) {
  return true;
 } else {
  return false; 
 }
}

function isCollidin(bullet1,wall) {
 if(bullet1.x - wall.x < bullet1.width/2 + wall.width/2
 && wall.x - bullet1.x < wall.width/2 + bullet1.width/2
 && bullet1.y - wall.y < bullet1.height/2 + wall.height/2
 && wall.y - bullet1.y < wall.height/2 + bullet1.height/2) {
  return true;
 } else {
  return false; 
 }
}

function isCollidig(bullet2,wall) {
 if(bullet2.x - wall.x < bullet2.width/2 + wall.width/2
 && wall.x - bullet2.x < wall.width/2 + bullet2.width/2
 && bullet2.y - wall.y < bullet2.height/2 + wall.height/2
 && wall.y - bullet2.y < wall.height/2 + bullet2.height/2) {
  return true;
 } else {
  return false; 
 }
}

function isCollidng(bullet3,wall) {
 if(bullet3.x - wall.x < bullet3.width/2 + wall.width/2
 && wall.x - bullet3.x < wall.width/2 + bullet3.width/2
 && bullet3.y - wall.y < bullet3.height/2 + wall.height/2
 && wall.y - bullet3.y < wall.height/2 + bullet3.height/2) {
  return true;
 } else {
  return false; 
 }
}