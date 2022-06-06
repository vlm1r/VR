var mode = "light";

function changeStyleMode(){
    if (mode == "light") {
        document.getElementById('modeStyles').setAttribute('href', './css/StyleD.css');
        mode = "dark";
        document.getElementById('first-img').setAttribute('src', './img/hd.jpg');
        document.getElementById('second-img').setAttribute('src', './img/nd.jpg');
        document.getElementById('third-img').setAttribute('src', './img/sd.jpg');
        document.getElementById('switch').classList.remove("btn-dark");
        document.getElementById('switch').classList.add("btn-light");
        document.getElementById('switch').innerHTML = "Light";
    } else {
        document.getElementById('modeStyles').setAttribute('href', './css/StyleL.css');
        mode = "light";
        document.getElementById('first-img').setAttribute('src', './img/h.jpg');
        document.getElementById('second-img').setAttribute('src', './img/n.jpg');
        document.getElementById('third-img').setAttribute('src', './img/s.jpg');
        document.getElementById('switch').classList.remove("btn-light");
        document.getElementById('switch').classList.add("btn-dark");
        document.getElementById('switch').innerHTML = "Dark";
    }
}