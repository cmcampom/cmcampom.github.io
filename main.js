function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
 }


 var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}



var slideIndexMP = 1;
showDivsMP(slideIndexMP);

function plusDivsMP(n) {
    showDivsMP(slideIndex += n);
}

function showDivsMP(n) {
    var i;
    var x = document.getElementsByClassName("mySlidesMP");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}





var slideIndexAu = 1;
showDivsAu(slideIndexAu);

function plusDivsAu(n) {
    showDivsAu(slideIndex += n);
}

function showDivsAu(n) {
    var i;
    var x = document.getElementsByClassName("mySlidesAu");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}






var slideIndexC = 1;
showDivsC(slideIndexC);

function plusDivsC(n) {
    showDivsC(slideIndex += n);
}

function showDivsC(n) {
    var i;
    var x = document.getElementsByClassName("mySlidesC");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}


