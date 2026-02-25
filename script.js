let percent =Number( localStorage.getItem("percent")) || 0;

let button = document.querySelector('.plus');
let water = document.querySelector('.water')
let percentContainer = document.querySelector('.percent-container')
let offset =Number( localStorage.getItem("offset")) || 9090;
let option = document.querySelector('select').value;
let deleter = document.querySelector('.delete')
deleter.addEventListener('click', ()=> {
  offset = 9090;
    localStorage.setItem("offset", offset)  

    percent = 0;
    percentContainer.textContent = percent + "%"; 
    localStorage.setItem("percent", percent)
    water.style.transform = `translateY(${offset}px)`  


})





percentContainer.textContent = percent + "%";
water.style.transform = `translateY(${offset}px)`



button.addEventListener('click', ()=> {
    option = document.querySelector('select').value;

    let ml
    if (option === "Болото") {
        ml = 10000;
    }

    if (option === "Впадина") {
        ml = 1000;
    }

    if (option === "Стакан") {
        ml = 200;
    }
    console.log(( ml / 2000 ) * 180)

    offset = offset - ( ml / 2000 ) * 180;
    localStorage.setItem("offset", offset)  

    percent = percent +100 * ( ml / 2000);
    percentContainer.textContent = percent + "%"; 
    localStorage.setItem("percent", percent)

    console.log(ml, offset)
    water.style.transform = `translateY(${offset}px)`
}
)

