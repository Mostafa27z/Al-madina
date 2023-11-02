// NAV SCROLL
window.onscroll = function () {
    
    if (document.body.scrollTop > 60 && screen.width > 992){
        document.getElementById('nav').style.backgroundColor = "black";
        document.getElementById('nav').style.marginTop = 0;
        console.log(123);
    }
    else if (screen.width > 992){
        document.getElementById('nav').style.backgroundColor = "transparent";
        document.getElementById('nav').style.marginTop = "20px";
        
    }
    
}
// BACKGROUND VIDEO
var head = document.getElementById('head');
function vid(i) {
        if (i == 0) {
            head.style.backgroundImage = "url(./assets/images/welcome-hero/header.jpg)";
            
            
        } else if(i==1) {
            head.style.backgroundImage = "url(./assets/images/welcome-hero/download.jpg)";
           
        }
        else if(i==2) {
            head.style.backgroundImage = "url(./assets/images/welcome-hero/head.png)";
           
        }
        
        
    }
    let z = 1;

 
  setInterval(() => {
   if(z==0){
    vid(0);
    z= 1;
    } 
    else if(z==1){
        vid(1);
        z=2;
    }
    else{
        vid(2);
        z=0;
    }
   
}, 5000);  


