let nadpis = document.querySelector('h1');
nadpis.classList.add('zeleny');
nadpis.classList.remove('zeleny');

let cverecek = document.querySelector('div.zluty');
cverecek.classList.add('ctverecek');

let odstavec = document.getElementById("lev");

function zbarviNaCerveno() {
    odstavec.classList.toggle("cerveny");
}

function zvetsiPoKliknuti() {
    /* Casti funkce vypujceny ze stack overflow. Moje pokusy nefungovaly. 
    Jednotlive funkce jsem si vsak vyhledala v dokumentaci a mam poci, ze je dostatecne chapu. */
    
    style = window.getComputedStyle(odstavec).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    odstavec.style.fontSize = (currentSize + 1) + 'px';
}