var userInput = document.getElementById('input');
var userResult = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');
let inputTypeValue,resultTypeValue;
let result , result1;

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
        case "litre-litre":
                userResult.value = userInput.value ;
                console.log(userResult.value);
                break;
        case "litre-millilitre" :
                userResult.value =  unitMultiply(userInput.value,1000);                      
                console.log(userResult.value);
                break;
        case "litre-gallon":
                userResult.value =  unitMultiply(userInput.value,0.26417);    
                console.log(userResult.value);
                break;

        case "millilitre-litre" :              
                userResult.value =  unitMultiply(userInput.value,0.001);
                console.log(userResult.value);
                break;
        case "millilitre-millilitre" :
                userResult.value = userInput.value ;
                console.log(userResult.value);
                break;
        case "millilitre-gallon" :
                userResult.value =  unitMultiply(userInput.value,0.00026417);
                console.log(userResult.value);
                break;

        case "gallon-litre":
                userResult.value =  unitMultiply(userInput.value,3.78542);  
                console.log(userResult.value);
                break;
        case "gallon-millilitre" :
                userResult.value =  unitMultiply(userInput.value,3785.42);                          
                console.log(userResult.value);
                break;
        case "gallon-gallon":
                userResult.value = userInput.value ;
                console.log(userResult.value);
                break;
       
    }
}