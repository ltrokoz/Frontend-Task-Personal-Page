/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const selectedTheme = localStorage.getItem('selected-theme')
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
})

/*==================== Clock ====================*/
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');        
setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;        
  hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;        
})
            
/*==================== Time Zone ====================*/ 
const today = new Date();
let diff = today.getTimezoneOffset()/(-60);
document.getElementById("time-zone").innerHTML = "GMT" + diff;

/*==================== Currency exchange rate for EUR/USD ====================*/
const rateEl = document.getElementById('rate');

function timer() {
  fetch(`https://api.exchangerate-api.com/v4/latest/EUR`)
    .then(res => res.json())
    .then(res => {
      const rate = res.rates["USD"];
      rateEl.innerText = `1 EUR = ${rate} USD`
  })
}
setInterval(timer, 5000);