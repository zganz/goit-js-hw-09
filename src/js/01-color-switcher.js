function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  const body = document.querySelector('body');
  const startBtn = document.querySelector('[data-start]');
  const stopBtn = document.querySelector('[data-stop]');

body.addEventListener('click', findClick);


let timerId = null;


function findClick(evt){
    if(evt.target.hasAttribute("data-start")){
      startBtn.disabled = true;
      stopBtn.disabled = false;
      timerId = setInterval(setBodyColor, 1000);
      
    }

    if(evt.target.hasAttribute("data-stop")){
      clearInterval(timerId);
      startBtn.disabled = false;
      stopBtn.disabled = true;
      
    }
    
}

function setBodyColor(){
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  
}

 


 

