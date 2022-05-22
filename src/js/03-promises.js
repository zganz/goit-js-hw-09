
form = document.querySelector('form'),
firstDelay = document.querySelector('[name="delay"]'),
stepDelay = document.querySelector('[name="step"]'),
amountEl = document.querySelector('[name="amount"]'),


form.addEventListener('submit', clickBtn);

function clickBtn(event) {
   event.preventDefault();
  const delay = Number(firstDelay.value);
  const step = Number(stepDelay.value);
  const amount = Number(amountEl.value);
  let delayStep = delay;
  for (let i = 1; i <= amount; i++) {
    
    createPromise(i, delayStep)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
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
  
};