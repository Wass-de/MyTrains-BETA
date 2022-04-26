var counter = 15;

setInterval(function(){
    counter--;

    if(counter >= 0){
        id = document.getElementById("countdown");
        id.innerHTML = "00:" + counter;
    }
}, 1000);