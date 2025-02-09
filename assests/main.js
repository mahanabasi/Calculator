const theme1=document.getElementById('theme1');
const theme2=document.getElementById('theme2');
const theme3=document.getElementById('theme3');
const buttons=document.querySelectorAll('button');
const calculator={
    displayvalue:'0',
    firstOperand:null,
    haveSecondOperand:false,
    operator:null
}

const existingTheme=localStorage.getItem('calculator-theme')? localStorage.getItem('calculator-theme'):'theme1';
const themeToggles=document.querySelectorAll('label');
const decimalpercision=10;

function toggletheme(switchToTheme){
    document.documentElement.setAttribute('data-theme',switchToTheme);
    themeToggles.forEach(theme=>theme.classList.remove('toggle-on'))
    switchToTheme==='theme1' ? themeToggles[0].classList.add('toggle-on'):switchToTheme==='theme2'? themeToggles[1].classList.add('toggle-on'):switchToTheme==='theme3'?themeToggles[2].classList.add('toggle-on'):'theme1'
    localStorage.setItem('calculator-theme',switchToTheme);
}

if(existingTheme){
    toggletheme(existingTheme);
}

theme1.addEventListener('click',()=>{
    toggletheme('theme1');
})

theme2.addEventListener('click',()=>{
    toggletheme('theme2');
})

theme3.addEventListener('click',()=>{
    toggletheme('theme3');
})
 function handleOperator(nexOperator){

 }
 function updateDisplay(){
    const display=document.getElementById('display')
    display.textContent=Number(calculator.displayvalue)<=999999999 ? Number(calculator.displayvalue).toLocaleString('en-US',{maximumFractionDigits:decimalpercision}):Number(calculator.displayvalue).toExponential(4);
 }
 function resetcalculator(){
    calculator.displayvalue='0';
    calculator.firstOperand=null;
    calculator.haveSecondOperand=false;
    calculator.operator=null;
 }
 function handleInput(input){
    switch(input){
        case '+':
        case '-':
        case 'x':
        case '/':
        case '=':
            handleOperator(input)
            break;
        case 'DEL':
            calculator.displayvalue=calculator.displayvalue.slice(0,-1);
            break;
        case'delete':
            calculator.displayvalue=calculator.displayvalue.slice(0,-1);
            break;
        case'backspace':
            calculator.displayvalue=calculator.displayvalue.slice(0,-1);
            break;
        case'RESET':
        resetcalculator();
        default:
            if(Number.isInteger(parseFloat(input))){
                
            }
    }
    updateDisplay();
 }

 function resetcalculator(){

 }
buttons.forEach(button=>{
    button.addEventListener('click',e=>{
        e.preventDefault()
        const{
            textContent
        }=e.target
        document.documentElement.focus()
        handleInput(textContent)
    })
})
document.body.addEventListener('keyup',e=>{
    let{
        key
    }=e
    key=key.toLowerCase();
    key==='enter'?key="=":null
    key==='*'?key="x":null
    handleInput(key)
})
const{
   themehour
}=new Date().getHours
if (themehour>16){
    toggletheme('theme3');
}
else if(themehour>10){
    toggletheme('theme2');

}else{
    toggletheme('theme1')
}