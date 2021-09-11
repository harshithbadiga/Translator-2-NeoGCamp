var userInput = document.querySelector("#user-input")
var translateBtn = document.querySelector(".translate-btn")
var output = document.querySelector("#system-output")
var resetBtn = document.querySelector("#reset-btn")


function convertURL(text){
    var basicURL = "https://api.funtranslations.com/translate/shakespeare.json"
    var convertedURL =  basicURL + "?" + "text=" + text
    return convertedURL
}

function translateText(){
    var userText = userInput.value
    fetch(convertURL(userText))
    .then( response => response.json())
    .then( json => {
        var translatedText = json.contents.translated
        output.innerText = translatedText
    })
}

function refreshMe(){
    location.reload()
}




translateBtn.addEventListener("click", translateText)

resetBtn.addEventListener("click", refreshMe)