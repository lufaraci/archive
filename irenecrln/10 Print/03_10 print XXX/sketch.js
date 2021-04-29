/*╔════════════               ════════════╗
    
     ✹ UNIRSM 
     ✹ Corso di Design dei sistemi
     ✹ Studentessa: Irene Carlino
     ✹ Prof. Daniele Tabellini
     ✹ Corso di Laurea Magistrale in Design
     ✹ Anno Accademico 2020/21
     
//╚════════════               ════════════╝*/

x = 0;
y = 0;
var sizer = 30;
let b;
var playboy;
var foto;
let c;


function preload() {

  //creo il mio array di foto
  playboy = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

  //prendo dall'array una foto a caso
  var pos = floor(random(playboy.length));

  //carico la foto che ho preso
  foto = loadImage(playboy[pos]);

}



function setup() {
  randomSeed(millis());//il randomseed mi da una serie di numeri casuali sempre diversa perchè sennò ci sarebbe un alta probabilità che esca lo stesso seed, così invece lo prende ogni millisecondo 
  let c= createCanvas(636, 855);
  
}

function draw() {
  
  //background(foto);
  image(foto, 0, 0, 636, 855);
  rectMode(CENTER);
  for (var i = 0; i < 636; i += sizer) {
    for (var j = 0; j < 855; j += sizer) {
      r = random(4);
      if (r < 1) {
        //se esce un numero minore di 1 stampa una stella  
        noStroke();
        fill(0);
        
        //let punte_stelle=[4,9] //da sistemare 
        //star (x + i, y + j, 5, 14, floor(random (punte_stelle)));
        
        star (x + i, y + j, 5, 14, 4);

      } else if (r < 2) {
        //se esce un numero minire di 2 stampa un rettangolo
        stroke(0);
        fill(0);
        rect(x + i, y + j, 30, 30);
      }
      noLoop();
    }
  }
  

  function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

  
/////////////////////////////
//NUOVO POSTER AL CLICK/////
///////////////////////////
}
function mousePressed() {
  clear();
  redraw();
  preload();
}


////////////////////
//SALVA POSTER/////
//////////////////

function keyPressed(){
  if(key == 's'){
    save('poster_DonninaNuda_irene_crln.png');
  }
  
}
