var input = document.getElementById('input');
var result = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');
let inputValue1,resultValue1;
let inputValue2,resultValue2;

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

function  toFrom() {        
        inputValue1 = resultType.value;
        resultValue1 = inputType.value;
        let output1 = inputValue1 + "-" +resultValue1;
    
        switch(output1) {
                case "kilometre-kilometre" :
                        input.value = result.value;                        
                        console.log(input.value);
                        break;
                case "kilometre-metre":
                        input.value =  unitMultiply(result.value,1000);
                        console.log(input.value);
                        break;
                case "kilometre-centimetre":
                        input.value =  unitMultiply(result.value,100000);
                        console.log(input.value);
                        break;
                case "kilometre-millimetre":
                        input.value =  unitMultiply(result.value,1000000);
                        console.log(input.value);
                        break;
                case "kilometre-micrometre":
                        input.value =  unitMultiply(result.value,1000000000);
                        console.log(input.value);
                        break;
                case "kilometre-mile":
                        input.value =  unitMultiply(result.value,0.621371);
                        console.log(input.value);
                        break;
                case "kilometre-foot":
                        input.value =  unitMultiply(result.value,3280.84);
                        console.log(input.value);
                        break;
                case "kilometre-inch":
                        input.value =  unitMultiply(result.value,39370.1);
                        console.log(input.value);
                        break;


                case "metre-kilometre" :              
                        input.value =  unitMultiply(result.value,0.001);
                        console.log(input.value);
                        break;
                case "metre-metre" :
                        input.value = input.value;                       
                        console.log(input.value);
                        break;       
                case "metre-centimetre" :
                        input.value =  unitMultiply(result.value,100);
                        console.log(input.value);
                        break;        
                case "metre-millimetre":
                        input.value =  unitMultiply(result.value,1000);
                        console.log(input.value);
                        break;
                case "metre-micrometre":
                        input.value =  unitMultiply(result.value,1000000);
                        console.log(input.value);
                        break;
                case "metre-mile":
                        input.value =  unitMultiply(result.value,0.000621371);
                        console.log(input.value);
                        break;
                case "metre-foot":
                        input.value =  unitMultiply(result.value,3.28084);
                        console.log(input.value);
                        break;
                case "metre-inch":
                        input.value =  unitMultiply(result.value,39.3701);
                        console.log(input.value);
                        break;


                case "centimetre-kilometre":
                        input.value =  unitMultiply(result.value,0.00001);
                        console.log(input.value);
                        break;
                case "centimetre-metre":
                        input.value =  unitMultiply(result.value,0.01);
                        console.log(input.value);
                        break;
                case "centimetre-centimetre" :
                        input.value = result.value;                        
                        console.log(input.value);
                        break;                
                case "centimetre-millimetre":
                        input.value =  unitMultiply(result.value,10);
                        console.log(input.value);
                        break;
                case "centimetre-micrometre":
                        input.value =  unitMultiply(result.value,10000);
                        console.log(input.value);
                        break;
                case "centimetre-mile":
                        input.value =  unitMultiply(result.value,0.0000062137);
                        console.log(input.value);
                        break;
                case "centimetre-foot":
                        input.value =  unitMultiply(result.value,0.0328084);
                        console.log(input.value);
                        break;
                case "centimetre-inch":
                        input.value =  unitMultiply(result.value,0.393701);
                        console.log(input.value);
                        break;


                case "millimetre-kilometre":
                        input.value =  unitMultiply(result.value,0.000001);
                        console.log(input.value);
                        break;
                case "millimetre-metre":
                        input.value =  unitMultiply(result.value,0.001);
                        console.log(input.value);
                        break;
                case "millimetre-centimetre":
                        input.value =  unitMultiply(result.value,0.1);
                        console.log(input.value);
                        break;
                case "millimetre-millimetre" :
                        input.value = result.value;                        
                        console.log(input.value);
                        break;
                case "millimetre-micrometre":
                        input.value =  unitMultiply(result.value,1000);
                        console.log(input.value);
                        break;
                case "millimetre-mile":
                        input.value =  unitMultiply(result.value,0.00000062137);
                        console.log(input.value);
                        break;
                case "millimetre-foot":
                        input.value =  unitMultiply(result.value,0.00328084);
                        console.log(input.value);
                        break;
                case "millimetre-inch":
                        input.value =  unitMultiply(result.value,0.0393701);
                        console.log(input.value);
                        break;


                case "micrometre-kilometre":
                        input.value =  unitMultiply(result.value,0.000000001);
                        console.log(input.value);
                        break;
                case "micrometre-metre":
                        input.value =  unitMultiply(result.value,0.000001);
                        console.log(input.value);
                        break;
                case "micrometre-centimetre":
                        input.value =  unitMultiply(result.value,0.0001);
                        console.log(input.value);
                        break;
                case "micrometre-millimetre":
                        input.value =  unitMultiply(result.value,0.001);
                        console.log(input.value);
                        break;
                case "micrometre-micrometre" :
                        input.value = result.value;                        
                        console.log(input.value);
                        break;
                case "micrometre-mile":
                        input.value =  unitMultiply(result.value,0.00000000062137);
                        console.log(input.value);
                        break;
                case "micrometre-foot":
                        input.value =  unitMultiply(result.value,0.00000328084);
                        console.log(input.value);
                        break;
                case "micrometre-inch":
                        input.value =  unitMultiply(result.value,0.000039370079);
                        console.log(input.value);
                        break;


                case "mile-kilometre":
                        input.value =  unitMultiply(result.value,1.60934);
                        console.log(input.value);
                        break;
                case "mile-metre":
                        input.value =  unitMultiply(result.value,1609.34);
                        console.log(input.value);
                        break;
                case "mile-centimetre":
                        input.value =  unitMultiply(result.value,160934);
                        console.log(input.value);
                        break;
                case "mile-millimetre":
                        input.value =  unitMultiply(result.value,1609340);
                        console.log(input.value);
                        break;
                case "mile-micrometre" :
                        input.value =  unitMultiply(result.value,1609340000);
                        console.log(input.value);
                        break;
                case "mile-mile":
                        input.value = result.value;                        
                        console.log(input.value);
                        break;
                case "mile-foot":
                        input.value =  unitMultiply(result.value,5280);
                        console.log(input.value);
                        break;
                case "mile-inch":
                        input.value =  unitMultiply(result.value,63360);
                        console.log(input.value);
                        break;


                case "foot-kilometre":
                        input.value =  unitMultiply(result.value,0.0003048);
                        console.log(input.value);
                        break;
                case "foot-metre":
                        input.value =  unitMultiply(result.value,0.3048);
                        console.log(input.value);
                        break;
                case "foot-centimetre":
                        input.value =  unitMultiply(result.value,30.48);
                        console.log(input.value);
                        break;
                case "foot-millimetre":
                        input.value =  unitMultiply(result.value,304.8);
                        console.log(input.value);
                        break;
                case "foot-micrometre" :
                        input.value =  unitMultiply(result.value,304800);
                        console.log(input.value);
                        break;
                case "foot-mile":
                        input.value =  unitMultiply(result.value,0.000189394);
                        console.log(input.value);
                        break;
                case "foot-foot":
                        input.value = result.value;                        
                        console.log(input.value);
                        break;
                case "foot-inch":
                        input.value =  unitMultiply(result.value,12);
                        console.log(input.value);
                        break;

        
                case "inch-kilometre":
                        input.value =  unitMultiply(result.value,0.000025400276352);
                        console.log(input.value);
                        break;
                case "inch-metre":
                        input.value =  unitMultiply(result.value,0.025400276352);
                        console.log(input.value);
                        break;
                case "inch-centimetre":
                        input.value =  unitMultiply(result.value,2.5400276352);
                        console.log(input.value);
                        break;
                case "inch-millimetre":
                        input.value =  unitMultiply(result.value,25.400276352);
                        console.log(input.value);
                        break;
                case "inch-micrometre" :
                        input.value =  unitMultiply(result.value,25400.276352);
                        console.log(input.value);
                        break;
                case "inch-mile":
                        input.value =  unitMultiply(result.value,0.000015783);
                        console.log(input.value);
                        break;
                case "inch-foot":
                        input.value =  unitMultiply(result.value,0.0833333);
                        console.log(input.value);
                        break;
                case "inch-inch":
                        input.value = result.value;                        
                        console.log(input.value);
                        break;
    }
}

function fromTo() {
        inputValue2 = inputType.value;
        resultValue2 = resultType.value;
        let output2 = inputValue2 + "-" +resultValue2;

        switch(output2) {
                case "kilometre-kilometre" :
                        result.value = input.value;                        
                        console.log(result.value);
                        break;
                case "kilometre-metre":
                        result.value =  unitMultiply(input.value,1000);
                        console.log(result.value);
                        break;
                case "kilometre-centimetre":
                        result.value =  unitMultiply(input.value,100000);
                        console.log(result.value);
                        break;
                case "kilometre-millimetre":
                        result.value =  unitMultiply(input.value,1000000);
                        console.log(result.value);
                        break;
                case "kilometre-micrometre":
                        result.value =  unitMultiply(input.value,1000000000);
                        console.log(result.value);
                        break;
                case "kilometre-mile":
                        result.value =  unitMultiply(input.value,0.621371);
                        console.log(result.value);
                        break;
                case "kilometre-foot":
                        result.value =  unitMultiply(input.value,3280.84);
                        console.log(result.value);
                        break;
                case "kilometre-inch":
                        result.value =  unitMultiply(input.value,39370.1);
                        console.log(result.value);
                        break;


                case "metre-kilometre" :              
                        result.value =  unitMultiply(input.value,0.001);
                        console.log(result.value);
                        break;
                case "metre-metre" :
                        result.value = input.value;                       
                        console.log(result.value);
                        break;       
                case "metre-centimetre" :
                        result.value =  unitMultiply(input.value,100);
                        console.log(result.value);
                        break;        
                case "metre-millimetre":
                        result.value =  unitMultiply(input.value,1000);
                        console.log(result.value);
                        break;
                case "metre-micrometre":
                        result.value =  unitMultiply(input.value,1000000);
                        console.log(result.value);
                        break;
                case "metre-mile":
                        result.value =  unitMultiply(input.value,0.000621371);
                        console.log(result.value);
                        break;
                case "metre-foot":
                        result.value =  unitMultiply(input.value,3.28084);
                        console.log(result.value);
                        break;
                case "metre-inch":
                        result.value =  unitMultiply(input.value,39.3701);
                        console.log(result.value);
                        break;


                case "centimetre-kilometre":
                        result.value =  unitMultiply(input.value,0.00001);
                        console.log(result.value);
                        break;
                case "centimetre-metre":
                        result.value =  unitMultiply(input.value,0.01);
                        console.log(result.value);
                        break;
                case "centimetre-centimetre" :
                        result.value = input.value;                        
                        console.log(result.value);
                        break;                
                case "centimetre-millimetre":
                        result.value =  unitMultiply(input.value,10);
                        console.log(result.value);
                        break;
                case "centimetre-micrometre":
                        result.value =  unitMultiply(input.value,10000);
                        console.log(result.value);
                        break;
                case "centimetre-mile":
                        result.value =  unitMultiply(input.value,0.0000062137);
                        console.log(result.value);
                        break;
                case "centimetre-foot":
                        result.value =  unitMultiply(input.value,0.0328084);
                        console.log(result.value);
                        break;
                case "centimetre-inch":
                        result.value =  unitMultiply(input.value,0.393701);
                        console.log(result.value);
                        break;


                case "millimetre-kilometre":
                        result.value =  unitMultiply(input.value,0.000001);
                        console.log(result.value);
                        break;
                case "millimetre-metre":
                        result.value =  unitMultiply(input.value,0.001);
                        console.log(result.value);
                        break;
                case "millimetre-centimetre":
                        result.value =  unitMultiply(input.value,0.1);
                        console.log(result.value);
                        break;
                case "millimetre-millimetre" :
                        result.value = input.value;                        
                        console.log(result.value);
                        break;
                case "millimetre-micrometre":
                        result.value =  unitMultiply(input.value,1000);
                        console.log(result.value);
                        break;
                case "millimetre-mile":
                        result.value =  unitMultiply(input.value,0.00000062137);
                        console.log(result.value);
                        break;
                case "millimetre-foot":
                        result.value =  unitMultiply(input.value,0.00328084);
                        console.log(result.value);
                        break;
                case "millimetre-inch":
                        result.value =  unitMultiply(input.value,0.0393701);
                        console.log(result.value);
                        break;


                case "micrometre-kilometre":
                        result.value =  unitMultiply(input.value,0.000000001);
                        console.log(result.value);
                        break;
                case "micrometre-metre":
                        result.value =  unitMultiply(input.value,0.000001);
                        console.log(result.value);
                        break;
                case "micrometre-centimetre":
                        result.value =  unitMultiply(input.value,0.0001);
                        console.log(result.value);
                        break;
                case "micrometre-millimetre":
                        result.value =  unitMultiply(input.value,0.001);
                        console.log(result.value);
                        break;
                case "micrometre-micrometre" :
                        result.value = input.value;                        
                        console.log(result.value);
                        break;
                case "micrometre-mile":
                        result.value =  unitMultiply(input.value,0.00000000062137);
                        console.log(result.value);
                        break;
                case "micrometre-foot":
                        result.value =  unitMultiply(input.value,0.00000328084);
                        console.log(result.value);
                        break;
                case "micrometre-inch":
                        result.value =  unitMultiply(input.value,0.000039370079);
                        console.log(result.value);
                        break;


                case "mile-kilometre":
                        result.value =  unitMultiply(input.value,1.60934);
                        console.log(result.value);
                        break;
                case "mile-metre":
                        result.value =  unitMultiply(input.value,1609.34);
                        console.log(result.value);
                        break;
                case "mile-centimetre":
                        result.value =  unitMultiply(input.value,160934);
                        console.log(result.value);
                        break;
                case "mile-millimetre":
                        result.value =  unitMultiply(input.value,1609340);
                        console.log(result.value);
                        break;
                case "mile-micrometre" :
                        result.value =  unitMultiply(input.value,1609340000);
                        console.log(result.value);
                        break;
                case "mile-mile":
                        result.value = input.value;                        
                        console.log(result.value);
                        break;
                case "mile-foot":
                        result.value =  unitMultiply(input.value,5280);
                        console.log(result.value);
                        break;
                case "mile-inch":
                        result.value =  unitMultiply(input.value,63360);
                        console.log(result.value);
                        break;


                case "foot-kilometre":
                        result.value =  unitMultiply(input.value,0.0003048);
                        console.log(result.value);
                        break;
                case "foot-metre":
                        result.value =  unitMultiply(input.value,0.3048);
                        console.log(result.value);
                        break;
                case "foot-centimetre":
                        result.value =  unitMultiply(input.value,30.48);
                        console.log(result.value);
                        break;
                case "foot-millimetre":
                        result.value =  unitMultiply(input.value,304.8);
                        console.log(result.value);
                        break;
                case "foot-micrometre" :
                        result.value =  unitMultiply(input.value,304800);
                        console.log(result.value);
                        break;
                case "foot-mile":
                        result.value =  unitMultiply(input.value,0.000189394);
                        console.log(result.value);
                        break;
                case "foot-foot":
                        result.value = input.value;                        
                        console.log(result.value);
                        break;
                case "foot-inch":
                        result.value =  unitMultiply(input.value,12);
                        console.log(result.value);
                        break;

        
                case "inch-kilometre":
                        result.value =  unitMultiply(input.value,0.000025400276352);
                        console.log(result.value);
                        break;
                case "inch-metre":
                        result.value =  unitMultiply(input.value,0.025400276352);
                        console.log(result.value);
                        break;
                case "inch-centimetre":
                        result.value =  unitMultiply(input.value,2.5400276352);
                        console.log(result.value);
                        break;
                case "inch-millimetre":
                        result.value =  unitMultiply(input.value,25.400276352);
                        console.log(result.value);
                        break;
                case "inch-micrometre" :
                        result.value =  unitMultiply(input.value,25400.276352);
                        console.log(result.value);
                        break;
                case "inch-mile":
                        result.value =  unitMultiply(input.value,0.000015783);
                        console.log(result.value);
                        break;
                case "inch-foot":
                        result.value =  unitMultiply(input.value,0.0833333);
                        console.log(result.value);
                        break;
                case "inch-inch":
                        result.value = input.value;                        
                        console.log(result.value);
                        break;
        }
}