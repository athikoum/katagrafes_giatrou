/*
 * @name Preload SoundFile
 * @description Call loadSound() during preload() to ensure that the
 * sound is completely loaded before setup() is called. It's best to always
 * call loadSound() in preload(), otherwise sounds won't necessarily be loaded
 * by the time you want to play them in your sketch.
 *
 * <br><br><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.sound">p5.sound library</a>
 * a sound file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em>
 */

let song1;
let song2;
let MyFont;
//let mic;

function preload() {
  song1 = loadSound('data/katagrafi1.mp3');
  song2 = loadSound ('data/katagrafi2.mp3');
  
}

function setup() {
  //noCursor();
  createCanvas(windowWidth,windowHeight);
 // mic = new p5.AudioIn();
 // mic.start();
  song1.loop(); // song is ready to play during setup() because it was loaded during preload
  song2.loop();
  song1.pan(-1);
  song2.pan(1);
  background(0);
  let str = 'Καταγραφές για την Αρρώστεια του Χρόνου';
textSize(20);
fill(255);
//textFont(myFont);
text(str,windowWidth/7, windowHeight/2,500,500);
 let str2 = 'Χρησιμοποιήστε τα πλήκτρα <-, -> για να ακούσετε τις καταγραφές. Μερικές φορές το πλήκτρο πρέπει να πατηθεί παραπάνω από μία φορά';
 textSize(30);
 fill (100,0,100);
 text (str2, windowWidth/7, windowHeight*3/4, 700,700);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW){
    // .isPlaying() returns a boolean
    song1.play(); // .play() will resume from .pause() position
    song2.stop();
    

  // Set the rate to a range between 0.1 and 4
  // Changing the rate alters the pitch
  let speed = map(mouseY, 0.001, height, 0, 1);
  speed = constrain(speed, 0.001, 1);
  song1.rate(speed);
  let rectangle1;
  rectangle1=rect(300,100,100,100);
  rect.fill(200,300,20);

    //background(255, 0, 0);
    
  } else {
    if (keyCode === RIGHT_ARROW){
    song2.play();
    song1.stop();
    let speed = map(mouseY, 0.001, height, 0, 1);
  speed = constrain(speed, 0.001, 1);
  song2.rate(speed);
  let rectangle2;
  rectangle2=rect(1000,100,100,100);
  fill(300,20,200);

   // background(0, 255, 0);
  }
}
}
function draw(){
  // rect(mouseX,mouseY,10,10);
   let str3 = '.';
   fill(30);
  textSize(50);
  //Textfill(9,9,9);
  //textFont(myFont);
  text(str3,mouseX,mouseY,200,200);
}
