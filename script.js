const gradientBox = document.querySelector('.gradient-box');
const selectMenu = document.querySelector('.select-box select');
const colorInputs = document.querySelectorAll('.colors input');
const textarea = document.querySelector('textarea');
const refreshBotton = document.querySelector('.refresh');
const copyBotton = document.querySelector('.copy');
// console.log(colorInputs)

const getRandomColor = () => {
    const randomHex = Math.floor(Math.random() * 0xFfFfFf).toString(16);
    return `#${randomHex}`;
}

const generatorGradient = (isRandom) => {
    if (isRandom) { // if isRandom true, update the color inputs value with random color
       colorInputs[0].value = getRandomColor();
       colorInputs[1].value = getRandomColor();
    }
    // creating a gradient string using the select menu  with color input values

   // console.log('Color update...')
   const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
   gradientBox.style.background = gradient;
   textarea.value = `background: ${gradient};`;
}

const copyCode = () => {navigator.clipboard.writeText(textarea.value); copyBotton.innerText = "Code copied";
 setTimeout(() => copyBotton.innerText = 'Copy code', 1221);}

colorInputs.forEach(input => {
    input.addEventListener('input', () => generatorGradient(false))
});

selectMenu.addEventListener('change', () => generatorGradient(false));
refreshBotton.addEventListener('click', () =>  generatorGradient(true));
copyBotton.addEventListener('click', copyCode)