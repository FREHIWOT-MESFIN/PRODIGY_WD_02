let startTime;
let elapsedTime = 0;
let timeInterval;

function startTimer(){
    startTime = Date.now() - elapsedTime;
    timeInterval = setInterval(updateTime, 10);
}

function stopTimer(){
    clearInterval(timeInterval);
}

function resetTimer(){
    clearInterval(timeInterval);
    elapsedTime = 0;
    startTime = Date.now() - elapsedTime;
    updateTime();
    document.querySelector('.lap').innerHTML = '';
}

function lapTime(){
    let lap = document.getElementById('time').textContent;
    let display = document.querySelector('.lap');
    let div = document.createElement('div')
    div.innerText = lap
    display.appendChild(div)
}
function updateTime(){
    let currentTime = Date.now()
    elapsedTime = currentTime - startTime
    const formattedTime = formatTime(elapsedTime)
    document.getElementById('time').textContent = formattedTime;
}

function formatTime(time){
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return(
        padTime(hours) + ':' +
        padTime(minutes) + ':' +
        padTime(seconds) + '.' +
        padTime(milliseconds)
    );
}

function padTime(time){
    return time < 10 ? '0' + time : time;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', lapTime);