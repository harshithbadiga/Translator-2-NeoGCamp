var userInput = document.querySelector("#user-input")
var translateBtn = document.querySelector(".translate-btn")
var output = document.querySelector("#system-output")


function convertURL(text){
    var basicURL = "https://api.funtranslations.com/translate/chef.json"
    var convertedURL =  basicURL + "?" + "text=" + text
    return convertURL
}

function translateText(){
    var userText = userInput.value
    fetch(convertURL(userText))
    .then( response => response.json)
    .then( json => {
        var translatedText = json.contents.translated
        output.innerText = translatedText
    })
}





translateBtn.addEventListener("click", translateText)