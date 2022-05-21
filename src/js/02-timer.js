import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

//////////////////////elements///////////////////////////////////////
const inputEl = document.querySelector('#datetime-picker');
const buttonEl = document.querySelector('[data-start]')
const dayss = document.querySelector('[data-days]')
const hours = document.querySelector('[data-hours]')
const minute = document.querySelector('[data-minutes]')
const second = document.querySelector('[data-seconds]')


////////////////////////variables//////////////////////////////////////
let setTime = null;
let currentTime = Date.now();
let data = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    setTime = selectedDates[0].getTime();
    // console.log(selectedDates[0]);
    currentTime = Date.now();

    
    if( currentTime > selectedDates[0]) {
      disabledBtn(true);
      window.alert("Please choose a date in the future")
    }
    else{
      disabledBtn(false);
    }
    

    
  },
};
flatpickr(inputEl, options);

function disabledBtn(isActive){
  buttonEl.disabled = isActive;
}

////////////////////////listener///////////////////////////////////////
buttonEl.addEventListener('click', onStart);
disabledBtn(true);

function onStart(){
  currentTime = Date.now();
  decSetTime();
  setInterval(update, 1000);
  disabledBtn(true);
  
  
}



function decSetTime(){
  let decTime = setTime - currentTime;
  
  data = getTimeComponents(decTime);
  
}



function update (){
  currentTime = Date.now();
  decSetTime();
  
  if(data){
  dayss.textContent = `${data.days}`
  hours.textContent = `${data.hours}`
  minute.textContent = `${data.mins}`
  second.textContent = `${data.secs}`

}
}

    
  
  
  function getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    
    

    return { days, hours, mins, secs };
  }
 

  
  
  
  

  

  

  
  
