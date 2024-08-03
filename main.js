//calculaor program//


const result = document.getElementById('result');

function apendToDisplay(display){
    result.value += display;
}

function clearDisplay(){
    result.value = "";
}

function calculate(){
    try{
        result.value = eval(result.value)
    }
  catch{
    result.value ="Error"
  }
}


