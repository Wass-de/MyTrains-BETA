var counter = 45;

setInterval(function(){
    counter--;

    if(counter >= 0){
        id = document.getElementById("countdown2");
        id.innerHTML = "00:" + counter;
    }
}, 1000);