const result = document.getElementById('result_text');
const input = document.getElementById('gen_input');

document.getElementById('gen_btn').addEventListener('click', function() {

    code = binaryAgent(input.value);
    result.innerHTML = code;
    
});

function binaryAgent(str) {
    var newBin = str.split(" ");
    var binCode = [];
    for (i = 0; i < newBin.length; i++) {
        binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
    }
    return binCode.join("");
}