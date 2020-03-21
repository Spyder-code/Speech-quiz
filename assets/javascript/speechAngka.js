// console.log("active");
// const searchForm = document.querySelector("#form");
// const searchFormInput = searchForm.querySelector("input");

var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = "ar-AR";
recognition.interimResults = true;
recognition.continuous = false;

function ok() {
    recognition.start();
  }

recognition.onresult = function(event) {
    event.preventDefault();
    document.getElementById('jawab').value = "";
    document.getElementById('jawab').value = event.results[0][0].transcript;
};


