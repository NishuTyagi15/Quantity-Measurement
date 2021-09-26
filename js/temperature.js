var input = document.getElementById('input');
var result = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');
let inputTypeValue,resultTypeValue;

window.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function unitMultiply(input1,input2){
    let answer = input1 * input2;;
     return answer;
 }
 
function myResult(){
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;
    let option = inputTypeValue + "-" +resultTypeValue;
    
    switch(option){
        case "celsius-celsius" :
                result.value = input.value ;
                console.log(result.value);
                break;
        case "celsius-fahrenheit" :              
                result.value = (input.value * (9/5)) + 32;
                console.log(result.value);
                break;
        case "celsius-Kelvin" :
                result.value = (input.value * 1) + 273.15;
                console.log(result.value);
                break;
                
        case "fahrenheit-celsius" :
                result.value = (input.value - 32) * (5/9);
                console.log(result.value);
                break;
        case "fahrenheit-fahrenheit":
                result.value = input.value ;
                console.log(result.value);
                break
        case "fahrenheit-Kelvin":
                result.value = (input.value - 32) * (5/9) + 273.15;
                console.log(result.value);
                break;

        case "Kelvin-celsius" :
                result.value = (input.value * 1) - 273.15;                        
                console.log(result.value);
                break;
        case "Kelvin-fahrenheit":
                result.value = (input.value - 273.15) * (9/5) + 32; 
                console.log(result.value);
                break;
        case "Kelvin-Kelvin":
                result.value = input.value ;
                console.log(result.value);
                break;
       
    }
}