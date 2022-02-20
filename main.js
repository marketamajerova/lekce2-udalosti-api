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

let audioFile = document.getElementById("zvukovaStopa");

function startAudio() {
    audioFile.play();
}

function pauseAudio() {
    audioFile.pause();
}

function quitDownAudio() {
    audioFile.volume = 0.1;
}

function middleVolume() {
    audioFile.volume = 0.5;
}

function maxVolume() {
    audioFile.volume = 1;
}

function restartAudio() {
    audioFile.load();
    audioFile.play();
}

