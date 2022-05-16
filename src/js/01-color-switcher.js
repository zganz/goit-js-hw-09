function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const body = document.querySelector("body");
  console.log(body);
  body.addEventListener('click', setBodyColor);

  function setBodyColor(){
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
  }