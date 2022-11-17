const indice = document.getElementById('indice');
const btn = document.getElementById('exit');


indice.onclick = function () {
    alert('L\'Inspecteur peut vous aider...');
}
exit.onclick = function () {
    if(exit.disabled == false){
        exit.className.add = 'pointer';
        var a = document.createElement('a');
        a.href = exit;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    
}