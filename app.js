let i = 0; 
let images = []; //array
let time = 2000; //in millisseconds 

// images 

images[0] = 'url(img/2812903-min.jpg)';
images[1] = 'url(img/burger-2.jpg)';
images[2] = 'url(img/2812903-min.jpg)';

// function to change background image 

function changeImage() {
 let body = document.getElementById('body');
 body.style.backgroundImage = images[i];
 if(i<images.length-1) {
     i++
 } else {
     i=0;
 }
setTimeout('changeImage()', time );
}

window.onload = changeImage;