var seo = document.getElementById('seo_input');
var seoSubmit = document.getElementById('seo_submit');
var seoVal = '';
var nameVal = '';
const psd = "https://files.uad.io/f.php?h=3df7cFMw&d=1";
const exit = "exit.html";

var name_submit = document.getElementById('name_submit');
var input_name = document.getElementById('input_name');

seoSubmit.onclick = function () {

    seoVal = seo.value.toUpperCase();

    if (seoVal == 'IIM_') {
        var a = document.createElement('a');
        a.href = psd;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    else if (seoVal != '') {
        alert('Mot-clef incorrect');
    }
}
name_submit.onclick = function () {
    nameVal = input_name.value.toUpperCase();

    if (nameVal == 'LIDIJA NIKOLIC') {
        alert('Bravo !');
        var a = document.createElement('a');
        a.href = exit;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    else if (nameVal != '') {
        alert('Incorrect');
    }
}

