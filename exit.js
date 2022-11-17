const indice = document.getElementById('indice');
const exit = document.getElementById('exit');
const path = "congratulation.html";



indice.onclick = function () {
    alert('"Disabled" ? L\'Inspecteur peut vous aider...');
}
exit.onclick = function () {
    if(exit.disabled == false){
        var a = document.createElement('a');
        a.href = path;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    
}