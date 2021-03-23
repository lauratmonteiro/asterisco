const inputElement = document.getElementById("texto");
const button = document.getElementById("botao");
const result = document.getElementById("resultado");
const char = [" ", ".", ",", "?", "!", ":"];

button.addEventListener("click", () => {
    let string = inputElement.value;
    let newString = "";
    for(let i = 0; i<string.length; i++){
        if(char.indexOf(string[i]) < 0){
            newString += "*";
        }else{
            newString += string[i];
        }
    }
    result.value = newString;
    result.select();
    result.setSelectionRange(0, 99999);
    document.execCommand("copy");
})




