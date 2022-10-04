
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("Camera");
Webcam.attach(camera);
function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("Result").innerHTML = '<img id = "captured_image" src = "' + data_uri + ' " />';
    });
}
console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/m4nZoddW2/model.json', modelLoded);
function modelLoded(){
    console.log("model is loaded");
}
function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, Samar);
}

function Samar(error, results) {
    if (error) { 
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("Family_men").innerHTML = results[0].label;
        document.getElementById("Accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}
