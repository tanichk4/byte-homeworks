// let intervalId = null;

// const start = () => {
//     if(!intervalId) {
//     intervalId = setInterval(() => {
//         const random = Math.random();
//         console.log('random', random)
//         }, 300)
//     }
// };

// const stop = () => {
//     clearInterval(intervalId)
//     intervalId = null;
// };

// const startBtn = document.createElement('button');
// const stopBtn = document.createElement('button');
// startBtn.innerText = 'start';
// stopBtn.innerText = 'stop';
// startBtn.addEventListener('click', start);
// stopBtn.addEventListener('click', stop);

// document.body.append(startBtn, stopBtn);

// будильник

const alarmTimeInput = document.getElementById('time');
const setAlarmBtn = document.getElementById('startAlarm');
let alertTime = null;

const onAlarm = () => {
    alert('БУДИЛЬНИК!!!')
};

const handleTimeChange = ({ target: { value } }) => {
    console.log('value', value)
    const [hour, minutes] = value.split(':');
    const time = new Date();
    time.setHours(hour);
    time.setMinutes(minutes);
    time.setSeconds(0);

    alertTime = time;
};

const setAlarm = (action) => {
    if(!alertTime) {
        alert('Ви не вказали час!');
        return;
    }

    const timeoutTime = alertTime.getTime() - Date.now();
    alert(`Будильник заведений на ${alertTime}`)
    console.log(timeoutTime);
    setTimeout(action, timeoutTime)
};

alarmTimeInput.addEventListener('change', handleTimeChange);
setAlarmBtn.addEventListener('click', () => {
    setAlarm(onAlarm);
}); 
