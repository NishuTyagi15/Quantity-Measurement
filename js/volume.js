var input = document.getElementById('input');
var result = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');
let inputValue1,resultValue1;

input.addEventListener("keyup", fromTo);
result.addEventListener("keyup", toFrom);

let userInput;
if (userInput = input) {
        inputType.addEventListener("change", fromTo);
        resultType.addEventListener("change", toFrom);
} else {
        inputType.addEventListener("change", fromTo);
        resultType.addEventListener("change", toFrom);
}

function unitMultiply(input1,input2){
    let output = input1 * input2;;
     return output;
 }
 
function fromTo(){
    inputValue1 = inputType.value;
    resultValue1 = resultType.value;
    let output1 = inputValue1 + "-" +resultValue1;
    
    switch(output1){
        case "litre-litre":
                result.value = input.value ;
                console.log(result.value);
                break;
        case "litre-millilitre" :
                result.value =  unitMultiply(input.value,1000);                      
                console.log(result.value);
                break;
        case "litre-gallon":
                result.value =  unitMultiply(input.value,0.26);    
                console.log(result.value);
                break;

        case "millilitre-litre" :              
                result.value =  unitMultiply(input.value,0.001);
                console.log(result.value);
                break;
        case "millilitre-millilitre" :
                result.value = input.value ;
                console.log(result.value);
                break;
        case "millilitre-gallon" :
                result.value =  unitMultiply(input.value,0.00026);
                console.log(result.value);
                break;

        case "gallon-litre":
                result.value =  unitMultiply(input.value,3.79);  
                console.log(result.value);
                break;
        case "gallon-millilitre" :
                result.value =  unitMultiply(input.value,3785.42);                          
                console.log(result.value);
                break;
        case "gallon-gallon":
                result.value = input.value ;
                console.log(result.value);
                break;
       
    }
}

function toFrom(){
        inputValue2 = resultType.value;
        resultValue2 = inputType.value;
        let output2 = inputValue2 + "-" +resultValue2;
        
        switch(output2){
            case "litre-litre":
                    input.value = result.value ;
                    console.log(input.value);
                    break;
            case "litre-millilitre" :
                    input.value =  unitMultiply(result.value,1000);                      
                    console.log(input.value);
                    break;
            case "litre-gallon":
                    input.value =  unitMultiply(result.value,0.26);    
                    console.log(input.value);
                    break;
    
            case "millilitre-litre" :              
                    input.value =  unitMultiply(result.value,0.001);
                    console.log(input.value);
                    break;
            case "millilitre-millilitre" :
                    input.value = result.value ;
                    console.log(input.value);
                    break;
            case "millilitre-gallon" :
                input.value =  unitMultiply(result.value,0.00026);
                    console.log(input.value);
                    break;
    
            case "gallon-litre":
                    input.value =  unitMultiply(result.value,3.79);  
                    console.log(input.value);
                    break;
            case "gallon-millilitre" :
                    input.value =  unitMultiply(result.value,3785.42);                          
                    console.log(input.value);
                    break;
            case "gallon-gallon":
                    input.value = result.value ;
                    console.log(input.value);
                    break;
           
        }
}