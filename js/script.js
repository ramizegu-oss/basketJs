"use strict";
let btnOpen = document.querySelector(".tab-div .icon-div .fa-outdent");
let btnClose = document.querySelector(".tab-div .icon-div .fa-indent");

btnOpen.addEventListener("click", function () {
    this.parentNode.parentNode.classList.add("open-tab");
    this.classList.add("hide");
    this.nextElementSibling.classList.remove("hide");
    btnClose.addEventListener("click", function () {
        this.previousElementSibling.classList.remove("hide");
        this.classList.add("hide");
        this.parentNode.parentNode.classList.remove("open-tab");
    });
});

let openTabBtn = document.querySelector(
    "#main-section .main-div .goods #open-tab",
);
let productForm = document.querySelector(
    "#main-section .main-div .goods .form-div",
);
let productListUl = document.querySelector("#main-section .main-div .goods ul");

let nameInput = document.querySelector(
    "#main-section .main-div .goods .form-div #nameInput",
);
let priceInput = document.querySelector(
    "#main-section .main-div .goods .form-div #priceInput",
);

let applyPro = productForm.lastElementChild;

let closeIcon = productForm.firstElementChild;

openTabBtn.addEventListener("click", function () {
    productForm.classList.remove("d-none");
});

applyPro.disabled = true;

nameInput.addEventListener("keyup", function () {
    if (nameInput.value.trim() !== "" && priceInput.value.trim() !== "") {
        applyPro.disabled = false;
    }
});
priceInput.addEventListener("keyup", function () {
    if (nameInput.value.trim() !== "" && priceInput.value.trim() !== "") {
        applyPro.disabled = false;
    }
});

closeIcon.addEventListener("click", function () {
    nameInput.value = "";
    priceInput.value = "";
    this.parentNode.classList.add("d-none");
});

applyPro.addEventListener("click", function () {
    let name = nameInput.value;
    let price = priceInput.value;

    let li = document.createElement("li");
    let iDel = document.createElement("i");
    let nameSpan = document.createElement("span");
    let priceSpan = document.createElement("span");
    let iBuy = document.createElement("i");

    nameSpan.classList.add("name");
    priceSpan.classList.add("price");
    nameSpan.innerText = name;
    priceSpan.innerText = price;
    li.classList.add("list-group-item");
    iDel.classList.add("fa-solid", "fa-trash");
    iBuy.classList.add("fa-solid", "fa-cart-shopping");
    li.append(nameSpan, priceSpan);
    li.append(iDel);
    li.append(iBuy);

    productListUl.append(li);
    nameInput.value = "";
    priceInput.value = "";
    productForm.classList.add("d-none");

    let deleteButtons = document.querySelectorAll(
        "#main-section .main-div .goods ul li .fa-trash",
    );

    deleteButtons.forEach((dtn) => {
        dtn.addEventListener("click", function () {
            this.parentNode.remove();
        });
    });

    let buyBtns = document.querySelectorAll(
        "#main-section .main-div .goods ul li .fa-cart-shopping",
    );

    buyBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            let ulBasket = document.querySelector(
                "#main-section .main-div .basket ul",
            );

            let li = document.createElement("li");
            let iDel = document.createElement("i");
            iDel.classList.add("fa-solid", "fa-trash");

            let name = this.parentNode.firstElementChild;
            let price = name.nextElementSibling;

            li.classList.add("list-group-item");
            li.append(name, price);
            li.append(iDel);
            ulBasket.append(li);

            this.parentNode.remove();

            let basketDelBtns = document.querySelectorAll(
                "#main-section .main-div .basket ul li i",
            );

            basketDelBtns.forEach((btn) => {
                btn.addEventListener("click", function () {
                    this.parentNode.remove();

                    let name = this.parentNode.firstElementChild;
                    let price = name.nextElementSibling;

                    let goodsUl = document.querySelector("#main-section .main-div .goods ul");
                    
                    let li = document.createElement("li");
                    li.classList.add("list-group-item");
                    li.append(name,price);
                    li.append(iDel,iBuy);
                    goodsUl.append(li);
                    
                });
            });
        });
    });
    
});


let clearBasketApply = document.querySelector("#main-section .main-div .basket button");
let ulBasket = document.querySelector("#main-section .main-div .basket ul");
let confirmWindow = document.querySelector(".confirm");

clearBasketApply.addEventListener("click", function () {
    let orderConfirmed = ulBasket.querySelector("li");

    confirmWindow.classList.remove("is-success", "is-error");
    confirmWindow.classList.add(orderConfirmed ? "is-success" : "is-error");
    confirmWindow.classList.remove("show");
    void confirmWindow.offsetWidth;
    confirmWindow.classList.add("show");

    if (orderConfirmed) {
        ulBasket.innerHTML = "";
    }

    setTimeout(function () {
        confirmWindow.classList.remove("show", "is-success", "is-error");
    }, 1800);
});
