// tady je místo pro náš program

let nadpis = document.querySelector('h1');
nadpis.classList.add('zeleny');
nadpis.classList.remove('zeleny');

let cverecek = document.querySelector('div.zluty');
cverecek.classList.add('ctverecek');

function zbarviNaCerveno(){
    odstavec = document.getElementById("lev");
    odstavec.classList.toggle("cerveny");
}