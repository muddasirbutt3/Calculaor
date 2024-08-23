let screen = document.querySelector(".screen input");
let btns = document.querySelectorAll(".btns");

let isequalpressed = false;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText == "=") {
      if (screen.value) {
        let ans = eval(screen.value);
        screen.value = "";
        screen.value += ans;
        isequalpressed = true;
      }
    } else if (btn.innerText == "AC") {
      screen.value = "";
    } else if (btn.innerText == "DEL") {
      screen.value = screen.value.slice(0, -1);
    } else {
      if (isequalpressed) {
        screen.value = "";
        isequalpressed = false;
      }
      screen.value += btn.innerText;
    }
  });
});
let light = document.querySelector(".light")
let dark = document.querySelector(".dark")
let body = document.querySelector('body')
let calculator = document.querySelector(".calculator")
let toggle = document.querySelector(".toggle")

light.addEventListener("click" , () => {
    body.style.cssText = 'background-color:  #E0E3EC;'
    calculator.style.cssText = 'background-color:#ffffff;'
    toggle.style.cssText = 'background-color: #FFFFFF;'
    btns.forEach((btn) => {
      btn.style.cssText = 'background-color: #EEEEEE;'
    })
})

dark.addEventListener("click" , () => {
    body.style.cssText = 'background-color:#1B1A1A;color : white;'
    calculator.style.cssText = 'background-color:  #272727;'
    toggle.style.cssText = 'background-color: #272727;'
    btns.forEach((btn) => {
      btn.style.cssText = 'background-color: #363938;'
    })
})