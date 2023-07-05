const input =document.getElementById("input");
const output =document.getElementById("output");
const ctaBtn =document.getElementById("cta-btn");
const errorMessage =document.getElementById("error-msg");
const romanObjects = {
    X̅:10000,
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1,
};

ctaBtn.addEventListener("click", ()=>{
 inputToRoman(input.value);
 input.value="";
 input.value= focus();
});


function inputToRoman(num){
    let number = parseInt(num);

    if(num.trim().length == 0){
        errorMessage.innerHTML = "Invalid Input"
        output.innerHTML="";
        return false;
    }
    if(number > 9999 || number < 1){
        errorMessage.innerHTML = "Input out of range";
        output.innerHTML="";
        return false;
    }
    errorMessage.innerHTML = "";
    output.innerHTML ="";

    let result="";
    let romanValues = Object.keys(romanObjects);
    romanValues.forEach((key)=>{
        while(romanObjects[key] <= number){
            number -=romanObjects[key];
            result +=key;
        }
    });
    output.innerHTML = result;

   
}

