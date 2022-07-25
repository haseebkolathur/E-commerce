const on1 = document.getElementById("on1");
const on2 = document.getElementById("on2");
const on3 = document.getElementById("on3");
const on4 = document.getElementById("on4");

const container = document.getElementById("container")

const cart = document.querySelector('.cart-image')
const cartBox = document.querySelector('.cart-on')
const cartOverlay = document.querySelector('.cart-on')

on1.addEventListener("click",function(){
    container.classList.add("first")
    container.classList.remove("second")
    container.classList.remove("third")
    container.classList.remove("forth")
    on1.classList.add("color")
    on2.classList.remove("color")
    on3.classList.remove("color")
    on4.classList.remove("color")
})
on2.addEventListener("click",function(){
    container.classList.add("second")
    container.classList.remove("first")
    container.classList.remove("third")
    container.classList.remove("forth")
    on2.classList.add("color")
    on1.classList.remove("color")
    on3.classList.remove("color")
    on4.classList.remove("color")
})
on3.addEventListener("click",function(){
    container.classList.add("third")
    container.classList.remove("first")
    container.classList.remove("second")
    container.classList.remove("forth")
    on3.classList.add("color")
    on1.classList.remove("color")
    on2.classList.remove("color")
    on4.classList.remove("color")
})
on4.addEventListener("click",function(){
    container.classList.add("forth")
    container.classList.remove("first")
    container.classList.remove("second")
    container.classList.remove("third")
    on4.classList.add("color")
    on1.classList.remove("color")
    on2.classList.remove("color")
    on3.classList.remove("color")
})

cart.addEventListener('click', function(){
    cartBox.classList.toggle('cart-display')
})

cartOverlay.addEventListener('click', function(){
    cartBox.classList.remove('cart-display')
})
