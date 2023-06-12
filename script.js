let output = document.getElementById("display");
let result = document.getElementById("result");

function clearDisplay() {
    output.value = "";
    result.value = "";
}

function evaluateResult() {
    let final_result = eval(output.value);
    result.value = final_result;
}