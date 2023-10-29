window.onscroll = function () {
    if (document.body.scrollTop > 50 && screen.width > 992){
        document.getElementById('nav').style.backgroundColor = "black";
        document.getElementById('nav').style.marginTop = 0;
    }
    else if (screen.width > 992){
        document.getElementById('nav').style.backgroundColor = "transparent";
        document.getElementById('nav').style.marginTop = "20px";
    }
    console.log(screen.width);
}