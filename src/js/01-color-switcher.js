function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  const body = document.querySelector('body');
//   const sartBtn = document.querySelector('[data-start]');
//   const stopBtn = document.querySelector('[data-stop]');
//   sartBtn.addEventListener('click', setBodyColor);
//   stopBtn.addEventListener('click', clearBodyColor);

body.addEventListener('click', findClick);

function findClick(evt){
    if(evt.target.hasAttribute("data-start")){
        setInterval(setBodyColor, 1000);
    }
    
}



  function setBodyColor(){
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
    
  }

//   function clearBodyColor(){
//     clearInterval(setBodyColor, 1000);
//     body.style.backgroundColor = color;

//   }