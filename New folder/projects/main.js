const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minutes');
const secondEl = document.getElementById('seconds')
const am_pmEl = document.getElementById('am-pm');

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"
    if(h > 12){
        h = h - 12
        ampm = "PM"
    }

    h = h <10 ? "0" + h : h;    
    m = m <10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s   

     hourEl.innerHTML = h;
     minuteEl.innerHTML = m;
     secondEl.innerHTML = s;
     am_pmEl.innerHTML = ampm;
     setTimeout(()=>{
        updateClock()
     },1000)

}
updateClock()