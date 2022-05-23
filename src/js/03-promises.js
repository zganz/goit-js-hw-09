import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";


const formEl = document.querySelector('.form');
const firstDelay = document.querySelector('[name="delay"]');
const stepDelay = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');


formEl.addEventListener('submit', clickBtn);

function clickBtn(event) {
   event.preventDefault();
  const delay = Number(firstDelay.value);
  const step = Number(stepDelay.value);
  const amount = Number(amountEl.value);
  let delayStep = delay;
  for (let i = 1; i <= amount; i++) {
    
    createPromise(i, delayStep)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    delayStep += step;
  };

  
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.5;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay } );
      }
      else {
        reject({ position, delay });
      }
    }, delay)
  })
  
}