//Alphabet button
function generatePass(){
    //password length
    var passLength = document.getElementById("slide").value;
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var password = "";
    //pulls based on this loop
    for(var i = 0; i <= passLength; i++){
        password = password + letters.charAt(Math.floor(Math.random() * Math.floor(letters.length-1)));
    }
// places password in html
    document.getElementById("displayPass").value = password;
    document.getElementById("list").innerHTML += password + "<br />"

}
//Numbers Button
function numbers(){
    //password length
    var passLength = document.getElementById("slide").value;
    var lettersNumbers = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    var password = "";
    //pulls based on this loop
    for(var i = 0; i <= passLength; i++){
        password = password + lettersNumbers.charAt(Math.floor(Math.random() * Math.floor(lettersNumbers.length-1)));
    }
    document.getElementById("displayPass").value = password;
    document.getElementById("list").innerHTML += password + "<br />"
}
//Symbols button
function symbols(){
    //password length
    var passLength = document.getElementById("slide").value;
    var symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+={}[];:?/<>,.`~";
    var password = "";
    //pulls based on this loop
    for(var i = 0; i <= passLength; i++){
        password = password + symbols.charAt(Math.floor(Math.random() * Math.floor(symbols.length-1)));
    }
    document.getElementById("displayPass").value = password;
    document.getElementById("list").innerHTML += password + "<br />";
}
// everything option
function allOfIt(){
    var passLength = document.getElementById("slide").value;
    var everything = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-_+={[}]/?><,.`~";
    var password = "";

    //pull based on this loop
    for(var i = 0; i <= passLength; i++){
        password = password + everything.charAt(Math.floor(Math.random() * Math.floor(everything.length-1)))
    }
    document.getElementById("displayPass").value = password;
    document.getElementById("list").innerHTML += password + "<br />";


}
// Lowercase only option
function lowercase(){
    var passLength = document.getElementById("slide").value;
    var little = "abcdefghijklmnopqrstuvwxyz";
    var password = "";

    //pull based on this loop
    for(var i = 0; i <= passLength; i++){
        password = password + little.charAt(Math.floor(Math.random() * Math.floor(little.length-1)))
    }
    document.getElementById("displayPass").value = password;
    document.getElementById("list").innerHTML += password + "<br />";
    
}

// to make the length display slider location
var sliderValue = document.getElementById("slide");
var output = document.getElementById("lengthDisplay");
output.innerHTML = sliderValue.value;

sliderValue.oninput = function() {
    output.innerHTML = this.value;
}
