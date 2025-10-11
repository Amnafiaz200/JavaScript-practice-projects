// let intervalId = null;

//     // Function to generate random color
//     function getRandomColor() {
//       const r = Math.floor(Math.random() * 256);
//       const g = Math.floor(Math.random() * 256);
//       const b = Math.floor(Math.random() * 256);
//       return `rgb(${r}, ${g}, ${b})`;
//     }

//     // Start changing background
//     document.getElementById('start').addEventListener('click', () => {
//       if (!intervalId) {  // prevent multiple intervals
//         intervalId = setInterval(() => {
//           document.body.style.backgroundColor = getRandomColor();
//         }, 1000);
//       }
//     });

//     // Stop changing background
//     document.getElementById('stop').addEventListener('click', () => {
//       clearInterval(intervalId);
//       intervalId = null; // reset so you can start again
//     });

// second method:
    //generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

