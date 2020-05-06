// Dom elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');
// show am and pm
const showAmPm = true;
//   create a function to show the time
// var canvas = document.createElement('canvas')
// canvas.width = 500;
// canvas.height = 250;
// var ctx = canvas.getContext('2d');
// ctx.font = '30px cursive';
// ctx.fillText("This is optional", 50, 50);
// document.body.appendChild(canvas)
function showTime () {
    let today = new Date(),
    // put this for test let today = new Date(2020, 04, 10, 08, 33, 30) 
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
    // set AM or PM use ternary operator as it is a short hand for if else statement
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;
    oninput
    // Output Time
time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;
    setTimeout(showTime, 1000)
};
// Add zero 
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
};
// set Background and greetings
function setBgGreet() {
    let today = new Date(),
    // to test  let today = new Date(2020, 04, 10, 08, 33, 30)

    hour = today.getHours();
    if (hour < 12) {
        // Morning
    document.body.style.backgroundImage = "url('../img/morning.jpg.jpg')";
    greeting.textContent = 'Good Morning';    
    } else if (hour < 18){
        //  afterNoon
        document.body.style.backgroundImage = "url('../img/afternoon.jpg.jpg')";
    greeting.textContent = 'Good Afternoon';
    } else {
        // Evening
        document.body.style.backgroundImage = "url('../img/evening.jpg.jpg')";
    greeting.textContent = 'Good Evening';
    }
};
function getName() {
    if( localStorage.getItem('name') === null) {
name.textContent = '[Enter Name]'
    } else {
        name.textContent = localStorage.getItem('name')
    }
};
function getFocus() {
    if( localStorage.getItem('focus') === null) {
focus.textContent = '[Enter focus]'
    } else {
        focus.textContent = localStorage.getItem('focus')
    }
};
function setName(e) {
    if (e.type === 'keypress') {
if(e.which == 13 || e.keyCode == 13) {
    localStorage.setItem('name', e.target.innerText)
name.blur();
}
    } else {
        localStorage.setItem('name', e.target.innerText)
    }
}
function setFocus(e) {
    if (e.type === 'keypress') {
if(e.which == 13 || e.keyCode == 13) {
    localStorage.setItem('focus', e.target.innerText)
focus.blur();
}
    } else {
        localStorage.setItem('name', e.target.innerText)
    }
}
name.addEventListener('keypress' , setName)
name.addEventListener('blur' , setName)
focus.addEventListener('keypress' , setFocus)
focus.addEventListener('blur' , setFocus)


// Run
showTime();
setBgGreet();
getName();
getFocus();