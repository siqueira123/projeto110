//https://teachablemachine.withgoogle.com/models/yOG2luzmJ///

Webcam.set({
    width:350,
    height:300,
    imageFormat : 'png',
    pngQuality:90
});

camera = document.getElementById("cam");

Webcam.attach('#camera');

Webcam.attach('#camera');

function takeSnapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; 
    })
}

console.log('ml5 version:',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/yOG2luzmJ/model.jason',modelLoaded);

function speak(){
    var synth = window.speechSynthesis;
    speekData = "o gesto é" + prediction1;
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("resultado").innerHTML = result[0].label;
        prediction = result[0].label;
        speak();
        if(results[0].label == "joia")
        {
            document.getElementById("resultado").innerHTML = "joia";
        }
        if(results[0].label == "rock")
        {
            document.getElementById("resultado").innerHTML = "rock";
        }
        if(results[0].label == "top")
        {
            document.getElementById("resultado").innerHTML = "top;"
        }
    }
}