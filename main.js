var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    console.log("Start");
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);

    var Content = event.results[0][0].transcript;
  console.log(Content);
  document.getElementById("textbox").innerHTML = Content;
    speak();
}

function speak() {
    console.log("hui");
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

}

Webcam.set({
    width:360,
    height:550,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.snap( function(data_uri) {
    // display results in page
    document.getElementById('result').innerHTML = 
     '<img src="'+data_uri+'"/>';
 } );

