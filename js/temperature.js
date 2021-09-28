var input = document.getElementById('input');
var result = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');
let inputValue1,resultValue1, inputValue2,resultValue2;
let output1, output2;

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

function unitMultiply(input1, input2) {
        let output = input1 * input2;
        return output;
}

function fromTo() {
        inputValue1 = inputType.value;
        resultValue1 = resultType.value;
        let output1 = inputValue1 + "-" +resultValue1;

        switch(output1) {
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
                        break;
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


function toFrom() {        
        inputValue2 = resultType.value;
        resultValue2 = inputType.value;
        let output2 = inputValue2 + "-" +resultValue2;
    
        switch(output2) {
                case "celsius-celsius" :
                        input.value = result.value ;
                        console.log(input.value);
                        break;
                case "celsius-fahrenheit" :              
                        input.value = (result.value * (9/5)) + 32;
                        console.log(input.value);
                        break;
                case "celsius-Kelvin" :
                        input.value = (result.value * 1) + 273.15;
                        console.log(input.value);
                        break;
                
                case "fahrenheit-celsius" :
                        input.value = (result.value - 32) * (5/9);
                        console.log(input.value);
                        break;
                case "fahrenheit-fahrenheit":
                        input.value = result.value ;
                        console.log(input.value);
                        break;
                case "fahrenheit-Kelvin":
                        input.value = (result.value - 32) * (5/9) + 273.15;
                        console.log(input.value);
                        break;

                case "Kelvin-celsius" :
                        input.value = (result.value * 1) - 273.15;                        
                        console.log(input.value);
                        break;
                case "Kelvin-fahrenheit":
                        input.value = (result.value - 273.15) * (9/5) + 32; 
                        console.log(input.value);
                        break;
                case "Kelvin-Kelvin":
                        input.value = result.value ;
                        console.log(input.value);
                        break;       
    }
}