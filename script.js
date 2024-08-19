
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value+=input;
}

function clearDisplay(){
    display.value="";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(err){
        display.value="Error"
    }
}

function backspace() {
    let info = display.value;
    let newWord = info.slice(0, -1)
    display.value = newWord;
    
}
