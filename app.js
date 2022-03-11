let startbutton = document.getElementById("startbutton");
let resetbutton = document.getElementById("resetbutton");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let milisecond = document.getElementById("milisecond");

let Interval;

let myMinute = 0;
startbutton.addEventListener("click", () => {
    if(startbutton.innerHTML == "Start") {
        startbutton.innerHTML = "Puse";
        Interval = setInterval(() => {
            milisecond.innerHTML = ((Number(milisecond.innerHTML) + 1) %100).toString().padStart(2, "0");
            if(milisecond.innerHTML == "00") {
                second.innerHTML = ((Number(second.innerHTML) + 1) %60).toString().padStart(2, "0")
            }
            if(second.innerHTML == "59") {
                myMinute ++
                if((myMinute % 100) == 0) {
                    minute.innerHTML = (Number(minute.innerHTML) + 1).toString().padStart(2, "0")
                }            
            }
        }, 10)
        


    }else {
        startbutton.innerHTML = "Start";
        clearInterval(Interval)
    }
});

resetbutton.addEventListener("click", () => {
    second.innerHTML = "00";
    minute.innerHTML = "00";
    milisecond.innerHTML = "00"
})

