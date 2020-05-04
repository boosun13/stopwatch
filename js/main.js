"use script";
{
const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let startTime;
let timeoutId;
let elapsedTime = 0;

function countUp(){
    // console.log(Date.now() - startTime);
    const d = new Date(Date.now() - startTime + elapsedTime);
    const m = String(d.getMinutes()).padStart(2, "0");
    const s = String(d.getSeconds()).padStart(2, "0");
    const ms = String(d.getMilliseconds()).padStart(3, "0");
    timer.textContent = `${m}:${s}.${ms}`;

    timeoutId = setTimeout(() =>{
        countUp();
    }, 10);
}

start.addEventListener("click", () =>{
    startTime = Date.now()
    countUp();
});

stop.addEventListener("click", () =>{
    clearTimeout(timeoutId);
    // setTimeout のキャンセル
    elapsedTime += Date.now() - startTime;
    //止めた時間を定数として記録。総数とするために+=としている。
});

reset.addEventListener("click", () =>{
    timer.textContent = "00:00.000";
    elapsedTime = 0;
    //定数を元にも戻す。
});

}
