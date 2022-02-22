function setup() {
    canvas = createCanvas (290, 290);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}   
 

function clearCanvas() {

    background("white")
}
 
function preload() {
    classifier = ml5.imageClassifier('Doodlenet')
}


function draw() {

// set stroke weight to 14
strokeWeight(14);
// set stroke color to black
stroke(0); 
// if mouse pressed, draw line  between previous and current mouse positions
if(mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY )

}
}
 function classifyCanvas() {
     classifier.classify(canvas, gotResult);

 }

 function gotResult(error, results) {
     if (error) {
         console.error(error);
     
 }
 console.log(results);
 document.getElementById('label').innerHTML = 'label: '+results[0].label;

 document.getElementById('confidence').innerHTML = 'confidence: '+ Math.round(results[0].confidence * 100) + '%';
 
 utterthis = new SpeechSynthesisUtterance(results[0].label);
 synth.speak(utterthis);
 }