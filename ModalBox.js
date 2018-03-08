window.onload = function() {

    var backImage = document.getElementById("body-image");
    var header = document.getElementsByClassName("h1-wrapper");
    
//  BLUE EYES DRAGONS START
    
    var but1 = document.getElementsByClassName("left-button");
    var but2 = document.getElementsByClassName("center-button");
    var but3 = document.getElementsByClassName("right-button");
    var but4 = document.getElementsByClassName("poly-button");
    
    var drag1 = document.getElementsByClassName("blue-eyes1");
    var drag2 = document.getElementsByClassName("blue-eyes2");
    var drag3 = document.getElementsByClassName("blue-eyes3");
    var ultdrag = document.getElementsByClassName("ultimate-dragon");
    
    var count = 0;

    but1[0].addEventListener("click", summonD1);
    but2[0].addEventListener("click", summonD2);
    but3[0].addEventListener("click", summonD3);
    but4[0].addEventListener("click", polymerization);
    ultdrag[0].addEventListener("click", reset);
    
    function summonD1() {
        drag1[0].style.display = "inline";
        but1[0].style.display = "none";
        count++;
        if(count >= 3) {
            but1[0].style.display = "none";
            but2[0].style.display = "none";
            but3[0].style.display = "none";
            but4[0].style.display = "inline";
            changeButton[0].style.display = "inline";
        }
    }
    function summonD2() {
        drag2[0].style.display = "inline";
        but2[0].style.display = "none";
        count++;
        if(count >= 3) {
            but1[0].style.display = "none";
            but2[0].style.display = "none";
            but3[0].style.display = "none";
            but4[0].style.display = "inline";
            changeButton[0].style.display = "inline";
        }
    }
    function summonD3() {
        drag3[0].style.display = "inline";
        but3[0].style.display = "none";
        count++;
        if(count >= 3) {
            but1[0].style.display = "none";
            but2[0].style.display = "none";
            but3[0].style.display = "none";
            but4[0].style.display = "inline";
            changeButton[0].style.display = "inline";
        }
    }
    function polymerization() {
        backImage.style.backgroundImage = "url(Ultimatedragonbackground.png)"
        ultdrag[0].style.display = "inline";
        but1[0].style.display = "none";
        but2[0].style.display = "none";
        but3[0].style.display = "none";
        but4[0].style.display = "none";
        drag1[0].style.display = "none";
        drag2[0].style.display = "none";
        drag3[0].style.display = "none";
        changeButton[0].style.display = "none";
        
    }
    
    function reset() {
        but1[0].style.display = "inline";
        but2[0].style.display = "inline";
        but3[0].style.display = "inline";
        ultdrag[0].style.display = "none";
        backImage.style.backgroundImage = "url(spacetech.jpg)";
        count = 0;
    }
//  BLUE EYES WHITE DRAGON END
    
//  EXODIA START
    var changeButton = document.getElementsByClassName("monster-change");
    
    var count2 = 0;
    
    var headbut = document.getElementsByClassName("head-button");
    var rarmbut = document.getElementsByClassName("right-arm-button");
    var rlegbut = document.getElementsByClassName("right-leg-button");
    var larmbut = document.getElementsByClassName("left-arm-button");
    var llegbut = document.getElementsByClassName("left-leg-button");
    
    var obliterateButton = document.getElementsByClassName("obliterate-button");
    
    var head = document.getElementsByClassName("head");
    var rarm = document.getElementsByClassName("right-arm");
    var rleg = document.getElementsByClassName("right-leg");
    var larm = document.getElementsByClassName("left-arm");
    var lleg = document.getElementsByClassName("left-leg");
    var fullexodia = document.getElementsByClassName("full-exodia");
    
    changeButton[0].addEventListener("click", changeScreen);
    headbut[0].addEventListener("click", summonHead);
    rarmbut[0].addEventListener("click", summonRightArm);
    rlegbut[0].addEventListener("click", summonRightLeg);
    larmbut[0].addEventListener("click", summonLeftArm);
    llegbut[0].addEventListener("click", summonLeftLeg);
    
    obliterateButton[0].addEventListener("click", obliterate);
    
    fullexodia[0].addEventListener("click", exodiaReset);
    
    function changeScreen() {
        backImage.style.backgroundImage = "url(sandback.jpg!d)";
        header[0].style.display = "none";
        but1[0].style.display = "none";
        but2[0].style.display = "none";
        but3[0].style.display = "none";
        but4[0].style.display = "none";
        drag1[0].style.display = "none";
        drag2[0].style.display = "none";
        drag3[0].style.display = "none";
        changeButton[0].style.display = "none";
        headbut[0].style.display = "inline";
        rarmbut[0].style.display = "inline";
        rlegbut[0].style.display = "inline";
        larmbut[0].style.display = "inline";
        llegbut[0].style.display = "inline";
    }
    
    function summonHead() {
        head[0].style.display = "inline";
        headbut[0].style.display = "none";
        count2++;
        if(count2 >= 5) {
            obliterateButton[0].style.display = "inline";
        }
    }
    function summonRightArm() {
        rarm[0].style.display = "inline";
        rarmbut[0].style.display = "none";
        count2++;
        if(count2 >= 5) {
            obliterateButton[0].style.display = "inline";
        }
    }
    function summonRightLeg() {
        rleg[0].style.display = "inline";
        rlegbut[0].style.display = "none";
        count2++;
        if(count2 >= 5) {
            obliterateButton[0].style.display = "inline";
        }
    }
    function summonLeftArm() {
        larm[0].style.display = "inline";
        larmbut[0].style.display = "none";
        count2++;
        if(count2 >= 5) {
            obliterateButton[0].style.display = "inline";
        }
    }
    function summonLeftLeg() {
        lleg[0].style.display = "inline";
        llegbut[0].style.display = "none";
        count2++;
        if(count2 >= 5) {
            obliterateButton[0].style.display = "inline";
        }
    }
    
    function obliterate() {
        backImage.style.backgroundImage = "url(hieroglyphics.png)";
        obliterateButton[0].style.display = "none";
        head[0].style.display = "none";
        rarm[0].style.display = "none";
        rleg[0].style.display = "none";
        larm[0].style.display = "none";
        lleg[0].style.display = "none";
        fullexodia[0].style.display = "inline";
        
    }
    
    function exodiaReset() {
        fullexodia[0].style.display = "none";
        but1[0].style.display = "inline";
        but2[0].style.display = "inline";
        but3[0].style.display = "inline";
        backImage.style.backgroundImage = "url(spacetech.jpg)";
        header[0].style.display = "inline";
        header[0].style.margin = "0% 0% 0% 43.8%"
        count = 0;
        count2 = 0;
    }
    
//  EXODIA END
    
    
}