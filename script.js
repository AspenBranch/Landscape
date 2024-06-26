const URL = "https://teachablemachine.withgoogle.com/models/Rn65PKH0N/";

let model, webcam, labelContainer, predictions;

async function init() {
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";
}

model = await tmImage.load(modelURL, metadataURL);

maxPredictions = model.getTotalClasses();

const flip = true; // whether or not to flip the webcame

webcam = new HTMLImageElement.Webcam(200, 200, flip)

await webcam.setup();

await webcam.play();

window.requestAnimationFrame(loop);

document.getElmentById("webcam-container").appendChild(webcam.canvas)

labelContainer = document.getElementById("label-container");

for (let i=0; i<maxPredictions; i++){
      labelContainer.appendChild(document.createElement("div"));
})

async function loop(){
  webcam.update();
  await predict();
  window.requestAnimationFrame(loop);
}

async function predict(){
  const prediction = await model.predict(webcam.canvas);
  for (let i=0; i<maxPredictions; i++){
    const classPrediction =
      prediction[i].className + ": " + prediction[i].probability.toFixed(2);
    labelContainer.childNodes[i].innerHTML = classPrediction;
  }
}
