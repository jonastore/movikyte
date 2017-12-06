function init() {

    document.getElementById('#top10').onclick = openTab('top10');
    document.getElementById('#latest').onclick = openTab('latest');
    document.getElementById('#trailers').onclick = openTab('trailers');
}

window.onload = init;

/*
function openTab(inside) {
    var i, tabcontent;

    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    document.getElementById('inside').style.display = "block";
}*/

function openTab(tabName) {
    //let i; 
    //let tabcontent; 
    //let tablinks;



    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    /*tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }*/

    document.getElementById(tabName).style.display = "block";
    //evt.currentTarget.className += " active";
}
